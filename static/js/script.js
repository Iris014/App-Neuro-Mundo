console.log("Conexión centralizada con JS...");

function toggleAcc(btn) {
            const card = btn.parentElement;
            card.classList.toggle('abierto');
        }

        function cambiarTab(id, el) {
            // Ocultar todas las secciones
            document.querySelectorAll('.seccion-app').forEach(s => s.classList.remove('activa'));
            // Mostrar la sección seleccionada
            document.getElementById(id).classList.add('activa');

            // Actualizar estado de las pestañas superiores
            const pestanas = document.querySelectorAll('.boton-pestana');
            pestanas.forEach(p => p.classList.remove('activa'));
            
            // Actualizar estado del menú inferior
            const navs = document.querySelectorAll('.nav-item');
            navs.forEach(n => n.classList.remove('activo'));

            // Marcar elemento activo según dónde hizo clic
            if (el.classList.contains('boton-pestana')) {
                el.classList.add('activa');
            }
        }


        // <!-- LOGICA JAVASCRIPT INTERACTIVA ESTILO REDDIT -->
        // Sistema de Votación UPVOTE / DOWNVOTE
        function votar(btn, delta) {
            const sidebar = btn.parentElement;
            const countElem = sidebar.querySelector('.vote-count');
            let count = parseInt(countElem.innerText);

            if (btn.classList.contains('active')) {
                btn.classList.remove('active');
                count -= delta;
            } else {
                sidebar.querySelectorAll('.vote-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                count += delta;
            }
            countElem.innerText = count;
        }

        // Mostrar / Ocultar Hilo de Comentarios
        function toggleComments(threadId) {
            const thread = document.getElementById(threadId);
            thread.style.display = thread.style.display === 'none' ? 'block' : 'none';
        }

        // Agregar comentario interactivo con ENTER
        function agregarComentario(e, inputElem, threadId) {
            if (e.key === 'Enter' && inputElem.value.trim() !== '') {
                const thread = document.getElementById(threadId);
                const nuevoComentario = document.createElement('div');
                nuevoComentario.className = 'comment-item';
                nuevoComentario.innerHTML = `<strong>u/Tú:</strong> ${inputElem.value.trim()}`;
                
                thread.insertBefore(nuevoComentario, inputElem.parentElement);
                
                // Actualizar contador
                const card = thread.closest('.reddit-post-card');
                const commentCount = card.querySelector('.comment-count');
                commentCount.innerText = parseInt(commentCount.innerText) + 1;

                inputElem.value = '';
            }
        }

        // Crear una nueva publicación dinámicamente
        function crearPublicacionReddit() {
            const input = document.getElementById('reddit-post-input');
            const texto = input.value.trim();

            if (!texto) return;

            const feed = document.getElementById('posts-feed');
            const newId = 'comments-' + Date.now();

            const postHTML = `
                <article class="reddit-post-card">
                    <div class="vote-sidebar">
                        <button class="vote-btn upvote" onclick="votar(this, 1)">▲</button>
                        <span class="vote-count">1</span>
                        <button class="vote-btn downvote" onclick="votar(this, -1)">▼</button>
                    </div>
                    <div class="post-main-content">
                        <div class="post-header-meta">
                            <span class="community-tag">r/Comunidad</span>
                            <span class="meta-dot">•</span>
                            <span class="post-author">u/Tú</span>
                            <span class="post-time">Ahora mismo</span>
                        </div>
                        <p class="reddit-post-body">${texto}</p>
                        <div class="reddit-post-actions">
                            <button class="reddit-action-btn" onclick="toggleComments('${newId}')">
                                💬 <span class="comment-count">0</span> Comentarios
                            </button>
                            <button class="reddit-action-btn" onclick="compartirPost()">🔗 Compartir</button>
                        </div>
                        <div id="${newId}" class="reddit-comments-thread" style="display: none;">
                            <div class="comment-input-box">
                                <input type="text" placeholder="Escribe un comentario..." onkeypress="agregarComentario(event, this, '${newId}')">
                            </div>
                        </div>
                    </div>
                </article>
            `;

            feed.insertAdjacentHTML('afterbegin', postHTML);
            input.value = '';
        }

        function compartirPost() {
            alert("¡Enlace copiado al portapapeles!");
        }


function toggleViewMode() {
    const isPC = document.body.classList.toggle('view-pc');
    const btn = document.getElementById('view-toggle');
    
    if (btn) {
        btn.innerHTML = isPC ? '📱 Vista Móvil' : '🖥️ Vista PC';
    }
    
    localStorage.setItem('userViewMode', isPC ? 'pc' : 'mobile');
}

document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('userViewMode');
    const btn = document.getElementById('view-toggle');

    if (savedMode === 'pc') {
        document.body.classList.add('view-pc');
        if (btn) btn.innerHTML = '📱 Vista Móvil';
    } else {
        document.body.classList.remove('view-pc');
        if (btn) btn.innerHTML = '🖥️ Vista PC';
    }
});