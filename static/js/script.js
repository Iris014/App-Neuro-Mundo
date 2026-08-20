/* ==========================================================================
   NEUROMUNDO - SISTEMA CENTRALIZADO & MOTOR DE IA ADAPTATIVA (COPILOT IA)
   Arquitectura: Grado Clínico, Soporte Sensorial & InterACTION Neuroinclusiva
   ========================================================================== */

// --------------------------------------------------------------------------
// 2. INTERFAZ Y CONTROLADOR DEL COPILOT IA (CHAT UI)
// --------------------------------------------------------------------------
function abrirChatBot() {
    const modal = document.getElementById('chatModal') || document.getElementById('chat-ia-modal');
    if (modal) {
        modal.classList.remove('hidden');
        const input = document.getElementById('chatInput') || document.getElementById('chat-input');
        if (input) input.focus();
    }
}

// Cierra la interfaz visual del modal de chat
function cerrarChatBot() {
    const modal = document.getElementById('chatModal') || document.getElementById('chat-ia-modal');
    if (modal) modal.classList.add('hidden');
}

// Extrae el texto, genera respuestas del motor e incluye efectos de carga
function enviarMensajeChat() {
    const input = document.getElementById('chatInput') || document.getElementById('chat-input');
    const container = document.getElementById('chatMessages') || document.getElementById('chat-messages');

    if (!input || !container) return;
    const texto = input.value.trim();
    if (!texto) return;

    agregarBurbujaMensaje(texto, 'user', container);
    input.value = '';

    const typingId = 'typing-' + Date.now();
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message ia typing-indicator';
    typingDiv.id = typingId;
    typingDiv.innerHTML = `<span>NeuroMundo está procesando</span> <span class="dots">...</span>`;
    container.appendChild(typingDiv);
    container.scrollTop = container.scrollHeight;

    setTimeout(() => {
        const elementoTyping = document.getElementById(typingId);
        if (elementoTyping) elementoTyping.remove();

        const respuestaIA = NeuroCopilotEngine.procesar(texto);
        agregarBurbujaMensaje(respuestaIA.texto, 'ia', container, respuestaIA.chips);
    }, 650);
}

// Inserta elementos en el DOM y mapea los botones interactivos finales
function agregarBurbujaMensaje(contenidoMarkdown, tipo, contenedor, chips = []) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${tipo}`;
    
    let html = contenidoMarkdown
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n/g, '<br>');

    msgDiv.innerHTML = html;
    contenedor.appendChild(msgDiv);

    if (chips && chips.length > 0) {
        const chipContainer = document.createElement('div');
        chipContainer.className = 'ia-chips-container';
        
        chips.forEach(chipText => {
            const botonChip = document.createElement('button');
            botonChip.className = 'chip-action-btn';
            botonChip.innerText = chipText;
            botonChip.onclick = () => {
                const input = document.getElementById('chatInput') || document.getElementById('chat-input');
                if (input) {
                    input.value = chipText;
                    enviarMensajeChat();
                }
            };
            chipContainer.appendChild(botonChip);
        });
        contenedor.appendChild(chipContainer);
    }
    
    contenedor.scrollTop = container.scrollHeight;
}

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".reddit-search-input");

    if (searchInput) {
        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                const query = searchInput.value.trim();
                if (query !== "") {
                    alert("Buscando: " + query);
                }
            }
        });
    }
});

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

        
    function enviarMensaje() {
        const texto = chatInput.value.trim();
        if (!texto) return;

        agregarMensaje(texto, 'user');
        chatInput.value = '';

        setTimeout(() => {
            const respuesta = generarRespuestaIA(texto);
            agregarMensaje(respuesta, 'ia');
        }, 800);
    }

    btnEnviar.addEventListener('click', enviarMensaje);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') enviarMensaje();
    });

    function agregarMensaje(texto, tipo) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', tipo);
        msgDiv.textContent = texto;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function generarRespuestaIA(prompt) {
        const p = prompt.toLowerCase();
        if (p.includes('pictograma') || p.includes('imagen')) {
            return "🎨 He generado la secuencia de pictogramas para tu consulta. Puedes verla en el panel de pictogramas.";
        } else if (p.includes('calma') || p.includes('crisis') || p.includes('estres')) {
            return "🧘 Te recomiendo activar el 'Espacio de Calma y Descompresión' con ejercicios de respiración de 4 tiempos.";
        } else if (p.includes('rutina') || p.includes('agenda')) {
            return "📅 Puedes estructurar esta actividad en la 'Agenda Visual Diaria' para reducir la ansiedad.";
        } else {
            return "🤖 Entendido. Como asistente de NeuroMundo, sugiero revisar las herramientas de apoyo o adaptar la actividad con apoyos visuales.";
        }
    };

    /* ==========================================================================
   SISTEMA DE MODO PC / ESCRITORIO FORZADO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Cargar estado del modo PC desde localStorage
    const savedViewMode = localStorage.getItem('neuromundo-view-mode');
    if (savedViewMode === 'pc') {
        document.body.classList.add('pc-mode');
        actualizarBotonVistaPC(true);
    } else {
        actualizarBotonVistaPC(false);
    }
});

function toggleViewMode() {
    const isPCMode = document.body.classList.toggle('pc-mode');
    
    // Guardar preferencia en localStorage
    localStorage.setItem('neuromundo-view-mode', isPCMode ? 'pc' : 'mobile');
    
    // Actualizar estado visual del botón
    actualizarBotonVistaPC(isPCMode);
    
    // Scroll al inicio para mejor experiencia visual
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function actualizarBotonVistaPC(isPCMode) {
    const viewToggle = document.getElementById('view-toggle');
    if (!viewToggle) return;
    
    if (isPCMode) {
        viewToggle.classList.add('active');
        viewToggle.setAttribute('aria-pressed', 'true');
        viewToggle.setAttribute('aria-label', 'Cambiar a vista móvil');
    } else {
        viewToggle.classList.remove('active');
        viewToggle.setAttribute('aria-pressed', 'false');
        viewToggle.setAttribute('aria-label', 'Cambiar a vista de escritorio');
    }
}