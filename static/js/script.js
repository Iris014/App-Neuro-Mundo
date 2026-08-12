// /* ==========================================================================
//    NEUROMUNDO - SISTEMA CENTRALIZADO & MOTOR DE IA ADAPTATIVA (COPILOT IA)
//    Arquitectura: Grado Clínico, Soporte Sensorial & Interacción Neuroinclusiva
//    ========================================================================== */

// // --------------------------------------------------------------------------
// // 1. MOTOR DE IA ADAPTATIVA (NEUROMUNDO COPILOT CLINICAL ENGINE)
// // --------------------------------------------------------------------------
// const NeuroCopilotEngine = {
//     // Memoria conversacional y contexto del usuario
//     contexto: {
//         nivelEstres: 'normal',
//         ultimaCategoria: 'general',
//         historialMensajes: []
//     },

//     // Base de conocimiento clínico y reglas de desescalada sensorial
//     baseConocimiento: {
//         crisis: {
//             keywords: ['crisis', 'meltdown', 'desborde', 'bloqueo', 'rabia', 'llanto', 'colapso', 'sobrecarga', 'panico'],
//             respuesta: "🚨 **Protocolo de Regulación y Desescalada Rápida**\n\n1. **Reduce estímulos**: Apaga luces brillantes y disminuye ruidos de inmediato.\n2. **Espacio Seguro**: Ofrece un rincón de calma sin forzar el contacto físico.\n3. **Lenguaje Mínimo**: Habla con frases de 2 o 3 palabras en tono neutro y predecible.\n4. **Presión Profunda**: Facilita mantas pesadas o compresión propioceptiva si el usuario lo tolera.",
//             chips: ["🧘 Iniciar Respiración 4x4", "🚦 Ir al Semáforo", "🔇 Modo Sin Ruido"]
//         },
//         respiracion: {
//             keywords: ['respirar', 'respiracion', 'calma', 'calmar', 'relajar', 'ansiedad', 'nervioso'],
//             respuesta: "🌱 **Técnica 4x4 (Respiración de Caja)**\n\n• Inhala en **4 segundos** 🌬️\n• Sostén el aire en **4 segundos** ⏸️\n• Exhala suavemente en **4 segundos** 💨\n• Espera en vacío durante **4 segundos** ⚓\n\n*Repite este ciclo 3 veces para estabilizar la frecuencia cardíaca.*",
//             chips: ["⏱️ Temporizador 1 Min", "🎵 Sonido Blanco"]
//         },
//         pictogramas: {
//             keywords: ['pictograma', 'imagen', 'pictogramas', 'tablero', 'aac', 'comunicar', 'hablar', 'secuencia', 'tarjetas'],
//             respuesta: "🎨 **Secuencia Visual Generada (Comunicación Aumentativa AAC):**\n\n[ 🚿 1. Baño ] ➔ [ 👕 2. Vestirse ] ➔ [ 🍳 3. Desayunar ] ➔ [ 🎒 4. Mochila ]\n\n*Las tarjetas visuales reducen la carga cognitiva y anticipan la estructura del día.*",
//             chips: ["➕ Nueva Secuencia", "📥 Guardar en Agenda", "🖨️ Exportar"]
//         },
//         rutinas: {
//             keywords: ['rutina', 'agenda', 'transicion', 'cambio', 'tiempo', 'horario', 'orden'],
//             respuesta: "📅 **Estructuración de Transiciones Seguras**\n\n• **Aviso previo de 5 minutos**: 'En 5 minutos terminamos el juego'.\n• **Temporizador visual**: Utiliza cuenta regresiva por colores para tangibilizar el tiempo.\n• **Cierre de actividad**: Permite guardar los objetos para marcar físicamente el final de la tarea.",
//             chips: ["⏳ Iniciar Temporizador", "📋 Ver Agenda del Día"]
//         },
//         escuela: {
//             keywords: ['escuela', 'colegio', 'aula', 'profesor', 'tarea', 'examen', 'clase', 'inclusión'],
//             respuesta: "🏫 **Adaptaciones para Entornos Escolares**\n\n• **Pausas activas sensoriales**: 2 minutos de estiramiento propioceptivo cada 45 minutos.\n• **Instrucciones segmentadas**: Divide las tareas en pasos visuales únicos.\n• **Ubicación estratégica**: Asiento lejos de pasillos transitados o fuentes de luz parpadeante.",
//             chips: ["📝 Pauta para Docentes", "🎒 Checklist Escolar"]
//         },
//         propiocepcion: {
//             keywords: ['cuerpo', 'movimiento', 'motor', 'fuerza', 'propiocepcion', 'saltar', 'morder', 'peso'],
//             respuesta: "🧠 **Estrategias Propioceptivas (Trabajo Pesado)**\n\n• Empujar una pared con ambas manos durante 10 segundos.\n• Marchar imitando pasos de animales pesados (oso/elefante).\n• Uso de chalecos o almohadillas de peso en el regazo durante actividades de mesa.",
//             chips: ["🎲 Juegos de Movimiento", "🧸 Herramientas Táctiles"]
//         }
//     },

