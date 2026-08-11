console.log("Conexión centralizada con JS...");

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


function toggleViewMode() {
    const isPC = document.body.classList.toggle('view-pc');
    const btn = document.getElementById('view-toggle');
    
    if (btn) {
        btn.innerHTML = isPC ? 'Vista Móvil' : 'Vista PC';
    }
    
    localStorage.setItem('userViewMode', isPC ? 'pc' : 'mobile');
}

document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('userViewMode');
    const btn = document.getElementById('view-toggle');

    if (savedMode === 'pc') {
        document.body.classList.add('view-pc');
        if (btn) btn.innerHTML = 'Vista Móvil';
    } else {
        document.body.classList.remove('view-pc');
        if (btn) btn.innerHTML = 'Vista PC';
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

  
    if (togglePasswordBtn && passwordInput) {
        togglePasswordBtn.addEventListener('click', () => {
            const isPassword = passwordInput.getAttribute('type') === 'password';
            passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
            togglePasswordBtn.textContent = isPassword ? '🙈' : '👁️';
        });
    }

    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (errorMessage) {
                errorMessage.style.display = 'none';
            }

            
            window.location.href = 'usuario.html';
        });
    }
});



// Base de datos de contenido para cada categoría
const contenidosCategorias = {
  casa: {
    titulo: "🏠 Recursos para En Casa",
    descripcion: "Estrategias y herramientas para crear un entorno seguro, estructurado y comprensivo dentro del hogar."
  },
  escuela: {
    titulo: "🏫 Apoyo e Inclusión Escolar",
    descripcion: "Adaptaciones curriculares, guías para docentes y estrategias para facilitar el aprendizaje y la socialización en el colegio."
  },
  terapia: {
    titulo: "🧠 Acompañamiento Terapéutico",
    descripcion: "Ejercicios y herramientas orientadas a Terapia Ocupacional, Fonoaudiología y integración sensorial."
  },
  autocuidado: {
    titulo: "🧘 Auto-cuidado y Bienestar",
    descripcion: "Técnicas de regulación emocional, descanso sensorial y rutinas de bienestar personal tanto para el usuario como para sus cuidadores."
  }
};

const botonesCategoria = document.querySelectorAll('.category-item');
const tituloInfo = document.getElementById('info-titulo');
const descripcionInfo = document.getElementById('info-descripcion');


botonesCategoria.forEach(boton => {
  boton.addEventListener('click', () => {
    
    boton.classList.add('active');

    const categoria = boton.getAttribute('data-category');
    const data = contenidosCategorias[categoria];

    if (data) {
      tituloInfo.textContent = data.titulo;
      descripcionInfo.textContent = data.descripcion;
    }
  });
});

const contenidos = {
  casa: {
    titulo: "🏠 Recursos para En Casa",
    descripcion: "Estrategias y herramientas para crear un entorno seguro, estructurado y comprensivo dentro del hogar."
  },
  escuela: {
    titulo: "🏫 Apoyo e Inclusión Escolar",
    descripcion: "Adaptaciones curriculares, guías para docentes y estrategias para facilitar el aprendizaje y la socialización en el colegio."
  },
  terapia: {
    titulo: "🧠 Acompañamiento Terapéutico",
    descripcion: "Ejercicios y herramientas orientadas a Terapia Ocupacional, Fonoaudiología e Integración Sensorial."
  },
  autocuidado: {
    titulo: "🧘 Auto-cuidado y Bienestar",
    descripcion: "Técnicas de regulación emocional, descanso sensorial y rutinas de bienestar para usuarios y cuidadores."
  }
};

const botones = document.querySelectorAll('.category-item');
const titulo = document.getElementById('info-titulo');
const descripcion = document.getElementById('info-descripcion');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    botones.forEach(b => b.classList.remove('active'));
    boton.classList.add('active');

    const categoria = boton.getAttribute('data-category');
    if (contenidos[categoria]) {
      titulo.textContent = contenidos[categoria].titulo;
      descripcion.textContent = contenidos[categoria].descripcion;
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const btnCopiloto = document.getElementById('btn-copiloto');
    const chatModal = document.getElementById('chat-ia-modal');
    const btnCerrar = document.getElementById('cerrar-chat');
    const btnEnviar = document.getElementById('enviar-msg');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    btnCopiloto.addEventListener('click', () => chatModal.classList.remove('hidden'));
    btnCerrar.addEventListener('click', () => chatModal.classList.add('hidden'));

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
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const dataSecciones = {
        inicio: {
            titulo: "⭐ Vista General",
            descripcion: "Explora las herramientas disponibles de NeuroMundo para apoyo visual, regulación y rutinas de acompañamiento."
        },
        pictogramas: {
            titulo: "🎨 Biblioteca de Pictogramas y Tablero AAC",
            descripcion: "Accede al catálogo de apoyos visuales y genera secuencias de comunicación para expresar necesidades y emociones."
        },
        regulacion: {
            titulo: "🌱 Espacio de Regulación y Calma",
            descripcion: "Herramientas de autorregulación emocional, semáforo de estrés, ejercicios de respiración y sonidos calmantes."
        },
        rutinas: {
            titulo: "📅 Rutinas y Agendas Visuales",
            descripcion: "Estructura las actividades cotidianas paso a paso mediante guías visuales e historias sociales ilustradas."
        },
        copiloto: {
            titulo: "🤖 Copiloto de Apoyo Adaptativo IA",
            descripcion: "Asistente inteligente para traducción directa a pictogramas y sugerencias personalizadas de regulación."
        },
        comunidad: {
            titulo: "💬 Comunidad y Red de Familias",
            descripcion: "Espacio de intercambio para familias y profesionales. Comparte tableros personalizados, secuencias y experiencias."
        }
    };

    const botones = document.querySelectorAll('.category-item');
    const titulo = document.getElementById('seccion-titulo');
    const descripcion = document.getElementById('seccion-descripcion');
    const chatModal = document.getElementById('chat-ia-modal');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            botones.forEach(b => b.classList.remove('active'));
            boton.classList.add('active');

            const categoria = boton.getAttribute('data-category');
            if (dataSecciones[categoria]) {
                titulo.textContent = dataSecciones[categoria].titulo;
                descripcion.textContent = dataSecciones[categoria].descripcion;
            }

            if (categoria === 'copiloto' && chatModal) {
                chatModal.classList.remove('hidden');
            }
        });
    });
});