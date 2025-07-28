// Variáveis globais
let mapa;
let marcadores; // Grupo de marcadores com clustering
let todosMarcadoresUsuario = []; // Array para gerenciar marcadores de usuários individualmente
let marcadoresBuscaPoi = L.featureGroup(); // Grupo para marcadores de busca de POI (endereço/comércio)
let userLocationMarker = null; // Marcador para a localização do usuário
let clusteringAtivo = true;
let contadorBuscas = 0;
let cacheResultados = new Map();
let currentTileLayer; // Variável para armazenar a camada de tiles atual

// Constantes para URLs de Ícones
const ICON_BASE_URL = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/';
const SHADOW_URL = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png';

// Ícone personalizado para POIs (vermelho com prédio)
const POI_ICON = L.divIcon({
    html: '<i class="fa-solid fa-building"></i>', // O estilo (cor, tamanho) é definido no CSS
    className: 'custom-div-icon',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: SHADOW_URL,
    shadowSize: [41, 41]
});

// Ícone personalizado para a Localização do Usuário (alvo vermelho GRANDE)
const USER_LOCATION_ICON = L.divIcon({
    html: '<i class="fa-solid fa-bullseye"></i>', // Apenas o ícone de alvo
    className: 'custom-user-location-icon', // Classe CSS para estilo
    iconSize: [40, 40], // Tamanho base para o ícone
    iconAnchor: [20, 40], // Ponto de ancoragem central inferior
    popupAnchor: [1, -34],
    shadowUrl: SHADOW_URL,
    shadowSize: [41, 41]
});

// Coordenadas aproximadas para Campinas, SP (usadas para priorizar buscas)
const CAMPINAS_VIEWBOX = [-47.2, -23.0, -46.8, -22.7]; // [min_lon, min_lat, max_lon, max_lat]
const BRASIL_CENTER = [-14.235, -51.925]; // Centro do Brasil
const BRASIL_ZOOM = 4; // Zoom para o Brasil

// Inicializar mapa
function inicializarMapa() {
    console.log('🗺️ Inicializando PINMAP com Sistema de Busca');

    // Criar mapa centrado inicialmente no Brasil
    mapa = L.map('mapa').setView(BRASIL_CENTER, BRASIL_ZOOM);

    // Adicionar camada do mapa padrão (CartoDB Positron)
    currentTileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors © CartoDB | PINMAP v5.3',
        noWrap: true
    }).addTo(mapa);

    // Adiciona o grupo de marcadores de POI ao mapa
    marcadoresBuscaPoi.addTo(mapa);

    // Criar grupo de marcadores com clustering
    marcadores = L.markerClusterGroup({
        chunkedLoading: true,
        maxClusterRadius: 40,
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: false,
        zoomToBoundsOnClick: true,
        iconCreateFunction: function(cluster) {
            const count = cluster.getChildCount();
            let className = 'marker-cluster-small';
            if (count > 100) className = 'marker-cluster-large';
            else if (count > 20) className = 'marker-cluster-medium';

            return new L.DivIcon({
                html: '<div><span>' + count + '</span></div>',
                className: 'marker-cluster ' + className,
                iconSize: new L.Point(40, 40)
            });
        }
    });

    // Carregar usuários
    carregarUsuarios();

    // Força o Leaflet a recalcular o tamanho do mapa com um pequeno delay
    setTimeout(() => {
        mapa.invalidateSize();
        console.log('DEBUG: mapa.invalidateSize() chamado com setTimeout.');
    }, 100);

    // Configurar eventos do mapa
    configurarEventosMapa();

    // Configurar sistema de busca
    configurarSistemaBusca();

    // Atualizar estatísticas iniciais
    atualizarEstatisticas();

    console.log('✅ PINMAP inicializado com sucesso');
}

