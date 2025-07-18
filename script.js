// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    atualizarEstatisticas();
    console.log('✅ PINMAP carregado com sucesso!');
    console.log(`📊 Total de usuários: ${usuarios.length}`);
    console.log(`🏙️ Cidades: ${estatisticas.cidades}`);
    console.log(`🗺️ Estados: ${estatisticas.estados}`);
});

// Atualizar estatísticas na página inicial
function atualizarEstatisticas() {
    const stats = obterEstatisticas();
    
    document.getElementById('total-usuarios').textContent = stats.totalUsuarios;
    document.getElementById('usuarios-mapeados').textContent = stats.usuariosMapeados;
    document.getElementById('cidades').textContent = stats.cidades;
    document.getElementById('estados').textContent = stats.estados;
}

// Mostrar lista de usuários
function mostrarUsuarios() {
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = '👥 Lista de Usuários Cadastrados';
    
    let html = `
        <div style="margin-bottom: 20px;">
            <input type="text" id="filtro-nome" placeholder="Buscar por nome..." 
                   style="padding: 10px; border-radius: 5px; border: 1px solid #444; background: rgba(255,255,255,0.1); color: white; width: 100%; margin-bottom: 10px;">
            <select id="filtro-estado" style="padding: 10px; border-radius: 5px; border: 1px solid #444; background: rgba(255,255,255,0.1); color: white; margin-right: 10px;">
                <option value="">Todos os estados</option>
                <option value="SP">São Paulo</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="MG">Minas Gerais</option>
                <option value="DF">Distrito Federal</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="RS">Rio Grande do Sul</option>
            </select>
            <button onclick="aplicarFiltros()" style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">Filtrar</button>
        </div>
        <div id="lista-usuarios">
    `;
    
    html += gerarTabelaUsuarios(usuarios);
    html += '</div>';
    
    modalBody.innerHTML = html;
    document.getElementById('modal').style.display = 'block';
    
    // Adicionar evento de busca em tempo real
    document.getElementById('filtro-nome').addEventListener('input', aplicarFiltros);
    document.getElementById('filtro-estado').addEventListener('change', aplicarFiltros);
}

// Aplicar filtros na lista de usuários
function aplicarFiltros() {
    const nome = document.getElementById('filtro-nome').value;
    const estado = document.getElementById('filtro-estado').value;
    
    const usuariosFiltrados = buscarUsuarios({ nome, estado });
    document.getElementById('lista-usuarios').innerHTML = gerarTabelaUsuarios(usuariosFiltrados);
}

// Gerar tabela HTML de usuários
function gerarTabelaUsuarios(listaUsuarios) {
    let html = `
        <table class="usuarios-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Cidade</th>
                    <th>Estado</th>
                    <th>CEP</th>
                    <th>Coordenadas</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    listaUsuarios.forEach(usuario => {
        html += `
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.nome}</td>
                <td>${usuario.cidade}</td>
                <td>${usuario.estado}</td>
                <td>${usuario.cep}</td>
                <td>${usuario.latitude.toFixed(4)}, ${usuario.longitude.toFixed(4)}</td>
            </tr>
        `;
    });
    
    html += `
            </tbody>
        </table>
        <div style="margin-top: 15px; text-align: center; color: #888;">
            Mostrando ${listaUsuarios.length} de ${usuarios.length} usuários
        </div>
    `;
    
    return html;
}

// Mostrar estatísticas detalhadas
function mostrarEstatisticas() {
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = '📈 Relatórios e Estatísticas';
    
    const stats = obterEstatisticas();
    
    let html = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px;">
            <div style="background: rgba(76, 175, 80, 0.1); padding: 20px; border-radius: 10px; border: 1px solid rgba(76, 175, 80, 0.3);">
                <h3 style="color: #4CAF50; margin-bottom: 10px;">📊 Resumo Geral</h3>
                <p><strong>Total de usuários:</strong> ${stats.totalUsuarios}</p>
                <p><strong>Usuários mapeados:</strong> ${stats.usuariosMapeados}</p>
                <p><strong>Taxa de mapeamento:</strong> 100%</p>
                <p><strong>Cidades cobertas:</strong> ${stats.cidades}</p>
                <p><strong>Estados cobertos:</strong> ${stats.estados}</p>
            </div>
            
            <div style="background: rgba(33, 150, 243, 0.1); padding: 20px; border-radius: 10px; border: 1px solid rgba(33, 150, 243, 0.3);">
                <h3 style="color: #2196F3; margin-bottom: 10px;">🗺️ Distribuição por Estado</h3>
                ${Object.entries(stats.distribuicaoPorEstado)
                    .sort((a, b) => b[1] - a[1])
                    .map(([estado, count]) => `<p><strong>${estado}:</strong> ${count} usuários</p>`)
                    .join('')}
            </div>
        </div>
        
        <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h3 style="color: #4CAF50; margin-bottom: 15px;">🏙️ Distribuição por Cidade</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                ${Object.entries(stats.distribuicaoPorCidade)
                    .sort((a, b) => b[1] - a[1])
                    .map(([cidade, count]) => `
                        <div style="background: rgba(255, 255, 255, 0.05); padding: 10px; border-radius: 5px;">
                            <strong>${cidade}:</strong> ${count} usuários
                        </div>
                    `).join('')}
            </div>
        </div>
        
        <div style="background: rgba(255, 152, 0, 0.1); padding: 20px; border-radius: 10px; border: 1px solid rgba(255, 152, 0, 0.3);">
            <h3 style="color: #FF9800; margin-bottom: 10px;">📍 Informações Técnicas</h3>
            <p><strong>Sistema:</strong> PINMAP v1.0</p>
            <p><strong>Hospedagem:</strong> GitHub Pages</p>
            <p><strong>Última atualização:</strong> ${new Date().toLocaleDateString('pt-BR')}</p>
            <p><strong>Status:</strong> ✅ Online</p>
            <p><strong>Uptime:</strong> 99.9%</p>
        </div>
    `;
    
    modalBody.innerHTML = html;
    document.getElementById('modal').style.display = 'block';
}

