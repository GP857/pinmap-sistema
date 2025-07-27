
// SISTEMA DE BUSCA AVANÇADO PARA MAPA - PINMAP v5.2
// Suporte: Ruas, Bairros, Cidades, Estados, Países, Estabelecimentos, Usuários (locais)

class SistemaBuscaMapa {
    constructor(mapa) {
        this.mapa = mapa;
        this.marcadorBusca = null;
        this.resultadosCache = new Map();
        this.ultimaBusca = '';
        this.debounceTimer = null;
        this.contadorBuscas = 0; // Move o contador para a classe para melhor encapsulamento

        this.inicializar();
    }
    
    inicializar() {
        this.criarInterfaceBusca();
        this.configurarEventos();
        console.log('🔍 Sistema de Busca Avançado inicializado');
    }
    
    criarInterfaceBusca() {
        // Criar container de busca
        const containerBusca = document.createElement('div');
        containerBusca.id = 'sistema-busca-mapa';
        containerBusca.className = 'sistema-busca-container';
        containerBusca.innerHTML = `
            <div class="busca-input-wrapper">
                <input type="text" id="busca-endereco-input" placeholder="Buscar endereço, local ou usuário...">
                <div class="busca-botoes">
                    <button id="busca-endereco-btn" title="Buscar">🔍</button>
                    <button id="limpar-busca-btn" title="Limpar Busca">✖️</button>
                </div>
            </div>
            <div id="busca-loading" style="display: none;">Carregando...</div>
            <ul id="busca-resultados" style="display: none;">
                </ul>
        `;
        
        // Adicionar ao corpo (já no HTML agora)
        // document.body.appendChild(containerBusca);
        // Mantenho a criação no JS, mas a injeção ao body no HTML principal pode ser mais performática.
        // Se a div 'sistema-busca-mapa' já estiver no HTML, este código irá sobrescrevê-la ou causará duplicidade.
        // Assumindo que você vai remover a div do HTML e deixar o JS criar, ou vice-versa.
        // Para a integração, vou injetar no body. Se já existir, pode ajustar.
        document.body.appendChild(containerBusca);
    }
    