function carregarUsuarios() {
    console.log('DEBUG: Início da função carregarUsuarios().');
    console.log('DEBUG: Tipo de "usuarios":', typeof usuarios);
    console.log('DEBUG: É um array "usuarios"?', Array.isArray(usuarios));
    console.log('DEBUG: Comprimento de "usuarios":', usuarios ? usuarios.length : 'não definido');

    if (typeof usuarios === 'undefined' || !Array.isArray(usuarios) || usuarios.length === 0) {
        console.error('❌ Dados de usuários não encontrados, inválidos ou vazios. Verifique dados.js');
        document.getElementById('total-usuarios-mapa').textContent = 'Erro!';
        mapa.setView(BRASIL_CENTER, BRASIL_ZOOM);
        return;
    }

    console.log(`📊 Carregando ${usuarios.length} usuários.`);

    marcadores.clearLayers();
    todosMarcadoresUsuario = [];

    let validUsersCount = 0;

    usuarios.forEach((usuario, index) => {
        if (usuario.latitude && usuario.longitude) {
            validUsersCount++;
            const marcador = L.marker([usuario.latitude, usuario.longitude])
                .bindPopup(`
                    <div style="padding: 12px; min-width: 200px;">
                        <h4 style="margin: 0 0 8px 0; color: #2c3e50;">${usuario.nome || 'Usuário Desconhecido'}</h4>
                        <p style="margin: 0 0 8px 0; font-size: 13px; color: #666;">
                            📍 ${usuario.cidade || 'Cidade'}, ${usuario.estado || 'Estado'}<br>
                            📮 CEP: ${usuario.cep || 'Não informado'}
                        </p>
                        <div style="display: flex; gap: 8px; margin-top: 10px;">
                            <button onclick="buscarProximo('${usuario.cidade || usuario.cep}')"
                                    style="background: #3498db; color: white; border: none; padding: 4px 8px; border-radius: 3px; font-size: 11px; cursor: pointer;">
                                🔍 Buscar na região
                            </button>
                            <button onclick="obterDirecoesPara(${usuario.latitude}, ${usuario.longitude})"
                                    style="background: #27ae60; color: white; border: none; padding: 4px 8px; border-radius: 3px; font-size: 11px; cursor: pointer;">
                                🧭 Direções
                            </button>
                        </div>
                    </div>
                `);
            todosMarcadoresUsuario.push(marcador);
        } else {
            console.warn(`⚠️ Usuário ${usuario.nome} (ID: ${usuario.id || 'N/A'}, Index: ${index}) com coordenadas inválidas: Latitude: ${usuario.latitude}, Longitude: ${usuario.longitude}`);
        }
    });

    console.log(`DEBUG: ${validUsersCount} de ${usuarios.length} usuários têm coordenadas válidas.`);

    marcadores.addLayers(todosMarcadoresUsuario);
    mapa.addLayer(marcadores);

    if (todosMarcadoresUsuario.length > 0) {
        mapa.fitBounds(marcadores.getBounds(), { padding: [50, 50] });
        console.log('DEBUG: Mapa centralizado nos marcadores de usuários.');
    } else {
        mapa.setView(BRASIL_CENTER, BRASIL_ZOOM);
        console.warn('DEBUG: Nenhum usuário válido com coordenadas para centralizar, mapa centralizado no Brasil.');
    }

    console.log(`✅ ${todosMarcadoresUsuario.length} marcadores adicionados ao mapa.`);

    atualizarEstatisticas();
    console.log('DEBUG: Fim da função carregarUsuarios().');
}

function configurarEventosMapa() {
    mapa.on('zoomend', function() {
        document.getElementById('zoom-atual').textContent = mapa.getZoom();
        atualizarMarcadoresVisiveis();
    });

    mapa.on('moveend', atualizarMarcadoresVisiveis);
}

function configurarSistemaBusca() {
    const input = document.getElementById('busca-geral-input');
    const btnBuscar = document.getElementById('busca-geral-btn');
    let debounceTimer = null;

    input.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        const termo = e.target.value.trim();

        if (termo.length >= 3) {
            debounceTimer = setTimeout(() => {
                executarBuscaGeral(termo);
            }, 500);
        } else {
            ocultarResultados();
            limparMarcadoresBuscaPoi();
            limparMarcadoresUsuarioEncontrado();
        }
    });

    btnBuscar.addEventListener('click', () => {
        const termo = input.value.trim();
        if (termo) {
            executarBuscaGeral(termo);
        }
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const termo = input.value.trim();
            if (termo) {
                executarBuscaGeral(termo);
            }
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.sistema-busca-container') && !e.target.closest('.leaflet-popup')) {
            ocultarResultados();
        }
    });
}

