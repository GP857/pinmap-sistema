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

// Ícone personalizado para POIs (vermelho com casa)
const POI_ICON = L.divIcon({
    html: '<i class="fa-solid fa-building"></i>', // O estilo (cor, tamanho) é definido no CSS
    className: 'custom-div-icon',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
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
        maxClusterRadius: 50,
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
                                    style="background: #3498db; color: white; border: none; padding: 4px 8px; border-radius