//     // Clasificador de intenciones mediante procesamiento de texto
//     procesar(prompt) {
//         const textoLimpio = prompt.toLowerCase().trim();
//         this.contexto.historialMensajes.push({ emisor: 'user', texto: prompt });

//         for (const [clave, modulo] of Object.entries(this.baseConocimiento)) {
//             const coincide = modulo.keywords.some(k => textoLimpio.includes(k));
//             if (coincide) {
//                 this.contexto.ultimaCategoria = clave;
//                 return {
//                     texto: modulo.respuesta,
//                     chips: modulo.chips
//                 };
//             }
//         }

//         // Respuesta adaptativa contextual general
//         return {
//             texto: `🤖 He analizado tu consulta sobre **"${prompt}"**.\n\nComo asistente adaptativo de **NeuroMundo**, te sugiero estructurar este proceso mediante apoyos visuales, calibrar descansos sensoriales o seleccionar una de nuestras herramientas rápidas:`,
//             chips: ["🎨 Crear Pictograma", "🧘 Ejercicio de Calma", "📅 Organizar Rutina", "🚦 Semáforo Sensorial"]
//         };
//     }
// };

// // --------------------------------------------------------------------------
// // 2. INTERFAZ Y CONTROLADOR DEL COPILOT IA (CHAT UI)
// // --------------------------------------------------------------------------
// function abrirChatBot() {
//     const modal = document.getElementById('chatModal') || document.getElementById('chat-ia-modal');
//     if (modal) {
//         modal.classList.remove('hidden');
//         const input = document.getElementById('chatInput') || document.getElementById('chat-input');
//         if (input) input.focus();
//     }
// }

// function cerrarChatBot() {
//     const modal = document.getElementById('chatModal') || document.getElementById('chat-ia-modal');
//     if (modal) modal.classList.add('hidden');
// }

// function enviarMensajeChat() {
//     const input = document.getElementById('chatInput') || document.getElementById('chat-input');
//     const container = document.getElementById('chatMessages') || document.getElementById('chat-messages');

//     if (!input || !container) return;
//     const texto = input.value.trim();
//     if (!texto) return;

//     // 1. Renderizar mensaje del usuario
//     agregarBurbujaMensaje(texto, 'user', container);
//     input.value = '';

//     // 2. Mostrar indicador de escritura (Typing feedback)
//     const typingId = 'typing-' + Date.now();
//     const typingDiv = document.createElement('div');
//     typingDiv.className = 'message ia typing-indicator';
//     typingDiv.id = typingId;
//     typingDiv.innerHTML = `<span>NeuroMundo está procesando</span> <span class="dots">...</span>`;
//     container.appendChild(typingDiv);
//     container.scrollTop = container.scrollHeight;

//     // 3. Procesar y responder
//     setTimeout(() => {
//         const elementoTyping = document.getElementById(typingId);
//         if (elementoTyping) elementoTyping.remove();

//         const respuestaIA = NeuroCopilotEngine.procesar(texto);
//         agregarBurbujaMensaje(respuestaIA.texto, 'ia', container, respuestaIA.chips);
//     }, 650);
// }

// function agregarBurbujaMensaje(contenidoMarkdown, tipo, contenedor, chips = []) {
//     const msgDiv = document.createElement('div');
//     msgDiv.className = `message ${tipo}`;
    
//     // Formateo ligero de Markdown a HTML
//     let html = contenidoMarkdown
//         .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
//         .replace(/\*(.*?)\*/g, '<em>$1</em>')
//         .replace(/\n/g, '<br>');

//     msgDiv.innerHTML = html;