async function executarBuscaGeral(termo) {
    limparMarcadoresBuscaPoi();
    limparMarcadoresUsuarioEncontrado();
    mostrarLoading();
    contadorBuscas++;
    document.getElementById('buscas-realizadas-mapa').textContent = contadorBuscas;

    try {
        const isCep = /^\d{5}-?\d{3}$/.test(termo);
        const isPossibleUserName = usuarios.some(u => u.nome && u.nome.toLowerCase().includes(termo.toLowerCase()));

        if (isCep) {
            await buscarCep(termo);
        } else if (isPossibleUserName) {
            buscarUsuarioPorNome(termo);
        } else {
            await buscarEndereco(termo);
        }
    } catch (error) {
        console.error('Erro na busca geral:', error);
        mostrarErro('Erro ao realizar busca. Tente novamente.');
    } finally {
        document.getElementById('busca-loading').style.display = 'none';
    }
}

async function buscarEndereco(termo) {
    if (cacheResultados.has(termo)) {
        mostrarResultados(cacheResultados.get(termo), 'poi');
        return;
    }

    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(termo)}` +
                         `&format=json&limit=15&addressdetails=1&extratags=1&namedetails=1&accept-language=pt-BR,pt,en` +
                         `&countrycodes=br` +
                         `&viewbox=${CAMPINAS_VIEWBOX.join(',')}` +
                         `&bounded=0`;

    const response = await fetch(url, {
        headers: {
            'User-Agent': 'PINMAP-Sistema-Busca/1.0'
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP ${response.status} ao buscar endereço`);
    }

    const dados = await response.json();

    const resultados = dados.map(item => ({
        nome: extrairNome(item),
        endereco: formatarEndereco(item),
        tipo: determinarTipo(item),
        latitude: parseFloat(item.lat),
        longitude: parseFloat(item.lon),
        bbox: item.boundingbox
    }));

    cacheResultados.set(termo, resultados);
    mostrarResultados(resultados, 'poi');
}