    configurarEventos() {
        const input = document.getElementById('busca-endereco-input');
        const btnBuscar = document.getElementById('busca-endereco-btn');
        const btnLimpar = document.getElementById('limpar-busca-btn');
        const resultadosContainer = document.getElementById('busca-resultados');
        
        // Busca em tempo real (debounced)
        input.addEventListener('input', (e) => {
            clearTimeout(this.debounceTimer);
            const termo = e.target.value.trim();
            
            if (termo.length >= 3) { // Apenas busca se tiver 3 ou mais caracteres
                this.debounceTimer = setTimeout(() => {
                    this.buscar(termo); // Chama a nova função de busca unificada
                }, 500);
            } else {
                this.ocultarResultados();
                btnLimpar.style.display = 'none'; // Esconde o botão Limpar se o campo estiver vazio
            }
        });
        
        // Busca ao clicar no botão
        btnBuscar.addEventListener('click', () => {
            const termo = input.value.trim();
            if (termo) {
                this.buscar(termo);
            }
        });
        
        // Busca ao pressionar Enter
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const termo = input.value.trim();
                if (termo) {
                    this.buscar(termo);
                }
            }
        });
        
        // Limpar busca
        btnLimpar.addEventListener('click', () => {
            this.limparBusca();
        });
        
        // Fechar resultados ao clicar fora do container de busca
        document.addEventListener('click', (e) => {
            const containerBusca = document.getElementById('sistema-busca-mapa');
            if (containerBusca && !containerBusca.contains(e.target)) {
                this.ocultarResultados();
            }
        });
    }
    
    // Nova função de busca unificada (prioriza usuários, depois Nominatim)
    async buscar(termo) {
        this.mostrarLoading();
        this.ultimaBusca = termo;
        this.contadorBuscas++; // Incrementa o contador de buscas na própria classe
        document.getElementById('buscas-realizadas-mapa').textContent = this.contadorBuscas; // Atualiza UI

        try {
            // 4. Tentar busca local por usuário primeiro
            const resultadosUsuarios = await this.buscarUsuariosLocais(termo);
            if (resultadosUsuarios.length > 0) {
                this.resultadosCache.set(termo, resultadosUsuarios);
                this.mostrarResultados(resultadosUsuarios);
                return; // Exibe usuários e sai
            }

            // Se não encontrou usuários, verificar cache para Nominatim
            if (this.resultadosCache.has(termo)) {
                this.mostrarResultados(this.resultadosCache.get(termo));
                return;
            }

            // 3. e 5. Buscar via API Nominatim (restrito ao Brasil e priorizando Campinas/SP)
            const resultadosNominatim = await this.buscarViaAPI(termo);
            this.resultadosCache.set(termo, resultadosNominatim);
            this.mostrarResultados(resultadosNominatim);

        } catch (error) {
            console.error('Erro na busca:', error);
            this.mostrarErro('Erro ao buscar. Tente novamente.');
        }
    }

    // 4. Implementa busca local por nome de usuário
    async buscarUsuariosLocais(termo) {
        if (typeof usuarios === 'undefined' || !Array.isArray(usuarios)) {
            console.warn('Dados de usuários não carregados ou inválidos para busca local.');
            return [];
        }

        const termoLower = termo.toLowerCase();
        const resultadosLocais = usuarios.filter(usuario =>
            usuario.nome && usuario.nome.toLowerCase().includes(termoLower) &&
            usuario.latitude && usuario.longitude && !isNaN(usuario.latitude) && !isNaN(usuario.longitude)
        ).map(usuario => ({
            nome: usuario.nome,
            endereco: `${usuario.cidade || 'N/A'}, ${usuario.estado || 'N/A'}, ${usuario.pais || 'N/A'}`,
            tipo: '👤 Usuário',
            latitude: usuario.latitude,
            longitude: usuario.longitude,
            dadosOriginais: usuario // Para referência futura, se necessário
        }));

        return resultadosLocais;
    }
    
    async buscarViaAPI(termo) {
        // 3. e 5. Construir URL da API Nominatim com restrições para Brasil e prioridade para SP/Campinas
        const baseUrl = 'https://nominatim.openstreetmap.org/search';
        // Bounding box para o estado de São Paulo (aproximado, pode ser ajustado)
        // Coordenadas: lat_sul, lon_oeste, lat_norte, lon_leste
        // Exemplo de SP: -25.3, -53.2, -19.7, -44.0
        const viewboxSP = '-25.3,-53.2,-19.7,-44.0';

        const params = new URLSearchParams({
            q: termo,
            format: 'json',
            limit: 10,
            addressdetails: 1,
            extratags: 1,
            namedetails: 1,
            'accept-language': 'pt-BR,pt,en',
            countrycodes: 'br', // Restringe a busca ao Brasil
            viewbox: viewboxSP, // Prioriza resultados dentro desta área
            bounded: 1 // Força que os resultados estejam dentro da viewbox
        });
        
        const url = `${baseUrl}?${params.toString()}`;
        
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'PINMAP-Sistema-Busca/1.0 (seuemail@exemplo.com)' // Substitua com seu email de contato
            }
        });
        
        if (!response.ok) { // Verifica se a resposta foi bem-sucedida (status 200 OK)
            // Lança um erro se a requisição falhou (ex: 404, 500)
            throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
        }
        
        const dados = await response.json();
        
        // Processar e formatar resultados
        return dados.map(item => ({
            nome: this.extrairNome(item),
            endereco: this.formatarEndereco(item),
            tipo: this.determinarTipo(item),
            latitude: parseFloat(item.lat),
            longitude: parseFloat(item.lon),
            bbox: item.boundingbox,
            dadosOriginais: item
        }));
    }
    
    extrairNome(item) {
        // Prioriza o nome mais específico ou o display_name completo
        return item.name || item.display_name.split(',')[0] || 'Local encontrado';
    }
    
    formatarEndereco(item) {
        const endereco = item.display_name;
        // Limitar tamanho do endereço exibido
        return endereco.length > 80 ? endereco.substring(0, 80) + '...' : endereco;
    }
    
    determinarTipo(item) {
        const classe = item.class;
        const tipo = item.type;
        
        const tipos = {
            'amenity': '🏢 Estabelecimento',
            'shop': '🛍️ Comércio',
            'highway': '🛣️ Via',
            'tourism': '🏛️ Turismo',
            'leisure': '🎯 Lazer',
            'place': '📍 Local',
            'building': '🏢 Edifício',
            'natural': '🌿 Natural',
            'landuse': '🗺️ Área',
            'railway': '🚂 Ferrovia',
            'boundary': '🗺️ Limite',
            'waterway': '💧 Hidrovia'
        };

        // Adiciona lógica específica para McDonald's ou outros fast-foods
        if (item.osm_type === 'node' && item.tags && item.tags.amenity === 'fast_food') {
             if (item.tags.name && item.tags.name.toLowerCase().includes('mcdonalds')) {
                return '🍔 McDonald\'s';
            }
            return '🍔 Fast Food';
        }

        // Para CEPs, se a busca foi por número puro
        if (item.type === 'postcode') {
            return '✉️ CEP';
        }
        
        return tipos[classe] || '📍 Local';
    }
    
    mostrarLoading() {
        document.getElementById('busca-loading').style.display = 'block';
        document.getElementById('busca-resultados').style.display = 'none';
        document.getElementById('limpar-busca-btn').style.display = 'block'; // Mostra o botão limpar
    }
    
    mostrarResultados(resultados) {
        const container = document.getElementById('busca-resultados');
        const loading = document.getElementById('busca-loading');
        const btnLimpar = document.getElementById('limpar-busca-btn');
        
        loading.style.display = 'none';
        btnLimpar.style.display = 'block';
        
        if (resultados.length === 0) {
            container.innerHTML = '<li class="resultado-item erro">Nenhum resultado encontrado.</li>';
        } else {
            container.innerHTML = resultados.map(resultado => `
                <li class="resultado-item" 
                    onclick="sistemaBusca.selecionarResultado(${encodeURIComponent(JSON.stringify(resultado))})">
                    <strong>${resultado.nome}</strong>
                    <span>${resultado.endereco} (${resultado.tipo})</span>
                </li>
            `).join('');
        }
        
        container.style.display = 'block';
    }
    
    mostrarErro(mensagem) {
        const container = document.getElementById('busca-resultados');
        const loading = document.getElementById('busca-loading');
        
        loading.style.display = 'none';
        container.innerHTML = `<li class="resultado-item erro">${mensagem}</li>`;
        container.style.display = 'block';
    }
    
    selecionarResultado(resultado) {
        console.log('Local selecionado:', resultado);
        
        // Centralizar mapa no resultado
        this.mapa.setView([resultado.latitude, resultado.longitude], 15);
        
        // Remover marcador anterior
        if (this.marcadorBusca) {
            this.mapa.removeLayer(this.marcadorBusca);
        }
        
        // Adicionar novo marcador (personalizado para busca)
        this.marcadorBusca = L.marker([resultado.latitude, resultado.longitude], {
            icon: L.divIcon({
                className: 'marcador-busca-custom', // Classe para estilização
                html: `
                    <div style="background: ${resultado.tipo === '👤 Usuário' ? '#007bff' : '#ff4444'}; 
                                color: white; border-radius: 50%; width: 32px; height: 32px; 
                                display: flex; align-items: center; justify-content: center; 
                                font-size: 18px; border: 3px solid white; 
                                box-shadow: 0 2px 8px rgba(0,0,0,0.3); font-weight: bold;">
                        ${resultado.tipo === '👤 Usuário' ? '👤' : '📍'}
                    </div>`,
                iconSize: [32, 32],
                iconAnchor: [16, 32] // Ajuste para a base do pino
            })
        }).addTo(this.mapa);
        
        // Criar popup com informações
        const popup = L.popup({
            maxWidth: 300,
            className: 'popup-busca'
        }).setContent(`
            <h3>${resultado.nome}</h3>
            <p><strong>Endereço:</strong> ${resultado.endereco}</p>
            <p><strong>Tipo:</strong> ${resultado.tipo}</p>
            <a href="javascript:void(0)" onclick="obterDirecoesPara(${resultado.latitude}, ${resultado.longitude})" class="popup-acao">Obter Direções</a>
        `);
        
        this.marcadorBusca.bindPopup(popup).openPopup();
        
        // Ocultar resultados
        this.ocultarResultados();
        
        // Atualizar input com nome selecionado
        document.getElementById('busca-endereco-input').value = resultado.nome;
    }
    
    // Não é mais necessário, já que está no HTML
    // obterDirecoes(lat, lng) {
    //     const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    //     window.open(url, '_blank');
    // }
    
    limparBusca() {
        document.getElementById('busca-endereco-input').value = '';
        document.getElementById('limpar-busca-btn').style.display = 'none';
        this.ocultarResultados();
        
        // Remover marcador de busca
        if (this.marcadorBusca) {
            this.mapa.removeLayer(this.marcadorBusca);
            this.marcadorBusca = null;
        }
    }
    
    ocultarResultados() {
        document.getElementById('busca-resultados').style.display = 'none';
        document.getElementById('busca-loading').style.display = 'none';
    }
}

// Variável global para acesso (já declarada no HTML principal, mas aqui é inicializada)
let sistemaBusca = null;

// Inicializar quando o mapa estiver pronto (chamado do HTML principal)
// Esta função é chamada do script inline do index.html
// function inicializarSistemaBusca(mapa) {
//     sistemaBusca = new SistemaBuscaMapa(mapa);
//     return sistemaBusca;
// }

console.log('🔍 Sistema de Busca Avançado carregado - PINMAP v5.2');