//     // Inserción de Action Chips interactivos
//     if (chips && chips.length > 0) {
//         const chipContainer = document.createElement('div');
//         chipContainer.className = 'ia-chips-container';
//         chipContainer.style.marginTop = '8px';
//         chipContainer.style.display = 'flex';
//         chipContainer.style.flexWrap = 'wrap';
//         chipContainer.style.gap = '5px';

//         chips.forEach(chipText => {
//             const btnChip = document.createElement('button');
//             btnChip.className = 'ia-chip-btn';
//             btnChip.type = 'button';
//             btnChip.textContent = chipText;
//             btnChip.style.fontSize = '0.72rem';
//             btnChip.style.padding = '4px 8px';
//             btnChip.style.borderRadius = '999px';
//             btnChip.style.border = '1px solid var(--border-strong, #cbd5e1)';
//             btnChip.style.backgroundColor = 'var(--card-bg, #ffffff)';
//             btnChip.style.color = 'var(--text-heading, #0f172a)';
//             btnChip.style.cursor = 'pointer';
//             btnChip.style.fontWeight = '600';

//             btnChip.onclick = () => {
//                 const input = document.getElementById('chatInput') || document.getElementById('chat-input');
//                 if (input) {
//                     input.value = chipText.replace(/^[^\w]+/, '').trim();
//                     enviarMensajeChat();
//                 }
//             };
//             chipContainer.appendChild(btnChip);
//         });

//         msgDiv.appendChild(chipContainer);
//     }

//     contenedor.appendChild(msgDiv);
//     contenedor.scrollTop = contenedor.scrollHeight;
// }

// // --------------------------------------------------------------------------
// // 3. CATEGORÍAS REACTIVAS & CONTENIDO DINÁMICO
// // --------------------------------------------------------------------------
// const catalogoCategorias = {
//     casa: {
//         titulo: "🏠 Recursos para En Casa",
//         descripcion: "Estrategias y herramientas para crear un entorno seguro, estructurado y comprensivo dentro del hogar."
//     },
//     escuela: {
//         titulo: "🏫 Apoyo e Inclusión Escolar",
//         descripcion: "Adaptaciones curriculares, guías docentes y pausas sensoriales para facilitar el aprendizaje y la socialización."
//     },
//     terapia: {
//         titulo: "🧠 Acompañamiento Terapéutico",
//         descripcion: "Actividades de Terapia Ocupacional, Integración Sensorial y Fonoaudiología para el desarrollo integral."
//     },
//     autocuidado: {
//         titulo: "🧘 Auto-cuidado y Bienestar",
//         descripcion: "Técnicas de regulación emocional, disminución de fatiga cognitiva y rutinas de descanso para usuarios y cuidadores."
//     }
// };

// function inicializarCategorias() {
//     const botones = document.querySelectorAll('.category-item');
//     const titulo = document.getElementById('info-titulo') || document.getElementById('seccion-titulo');
//     const descripcion = document.getElementById('info-descripcion') || document.getElementById('seccion-descripcion');

//     botones.forEach(boton => {
//         boton.addEventListener('click', () => {
//             botones.forEach(b => {
//                 b.classList.remove('active');
//                 b.setAttribute('aria-selected', 'false');
//             });

//             boton.classList.add('active');
//             boton.setAttribute('aria-selected', 'true');

//             const catKey = boton.getAttribute('data-category');
//             if (catalogoCategorias[catKey] && titulo && descripcion) {
//                 titulo.textContent = catalogoCategorias[catKey].titulo;
//                 descripcion.textContent = catalogoCategorias[catKey].descripcion;
//             }

//             if (catKey === 'copiloto') {
//                 abrirChatBot();
//             }
//         });
//     });
// }

// // Inicializar preferencia de vista al cargar la página
// document.addEventListener('DOMContentLoaded', () => {
//     const savedMode = localStorage.getItem('viewMode');
//     if (savedMode === 'pc') {
//         document.body.classList.add('pc-mode-active');
//         updateToggleButton(true);
//     }
// });

// // Función para alternar entre Vista Móvil y Vista PC Completa
// function toggleViewMode() {
//     const isPc = document.body.classList.toggle('pc-mode-active');
    
//     // Guardar preferencia del usuario
//     localStorage.setItem('viewMode', isPc ? 'pc' : 'mobile');
    
//     // Actualizar estado del botón
//     updateToggleButton(isPc);
// }