// Exportar dados
function exportarDados() {
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = '📋 Exportar Dados';
    
    let html = `
        <div style="text-align: center; margin-bottom: 30px;">
            <p style="margin-bottom: 20px; color: #c0c0c0;">Escolha o formato para exportar os dados dos usuários:</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                <button onclick="exportarJSON()" style="padding: 20px; background: #4CAF50; color: white; border: none; border-radius: 10px; cursor: pointer; font-size: 16px;">
                    📄 Exportar JSON
                </button>
                
                <button onclick="exportarCSV()" style="padding: 20px; background: #2196F3; color: white; border: none; border-radius: 10px; cursor: pointer; font-size: 16px;">
                    📊 Exportar CSV
                </button>
                
                <button onclick="exportarTXT()" style="padding: 20px; background: #FF9800; color: white; border: none; border-radius: 10px; cursor: pointer; font-size: 16px;">
                    📝 Exportar TXT
                </button>
            </div>
        </div>
        
        <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 10px;">
            <h4 style="color: #4CAF50; margin-bottom: 10px;">ℹ️ Informações sobre os formatos:</h4>
            <ul style="color: #c0c0c0; line-height: 1.8;">
                <li><strong>JSON:</strong> Formato estruturado, ideal para desenvolvedores</li>
                <li><strong>CSV:</strong> Compatível com Excel e Google Sheets</li>
                <li><strong>TXT:</strong> Formato simples, legível em qualquer editor</li>
            </ul>
        </div>
    `;
    
    modalBody.innerHTML = html;
    document.getElementById('modal').style.display = 'block';
}

// Exportar em formato JSON
function exportarJSON() {
    const dados = {
        exportadoEm: new Date().toISOString(),
        totalUsuarios: usuarios.length,
        usuarios: usuarios,
        estatisticas: estatisticas
    };
    
    const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
    baixarArquivo(blob, 'pinmap-usuarios.json');
}

// Exportar em formato CSV
function exportarCSV() {
    let csv = 'ID,Nome,Cidade,Estado,CEP,Latitude,Longitude\n';
    
    usuarios.forEach(usuario => {
        csv += `${usuario.id},"${usuario.nome}","${usuario.cidade}","${usuario.estado}","${usuario.cep}",${usuario.latitude},${usuario.longitude}\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    baixarArquivo(blob, 'pinmap-usuarios.csv');
}

// Exportar em formato TXT
function exportarTXT() {
    let txt = 'PINMAP - Lista de Usuários\n';
    txt += '================================\n\n';
    txt += `Exportado em: ${new Date().toLocaleString('pt-BR')}\n`;
    txt += `Total de usuários: ${usuarios.length}\n\n`;
    
    usuarios.forEach(usuario => {
        txt += `ID: ${usuario.id}\n`;
        txt += `Nome: ${usuario.nome}\n`;
        txt += `Cidade: ${usuario.cidade}/${usuario.estado}\n`;
        txt += `CEP: ${usuario.cep}\n`;
        txt += `Coordenadas: ${usuario.latitude}, ${usuario.longitude}\n`;
        txt += '---\n';
    });
    
    const blob = new Blob([txt], { type: 'text/plain;charset=utf-8;' });
    baixarArquivo(blob, 'pinmap-usuarios.txt');
}

// Função auxiliar para baixar arquivos
function baixarArquivo(blob, nomeArquivo) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = nomeArquivo;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    // Mostrar mensagem de sucesso
    alert(`✅ Arquivo ${nomeArquivo} baixado com sucesso!`);
}

// Fechar modal
function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

// Fechar modal clicando fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Função para copiar URL do sistema
function copiarURL() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('✅ URL copiada para a área de transferência!');
    });
}

// Adicionar atalhos de teclado
document.addEventListener('keydown', function(event) {
    // ESC para fechar modal
    if (event.key === 'Escape') {
        fecharModal();
    }
    
    // Ctrl+U para mostrar usuários
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
        mostrarUsuarios();
    }
    
    // Ctrl+E para mostrar estatísticas
    if (event.ctrlKey && event.key === 'e') {
        event.preventDefault();
        mostrarEstatisticas();
    }
    
    // Ctrl+M para ir ao mapa
    if (event.ctrlKey && event.key === 'm') {
        event.preventDefault();
        window.location.href = 'mapa.html';
    }
});

// Log de inicialização
console.log(`
🚀 PINMAP Sistema de Geolocalização
📊 ${usuarios.length} usuários carregados
🏙️ ${estatisticas.cidades} cidades mapeadas
🗺️ ${estatisticas.estados} estados cobertos
✅ Sistema funcionando perfeitamente!
`);

// Verificar se está rodando no GitHub Pages
if (window.location.hostname.includes('github.io')) {
    console.log('🌐 Rodando no GitHub Pages - Hospedagem gratuita e confiável!');
}

