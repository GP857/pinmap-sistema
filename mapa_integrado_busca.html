
// SISTEMA DE BUSCA AVANÇADO PARA MAPA - PINMAP v5.2
// Suporte: Ruas, Bairros, Cidades, Estados, Países, Estabelecimentos

class SistemaBuscaMapa {
    constructor(mapa) {
        this.mapa = mapa;
        this.marcadorBusca = null;
        this.resultadosCache = new Map();
        this.ultimaBusca = '';
        this.debounceTimer = null;
        
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
        containerBusca.innerHTML = ;
        
        // Adicionar estilos
        const estilos = document.createElement('style');
        estilos.textContent = ;
        
        document.head.appendChild(estilos);
        document.body.appendChild(containerBusca);
    }
    
    configurarEventos() {
        const input = document.getElementById('busca-endereco-input');
        const btnBuscar = document.getElementById('busca-endereco-btn');
        const btnLimpar = document.getElementById('limpar-busca-btn');
        
        // Busca em tempo real (debounced)
        input.addEventListener('input', (e) => {
            clearTimeout(this.debounceTimer);
            const termo = e.target.value.trim();
            
            if (termo.length >= 3) {
                this.debounceTimer = setTimeout(() => {
                    this.buscarEndereco(termo);
                }, 500);
            } else {
                this.ocultarResultados();
            }
        });
        
        // Busca ao clicar no botão
        btnBuscar.addEventListener('click', () => {
            const termo = input.value.trim();
            if (termo) {
                this.buscarEndereco(termo);
            }
        });
        
        // Busca ao pressionar Enter
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const termo = input.value.trim();
                if (termo) {
                    this.buscarEndereco(termo);
                }
            }
        });
        
        // Limpar busca
        btnLimpar.addEventListener('click', () => {
            this.limparBusca();
        });
        
        // Fechar resultados ao clicar fora
        document.addEventListener('click', (e) => {
                this.ocultarResultados();
            }
        });
    }
    
    async buscarEndereco(termo) {
        
        this.mostrarLoading();
        this.ultimaBusca = termo;
        
        try {
            // Verificar cache
            if (this.resultadosCache.has(termo)) {
                this.mostrarResultados(this.resultadosCache.get(termo));
                return;
            }
            
            // Buscar via API Nominatim
            const resultados = await this.buscarViaAPI(termo);
            
            // Salvar no cache
            this.resultadosCache.set(termo, resultados);
            
            // Mostrar resultados
            this.mostrarResultados(resultados);
            
        } catch (error) {
            console.error('Erro na busca:', error);
            this.mostrarErro('Erro ao buscar endereço. Tente novamente.');
        }
    }
    
    async buscarViaAPI(termo) {
        // Construir URL da API Nominatim
        const baseUrl = 'https://nominatim.openstreetmap.org/search';
        const params = new URLSearchParams({
            q: termo,
            format: 'json',
            limit: 10,
            addressdetails: 1,
            extratags: 1,
            namedetails: 1,
            'accept-language': 'pt-BR,pt,en'
        });
        
        const url = ;
        
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'PINMAP-Sistema-Busca/1.0'
            }
        });
        
            throw new Error();
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
        return item.display_name.split(',')[0] || item.name || 'Local encontrado';
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
            'highway': '🛣️ Via',
            'amenity': '🏢 Estabelecimento',
            'shop': '🛍️ Comércio',
            'tourism': '🏛️ Turismo',
            'leisure': '🎯 Lazer',
            'place': '📍 Local',
            'building': '🏢 Edifício',
            'natural': '🌿 Natural',
            'landuse': '🗺️ Área'
        };
        
        return tipos[classe] || '📍 Local';
    }
    
    mostrarLoading() {
        document.getElementById('busca-loading').style.display = 'block';
        document.getElementById('busca-resultados').style.display = 'none';
    }
    
    mostrarResultados(resultados) {
        const container = document.getElementById('busca-resultados');
        const loading = document.getElementById('busca-loading');
        const btnLimpar = document.getElementById('limpar-busca-btn');
        
        loading.style.display = 'none';
        btnLimpar.style.display = 'block';
        
        if (resultados.length === 0) {
            container.innerHTML = '<div class="resultado-item">Nenhum resultado encontrado</div>';
        } else {
            container.innerHTML = resultados.map(resultado => ).join('');
        }
        
        container.style.display = 'block';
    }
    
    mostrarErro(mensagem) {
        const container = document.getElementById('busca-resultados');
        const loading = document.getElementById('busca-loading');
        
        loading.style.display = 'none';
        container.innerHTML = ;
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
        
        // Adicionar novo marcador
        this.marcadorBusca = L.marker([resultado.latitude, resultado.longitude], {
            icon: L.divIcon({
                className: 'marcador-busca',
                html: '<div style="background: #ff4444; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-size: 16px; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">📍</div>',
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            })
        }).addTo(this.mapa);
        
        // Criar popup com informações
        const popup = L.popup({
            maxWidth: 300,
            className: 'popup-busca'
        }).setContent();
        
        this.marcadorBusca.bindPopup(popup).openPopup();
        
        // Ocultar resultados
        this.ocultarResultados();
        
        // Atualizar input com nome selecionado
        document.getElementById('busca-endereco-input').value = resultado.nome;
    }
    
    obterDirecoes(lat, lng) {
        // Abrir Google Maps com direções
        const url = ;
        window.open(url, '_blank');
    }
    
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

// Variável global para acesso
let sistemaBusca = null;

// Inicializar quando o mapa estiver pronto
function inicializarSistemaBusca(mapa) {
    sistemaBusca = new SistemaBuscaMapa(mapa);
    return sistemaBusca;
}

console.log('🔍 Sistema de Busca Avançado carregado - PINMAP v5.2');