// // Actualizar texto y atributos del botón en la UI
// function updateToggleButton(isPc) {
//     const btn = document.getElementById('view-toggle');
//     if (btn) {
//         btn.textContent = isPc ? 'Vista Móvil' : 'Vista PC';
//         btn.setAttribute('aria-pressed', isPc ? 'true' : 'false');
//     }
// }

// // --------------------------------------------------------------------------
// // 5. MODO OSCURO / CLARO (SENSORY-FRIENDLY THEME)
// // --------------------------------------------------------------------------
// function toggleTheme() {
//     const isDark = document.body.classList.toggle('dark-theme');
//     localStorage.setItem('neuro_theme_pref', isDark ? 'dark' : 'light');
//     actualizarTextoTema(isDark);
// }

// function actualizarTextoTema(isDark) {
//     const themeText = document.getElementById('theme-text');
//     if (themeText) {
//         themeText.textContent = isDark ? 'Claro' : 'Oscuro';
//     }
// }

// // --------------------------------------------------------------------------
// // 6. COMUNIDAD INTERACTIVA (ESTILO FEED SOCIAL ACCESIBLE)
// // --------------------------------------------------------------------------
// function votar(btn, delta) {
//     const sidebar = btn.parentElement;
//     const countElem = sidebar.querySelector('.vote-count');
//     let count = parseInt(countElem.innerText, 10) || 0;

//     if (btn.classList.contains('active')) {
//         btn.classList.remove('active');
//         count -= delta;
//     } else {
//         sidebar.querySelectorAll('.vote-btn').forEach(b => b.classList.remove('active'));
//         btn.classList.add('active');
//         count += delta;
//     }
//     countElem.innerText = count;
// }

// function toggleComments(threadId) {
//     const thread = document.getElementById(threadId);
//     if (thread) {
//         thread.style.display = thread.style.display === 'none' ? 'block' : 'none';
//     }
// }

// function agregarComentario(e, inputElem, threadId) {
//     if (e.key === 'Enter' && inputElem.value.trim() !== '') {
//         const thread = document.getElementById(threadId);
//         const nuevoComentario = document.createElement('div');
//         nuevoComentario.className = 'comment-item';
//         nuevoComentario.innerHTML = `<strong>u/Tú:</strong> ${inputElem.value.trim()}`;
        
//         thread.insertBefore(nuevoComentario, inputElem.parentElement);
        
//         const card = thread.closest('.reddit-post-card');
//         if (card) {
//             const commentCount = card.querySelector('.comment-count');
//             if (commentCount) {
//                 commentCount.innerText = parseInt(commentCount.innerText, 10) + 1;
//             }
//         }
//         inputElem.value = '';
//     }
// }

// function crearPublicacionReddit() {
//     const input = document.getElementById('reddit-post-input');
//     if (!input) return;
//     const texto = input.value.trim();
//     if (!texto) return;

//     const feed = document.getElementById('posts-feed');
//     if (!feed) return;

//     const newId = 'comments-' + Date.now();
//     const postHTML = `
//         <article class="reddit-post-card">
//             <div class="vote-sidebar">
//                 <button class="vote-btn upvote" onclick="votar(this, 1)" aria-label="Votar a favor">▲</button>
//                 <span class="vote-count">1</span>
//                 <button class="vote-btn downvote" onclick="votar(this, -1)" aria-label="Votar en contra">▼</button>
//             </div>
//             <div class="post-main-content">
//                 <div class="post-header-meta">
//                     <span class="community-tag">r/Comunidad</span>
//                     <span class="meta-dot">•</span>
//                     <span class="post-author">u/Tú</span>
//                     <span class="post-time">Ahora mismo</span>
//                 </div>
//                 <p class="reddit-post-body">${texto}</p>
//                 <div class="reddit-post-actions">
//                     <button class="reddit-action-btn" onclick="toggleComments('${newId}')">
//                         💬 <span class="comment-count">0</span> Comentarios
//                     </button>
//                     <button class="reddit-action-btn" onclick="compartirPost()">🔗 Compartir</button>
//                 </div>
//                 <div id="${newId}" class="reddit-comments-thread" style="display: none;">
//                     <div class="comment-input-box">
//                         <input type="text" placeholder="Escribe un comentario respetuoso..." onkeypress="agregarComentario(event, this, '${newId}')">
//                     </div>
//                 </div>
//             </div>
//         </article>
//     `;