async function buscarCep(cep) {
    const cleanCep = cep.replace(/\D/g, '');
    if (cleanCep.length !== 8) {
        mostrarErro('CEP inválido. Digite 8 dígitos numéricos.');
        return;
    }

    try {
        const viacepUrl = `https://viacep.com.br/ws/${cleanCep}/json/`;
        const viacepResponse = await fetch(viacepUrl);
        const viacepData = await viacepResponse.json();

        if (viacepData.erro) {
            mostrarErro('CEP não encontrado ou inválido no ViaCEP.');
            return;
        }

        const addressQuery = `${viacepData.logradouro || ''}, ${viacepData.bairro || ''}, ${viacepData.localidade || ''}, ${viacepData.uf || ''}, Brasil`;
        const nominatimUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(addressQuery)}&format=json&limit=1&countrycodes=br`;

        const nominatimResponse = await fetch(nominatimUrl, {
            headers: { 'User-Agent': 'PINMAP-Sistema-Busca/1.0 (ViaCEP integration)' }
        });
        const nominatimData = await nominatimResponse.json();

        if (nominatimData.length > 0) {
            const lat = parseFloat(nominatimData[0].lat);
            const lon = parseFloat(nominatimData[0].lon);
            const name = nominatimData[0].display_name;

            mostrarResultados([{
                nome: `CEP ${cleanCep}`,
                endereco: viacepData.logradouro ? `${viacepData.logradouro}, ${viacepData.bairro || viacepData.localidade}` : name,
                tipo: '📮 CEP',
                latitude: lat,
                longitude: lon,
                bbox: nominatimData[0].boundingbox
            }], 'cep');

        } else {
            mostrarErro('Não foi possível geocodificar o endereço do CEP no mapa.');
        }

    } catch (error) {
        console.error('Erro na busca de CEP:', error);
        mostrarErro('Erro ao buscar CEP. Tente novamente.');
    }
}

let marcadoresUsuarioEncontrado = [];

function buscarUsuarioPorNome(nomeCompleto) {
    limparMarcadoresBuscaPoi();
    limparMarcadoresUsuarioEncontrado();

    const termoLimpo = nomeCompleto.toLowerCase().trim();
    const usuariosEncontrados = usuarios.filter(user =>
        user.nome && user.nome.toLowerCase().includes(termoLimpo)
    );

    const container = document.getElementById('busca-resultados');
    container.innerHTML = '';

    if (usuariosEncontrados.length > 0) {
        const boundsGroup = L.featureGroup();
        usuariosEncontrados.forEach(user => {
            if (user.latitude && user.longitude) {
                const marker = L.marker([user.latitude, user.longitude], {
                    icon: L.icon({
                        iconUrl: `${ICON_BASE_URL}marker-icon-2x-orange.png`,
                        shadowUrl: SHADOW_URL,
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41]
                    })
                })
                    .bindPopup(`
                        <div style="padding: 10px;">
                            <strong>${user.nome || 'Usuário Desconhecido'}</strong><br>
                            <small>Rua: ${user.rua || 'Não informada'}</small><br>
                            <small>CEP: ${user.cep || 'Não informado'}</small><br>
                            <button onclick="obterDirecoesPara(${user.latitude}, ${user.longitude})"
                                    style="margin-top: 8px; background: #27ae60; color: white; border: none; padding: 4px 8px; border-radius: 3px; font-size: 11px; cursor: pointer;">
                                🧭 Direções
                            </button>
                        </div>
                    `);
                marker.addTo(mapa);
                marcadoresUsuarioEncontrado.push(marker);
                boundsGroup.addLayer(marker);

                container.innerHTML += `
                    <div class="resultado-item" onclick="mapa.flyTo([${user.latitude}, ${user.longitude}], 15); ocultarResultados();">
                        <div class="resultado-nome">${user.nome}</div>
                        <div class="resultado-endereco">${user.cidade || ''}, ${user.estado || ''}</div>
                        <div class="resultado-tipo">👤 Usuário</div>
                    </div>
                `;
            }
        });

        if (boundsGroup.getLayers().length > 0) {
            mapa.fitBounds(boundsGroup.getBounds(), { padding: [50, 50] });
        }
        container.style.display = 'block';
    } else {
        mostrarErro('Nenhum usuário encontrado com esse nome.');
    }
    document.getElementById('busca-loading').style.display = 'none';
}

function extrairNome(item) {
    return item.display_name.split(',')[0] || item.name || 'Local encontrado';
}

function formatarEndereco(item) {
    const addressParts = [];
    if (item.address) {
        if (item.address.road) addressParts.push(item.address.road);
        if (item.address.house_number) addressParts.push(item.address.house_number);
        if (item.address.suburb && item.address.suburb !== item.address.city) addressParts.push(item.address.suburb);
        if (item.address.city) addressParts.push(item.address.city);
        if (item.address.state) addressParts.push(item.address.state);
        if (item.address.postcode) addressParts.push(`CEP ${item.address.postcode}`);
    }
    const endereco = addressParts.length > 0 ? addressParts.join(', ') : item.display_name;
    return endereco.length > 80 ? endereco.substring(0, 80) + '...' : endereco;
}

function determinarTipo(item) {
    const classe = item.class;
    const tipos = {
        'highway': '🛣️ Via',
        'amenity': '🏢 Estabelecimento',
        'shop': '🛍️ Comércio',
        'tourism': '🏛️ Turismo',
        'leisure': '🎯 Lazer',
        'place': '📍 Local',
        'building': '🏢 Edifício',
        'natural': '🌿 Natural',
        'landuse': '🗺️ Área',
        'office': '🏢 Escritório',
        'bank': '🏦 Banco',
        'atm': '🏧 ATM',
        'school': '🏫 Escola',
        'hospital': '🏥 Hospital',
        'pharmacy': '💊 Farmácia',
        'restaurant': '🍽️ Restaurante',
        'fuel': '⛽ Posto',
        'hotel': '🏨 Hotel',
        'supermarket': '🛒 Supermercado',
        'parking': '🅿️ Estacionamento'
    };
    return tipos[classe] || '📍 Local';
}

function mostrarLoading() {
    document.getElementById('busca-loading').style.display = 'block';
    document.getElementById('busca-resultados').style.display = 'none';
}

function mostrarResultados(resultados, tipoBusca = 'default') {
    const container = document.getElementById('busca-resultados');
    const loading = document.getElementById('busca-loading');

    loading.style.display = 'none';
    container.innerHTML = '';
    limparMarcadoresBuscaPoi();

    if (resultados.length === 0) {
        container.innerHTML = '<div class="resultado-item">Nenhum resultado encontrado</div>';
    } else {
        const boundsGroup = L.featureGroup();

        resultados.forEach(resultado => {
            if (resultado.latitude && resultado.longitude) {
                let markerIcon;

                // Usa POI_ICON para tipo 'poi' (endereços/comércio) e default
                if (tipoBusca === 'poi' || tipoBusca === 'default') {
                    markerIcon = POI_ICON;
                } else if (tipoBusca === 'cep') {
                    markerIcon = L.icon({
                        iconUrl: `${ICON_BASE_URL}marker-icon-2x-violet.png`, // Marcador roxo para CEP
                        shadowUrl: SHADOW_URL,
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41]
                    });
                } else {
                    // Fallback para outros tipos, pode ser ajustado
                    markerIcon = L.icon({
                        iconUrl: `${ICON_BASE_URL}marker-icon-2x-red.png`,
                        shadowUrl: SHADOW_URL,
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41]
                    });
                }

                const marker = L.marker([resultado.latitude, resultado.longitude], {
                    icon: markerIcon
                })
                    .bindPopup(`
                        <div style="padding: 10px; min-width: 180px;">
                            <h5 style="margin: 0 0 5px 0; color: #333;">${resultado.nome}</h5>
                            <p style="margin: 0 0 5px 0; font-size: 12px; color: #555;">${resultado.endereco}</p>
                            <span style="font-size: 11px; color: #777;">${resultado.tipo}</span>
                            <button onclick="obterDirecoesPara(${resultado.latitude}, ${resultado.longitude})"
                                    style="margin-top: 8px; background: #27ae60; color: white; border: none; padding: 4px 8px; border-radius: 3px; font-size: 11px; cursor: pointer;">
                                🧭 Direções
                            </button>
                        </div>
                    `);

                marcadoresBuscaPoi.addLayer(marker);
                boundsGroup.addLayer(marker);

                container.innerHTML += `
                    <div class="resultado-item" onclick="mapa.flyTo([${resultado.latitude}, ${resultado.longitude}], 15); ocultarResultados();">
                        <div class="resultado-nome">${resultado.nome}</div>
                        <div class="resultado-endereco">${resultado.endereco}</div>
                        <div class="resultado-tipo">${resultado.tipo}</div>
                    </div>
                `;
            }
        });

        if (boundsGroup.getLayers().length > 0) {
            mapa.fitBounds(boundsGroup.getBounds(), { padding: [50, 50] });
        }
    }

    container.style.display = 'block';
}

function mostrarErro(mensagem) {
    const container = document.getElementById('busca-resultados');
    const loading = document.getElementById('busca-loading');

    loading.style.display = 'none';
    container.innerHTML = `<div class="resultado-item" style="color: #dc3545;">${mensagem}</div>`;
    container.style.display = 'block';
}

function ocultarResultados() {
    document.getElementById('busca-resultados').style.display = 'none';
    document.getElementById('busca-loading').style.display = 'none';
}

function limparMarcadoresBuscaPoi() {
    marcadoresBuscaPoi.clearLayers();
}

function limparMarcadoresUsuarioEncontrado() {
    marcadoresUsuarioEncontrado.forEach(marker => {
        mapa.removeLayer(marker);
    });
    marcadoresUsuarioEncontrado = [];
}

function irParaLocal(lat, lon, nome, isUserSearch = false) {
    mapa.flyTo([lat, lon], 15);
    ocultarResultados();
}

function atualizarMarcadoresVisiveis() {
    const bounds = mapa.getBounds();
    let visiveis = 0;

    if (clusteringAtivo) {
        marcadores.eachLayer(function(layer) {
            if (bounds.contains(layer.getLatLng())) {
                if (layer instanceof L.MarkerCluster) {
                    visiveis += layer.getChildCount();
                } else {
                    visiveis++;
                }
            }
        });
    } else {
        todosMarcadoresUsuario.forEach(layer => {
            if (mapa.hasLayer(layer) && bounds.contains(layer.getLatLng())) {
                visiveis++;
            }
        });
    }

    marcadoresBuscaPoi.eachLayer(layer => {
        if (bounds.contains(layer.getLatLng())) {
            visiveis++;
        }
    });

    marcadoresUsuarioEncontrado.forEach(marker => {
        if (mapa.hasLayer(marker) && bounds.contains(marker.getLatLng())) {
            visiveis++;
        }
    });

    document.getElementById('marcadores-visiveis').textContent = visiveis;
}

// Funções de controle do mapa
function voltarInicio() {
    mapa.setView(BRASIL_CENTER, BRASIL_ZOOM);
    limparMarcadoresBuscaPoi();
    limparMarcadoresUsuarioEncontrado();
    atualizarEstatisticas();
}

function centralizarUsuarios() {
    if (todosMarcadoresUsuario.length > 0) {
        mapa.fitBounds(marcadores.getBounds(), { padding: [50, 50] });
    } else {
        alert('Nenhum usuário para centralizar no mapa.');
    }
    limparMarcadoresBuscaPoi();
    limparMarcadoresUsuarioEncontrado();
    atualizarEstatisticas();
}

function alternarClustering() {
    if (clusteringAtivo) {
        mapa.removeLayer(marcadores);
        todosMarcadoresUsuario.forEach(m => m.addTo(mapa));
        console.log('Clustering desativado. Marcadores individuais exibidos.');
    } else {
        todosMarcadoresUsuario.forEach(m => mapa.removeLayer(m));
        mapa.addLayer(marcadores);
        console.log('Clustering ativado novamente.');
    }
    clusteringAtivo = !clusteringAtivo;
    atualizarEstatisticas(); // Atualiza a estatística do botão
}

function limparBusca() {
    document.getElementById('busca-geral-input').value = '';
    ocultarResultados();
    limparMarcadoresBuscaPoi();
    limparMarcadoresUsuarioEncontrado();
}

function obterMinhaLocalizacao() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                if (userLocationMarker) {
                    mapa.removeLayer(userLocationMarker);
                }
                userLocationMarker = L.marker([lat, lon], {
                    // Usa o novo USER_LOCATION_ICON para a localização do usuário
                    icon: USER_LOCATION_ICON
                }).addTo(mapa)
                    .bindPopup("Sua localização atual").openPopup();
                mapa.setView([lat, lon], 14);
                atualizarEstatisticas();
                limparMarcadoresBuscaPoi();
                limparMarcadoresUsuarioEncontrado();
            },
            (error) => {
                console.error("Erro ao obter localização: ", error);
                alert("Não foi possível obter sua localização. Verifique as permissões do navegador.");
            }
        );
    } else {
        alert("Geolocalização não é suportada pelo seu navegador.");
    }
}

function obterDirecoesPara(lat, lon) {
    window.open(`http://maps.google.com/maps?daddr=${lat},${lon}`, '_blank');
}

function buscarProximo(termo) {
    document.getElementById('busca-geral-input').value = termo;
    executarBuscaGeral(termo);
}

function atualizarEstatisticas() {
    document.getElementById('total-usuarios-mapa').textContent = todosMarcadoresUsuario.length;
    document.getElementById('zoom-atual').textContent = mapa.getZoom();
    atualizarMarcadoresVisiveis();
}

// Adicionado para alternar estilos de mapa
function alterarEstiloMapa(estilo) {
    if (currentTileLayer) {
        mapa.removeLayer(currentTileLayer);
    }

    let newTileLayer;
    let attribution = '© OpenStreetMap contributors | PINMAP v5.3';

    switch (estilo) {
        case 'dark':
            newTileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: `${attribution} © CartoDB Dark`
            });
            break;
        case 'satellite':
            newTileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: `${attribution} Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community`
            });
            break;
        case 'default':
        default:
            newTileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                attribution: `${attribution} © CartoDB Light`
            });
            break;
    }
    currentTileLayer = newTileLayer.addTo(mapa);
    console.log(`Estilo do mapa alterado para: ${estilo}`);
}

document.addEventListener('DOMContentLoaded', function() {
    inicializarMapa();
});