//     feed.insertAdjacentHTML('afterbegin', postHTML);
//     input.value = '';
// }

// function compartirPost() {
//     navigator.clipboard?.writeText(window.location.href).then(() => {
//         alert("¡Enlace del recurso copiado al portapapeles!");
//     }).catch(() => {
//         alert("Enlace listo para compartir.");
//     });
// }

// // --------------------------------------------------------------------------
// // 7. INICIALIZACIÓN UNIFICADA DEL DOM
// // --------------------------------------------------------------------------
// document.addEventListener('DOMContentLoaded', () => {
//     // 1. Restaurar tema visual
//     const savedTheme = localStorage.getItem('neuro_theme_pref');
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
//         document.body.classList.add('dark-theme');
//         actualizarTextoTema(true);
//     } else {
//         document.body.classList.remove('dark-theme');
//         actualizarTextoTema(false);
//     }

//     // 2. Restaurar modo PC
//     const savedMode = localStorage.getItem('neuro_view_mode');
//     const viewBtn = document.getElementById('view-toggle');
//     if (savedMode === 'pc') {
//         document.body.classList.add('view-pc');
//         if (viewBtn) {
//             const cap = viewBtn.querySelector('.btn-caption');
//             if (cap) cap.textContent = 'Vista Móvil';
//         }
//     }

//     // 3. Inicializar categorías
//     inicializarCategorias();

//     // 4. Conectar buscador global
//     const searchInputs = document.querySelectorAll('#global-search, .reddit-search-input');
//     searchInputs.forEach(input => {
//         input.addEventListener('keypress', (e) => {
//             if (e.key === 'Enter') {
//                 const query = input.value.trim();
//                 if (query) {
//                     abrirChatBot();
//                     const chatIn = document.getElementById('chatInput') || document.getElementById('chat-input');
//                     if (chatIn) {
//                         chatIn.value = query;
//                         enviarMensajeChat();
//                     }
//                 }
//             }
//         });
//     });

//     // 5. Conectar inputs del Chat IA
//     const chatInput = document.getElementById('chatInput') || document.getElementById('chat-input');
//     if (chatInput) {
//         chatInput.addEventListener('keypress', (e) => {
//             if (e.key === 'Enter') {
//                 e.preventDefault();
//                 enviarMensajeChat();
//             }
//         });
//     }

//     // 6. Botones flotantes / directos de apertura
//     const btnCopiloto = document.getElementById('btn-copiloto');
//     if (btnCopiloto) {
//         btnCopiloto.addEventListener('click', abrirChatBot);
//     }
//     const btnCerrar = document.getElementById('cerrar-chat');
//     if (btnCerrar) {
//         btnCerrar.addEventListener('click', cerrarChatBot);
//     }

//     // 7. Autenticación (password toggle)
//     const passwordInput = document.getElementById('password');
//     const togglePasswordBtn = document.getElementById('togglePassword');
//     if (togglePasswordBtn && passwordInput) {
//         togglePasswordBtn.addEventListener('click', () => {
//             const isPass = passwordInput.getAttribute('type') === 'password';
//             passwordInput.setAttribute('type', isPass ? 'text' : 'password');
//             togglePasswordBtn.textContent = isPass ? '🙈' : '👁️';
//         });
//     }
// });

// document.addEventListener('DOMContentLoaded', () => {
    // Recuperar la preferencia del usuario al cargar la página
//     const viewPreference = localStorage.getItem('user_view_mode');
    
//     if (viewPreference === 'pc') {
//         document.body.classList.add('pc-mode-active');
//         updateButtonText(true);
//     } else {
//         document.body.classList.remove('pc-mode-active');
//         updateButtonText(false);
//     }
// });

// // Función desencadenada por el clic en el botón
// function toggleViewMode() {
//     const isPc = document.body.classList.toggle('pc-mode-active');
    
//     // Guardar el estado elegido por el usuario
//     localStorage.setItem('user_view_mode', isPc ? 'pc' : 'mobile');
    
//     // Actualizar el texto del botón
//     updateButtonText(isPc);
// }

// function updateButtonText(isPc) {
//     const btn = document.getElementById('view-toggle');
//     if (btn) {
//         btn.textContent = isPc ? 'Vista Móvil' : 'Vista PC';
//     }
// }

