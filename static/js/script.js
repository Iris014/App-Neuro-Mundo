console.log("Conexión centralizada con JS...");

// <button id="btn-idioma" onclick="alternarIdioma()">EN</button>
// <button id="btn-idioma" onclick="alternarIdioma()">ES</button>
/*<!-- Botón de Idioma Integrado -->
                    <button id="btn-idioma" onclick="alternarIdioma()" style="cursor: pointer; background: transparent; border: 1px solid #ccc; border-radius: 4px; padding: 2px 6px; font-weight: bold;">EN</button>
                    📶 🔋

                    Botón Selector de Idioma (Hereda la línea gráfica del Header)
.lang-btn {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 4px 8px;
    border-radius: 12px;
    cursor: pointer;
    transition: background 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.lang-btn:active {
    background: rgba(255, 255, 255, 0.3);
}
                    */


let idiomaActual = "es";
const traducciones = {
    paginaIndex: {
        es: {
            btn: "EN",
            brand: "Espacio Amigable",
            welcomeTitle: "BIENVENIDOS: UN ESPACIO DISEÑADO PARA TI",
            welcomeSubtitle: "UN LUGAR AMIGABLE PARA PERSONAS CON AUTISMO",
            speechBubble: "AMAR, RESPETAR E INCLUIR.",
            placeholderBusqueda: "Buscar guías, actividades o consejos...",
            catTitulo: "Categorías de Apoyo",
            catCasa: "En Casa",
            catEscuela: "Escuela",
            catTerapia: "Terapia",
            catAutocuidado: "Auto-cuidado",
            toolsTitulo: "Herramientas Diarias",
            tool1Titulo: "Agenda Visual del Día",
            tool1Desc: "Crea y gestiona las rutinas diarias mediante imágenes y pictogramas simples.",
            tool2Titulo: "Semáforo de Alerta Sensorial",
            tool2Desc: "Monitorea y registra los niveles de estrés o sobrecarga del niño en tiempo real.",
            tool3Titulo: "Temporizador de Transición",
            tool3Desc: "Ayuda a tu hijo a cambiar de una actividad a otra sin generar ansiedad.",
            articlesTitulo: "Lecturas Recomendadas",
            articlesSeeAll: "Ver todo",
            art1Tag: "Crisis",
            art1Titulo: "Cómo gestionar una crisis sensorial en espacios públicos",
            art1Desc: "Una guía paso a paso con técnicas de desescalada amigables y respetuosas.",
            art1Autor: "Por Dra. Elena Ramos",
            art1Tiempo: "Hace 2 horas",
            art2Tag: "Juego",
            art2Titulo: "5 Juegos de estimulación propioceptiva en casa",
            art2Desc: "Actividades divertidas que ayudan a regular el sistema nervioso a través del movimiento.",
            art2Autor: "Por T.O. Marcos Díaz",
            art2Tiempo: "Ayer",
            commBannerTitulo: "¿Necesitas hablar con alguien?",
            commBannerDesc: "Únete a nuestros círculos de apoyo virtuales liderados por psicólogos especialistas.",
            commBannerBtn: "Entrar al Chat Grupal",
            navInicio: "Inicio",
            navHerramientas: "Herramientas",
            navComunidad: "Comunidad",
            navPerfil: "Perfil"
        },
        en: {
            btn: "ES",
            brand: "Friendly Space",
            welcomeTitle: "WELCOME: A SPACE DESIGNED FOR YOU",
            welcomeSubtitle: "A FRIENDLY PLACE FOR PEOPLE WITH AUTISM",
            speechBubble: "LOVE, RESPECT AND INCLUDE.",
            placeholderBusqueda: "Search guides, activities or tips...",
            catTitulo: "Support Categories",
            catCasa: "At Home",
            catEscuela: "School",
            catTerapia: "Therapy",
            catAutocuidado: "Self-care",
            toolsTitulo: "Daily Tools",
            tool1Titulo: "Daily Visual Schedule",
            tool1Desc: "Create and manage daily routines using simple images and pictograms.",
            tool2Titulo: "Sensory Alert Traffic Light",
            tool2Desc: "Monitor and track stress or overload levels in real time.",
            tool3Titulo: "Transition Timer",
            tool3Desc: "Help your child transition from one activity to another without anxiety.",
            articlesTitulo: "Recommended Readings",
            articlesSeeAll: "See all",
            art1Tag: "Crisis",
            art1Titulo: "How to manage a sensory meltdown in public spaces",
            art1Desc: "A step-by-step guide with friendly and respectful de-escalation techniques.",
            art1Autor: "By Dr. Elena Ramos",
            art1Tiempo: "2 hours ago",
            art2Tag: "Play",
            art2Titulo: "5 Proprioceptive stimulation games at home",
            art2Desc: "Fun activities that help regulate the nervous system through movement.",
            art2Autor: "By O.T. Marcos Díaz",
            art2Tiempo: "Yesterday",
            commBannerTitulo: "Need to talk to someone?",
            commBannerDesc: "Join our virtual support circles led by specialist psychologists.",
            commBannerBtn: "Join Group Chat",
            navInicio: "Home",
            navHerramientas: "Tools",
            navComunidad: "Community",
            navPerfil: "Profile"
        }
    },
    paginaProblematica: {
        es: {
            btn: "EN",
            titulo: "El Desafío del Autismo: Diagnóstico, Estrés Familiar y Oportunidad",
            intro: "A pesar de la abundancia de información actual, las familias enfrentan dos grandes barreras: el subdiagnóstico y la falta de herramientas para el manejo diario. Esta realidad justifica la urgente necesidad de una solución digital centralizada.",
            subRealidad: "1. La Realidad Oculta: Casos No Diagnosticados",
            listaRealidad: `
                <li><strong>1 de cada 4 niños sin detectar:</strong> El 25% de los niños que cumplen con los criterios clínicos no tienen un diagnóstico oficial.</li>
                <li><strong>La invisibilidad en la adolescencia:</strong> El 25% de los adolescentes en el espectro no están diagnosticados.</li>
                <li><strong>La brecha socioeconómica y racial:</strong> El diagnóstico se pierde muchísimo más en familias de bajos ingresos.</li>
            `,
            subCosto: "2. El Costo de 'Saber Lidiar': Preparación y Estrés",
            listaCosto: `
                <li><strong>Desinformación Inicial:</strong> Entre el 35% y el 40% de los padres primerizos tienen ideas erróneas sobre los síntomas.</li>
                <li><strong>Impacto en la Salud Mental:</strong> El 72.5% de las madres presentan síntomas depresivos y el 80.2% sufre de ansiedad.</li>
                <li><strong>Sacrificio Laboral:</strong> Entre el 25% y el 45% de los padres han tenido que reducir sus horas de trabajo o renunciar.</li>
            `,
            tituloOds: "Alineación con Objetivos de Desarrollo Sostenible (ODS)",
            listaOds: `
                <li><strong>ODS 3 (Salud y Bienestar):</strong> Ataca directamente la crisis de salud mental de los cuidadores.</li>
                <li><strong>ODS 4 (Educación de Calidad):</strong> Capacita tempranamente a los padres mediante herramientas de corregulación.</li>
                <li><strong>ODS 10 (Reducción de Desigualdades):</strong> Democratiza el acceso a orientación gratuita o de bajo costo.</li>
                <li><strong>ODS 8 (Trabajo Decente):</strong> Devuelve autonomía de tiempo a los cuidadores para mantenerse en el mercado laboral.</li>
            `
        },
        en: {
            btn: "ES",
            titulo: "The Autism Challenge: Diagnosis, Family Stress, and Opportunity",
            intro: "Despite the abundance of information available today, families face two major barriers: underdiagnosis and a lack of tools for daily management. This reality justifies the urgent need for a centralized digital solution.",
            subRealidad: "1. The Hidden Reality: Undiagnosed Cases",
            listaRealidad: `
                <li><strong>1 in 4 Undetected Children:</strong> 25% of children meeting clinical criteria lack an official diagnosis.</li>
                <li><strong>Invisibility in Adolescence:</strong> 25% of adolescents on the spectrum remain undiagnosed.</li>
                <li><strong>Socioeconomic & Racial Gap:</strong> Diagnoses are missed more frequently in low-income communities.</li>
            `,
            subCosto: "2. The Cost of 'Knowing How to Cope': Preparedness and Stress",
            listaCosto: `
                <li><strong>Initial Misinformation:</strong> 35% to 40% of first-time parents hold severe knowledge gaps.</li>
                <li><strong>Mental Health Impact:</strong> 72.5% of mothers display depressive symptoms and 80.2% suffer from anxiety.</li>
                <li><strong>Occupational Sacrifice:</strong> 25% to 45% of parents had to reduce working hours or resign.</li>
            `,
            tituloOds: "Sustainable Development Goals (SDGs) Alignment",
            listaOds: `
                <li><strong>SDG 3 (Good Health and Well-being):</strong> Directly addresses the caregiver mental health crisis.</li>
                <li><strong>SDG 4 (Quality Education):</strong> Empowers parents through early training in co-regulation tools.</li>
                <li><strong>SDG 10 (Reduced Inequalities):</strong> Democratizes access to free or low-cost guidance tools.</li>
                <li><strong>SDG 8 (Decent Work):</strong> Restores time autonomy for caregivers to remain in the labor market.</li>
            `
        }
    },

    paginaForo: {
        es: {
            btn: "EN",
            titulo: "Casos y Mensajes de la Comunidad",
            lblCuidador: "Mensaje del cuidador:",
            lblRespuesta: "Respuesta de la comunidad:",
            msgCuidador1: '"Hola. Hoy fuimos al supermercado y mi hijo de 6 años se tiró al suelo a gritar y patear cerca de las cajas. Sentí muchísimo miedo y vergüenza... Pensé que era un berrinche."',
            msgRespuesta1: '"Te entiendo perfectamente porque me pasó lo mismo. No es un berrinche, se saturó con tanta luz y ruido. Lo que me sirvió fue hacer compras en horas con poca gente y usar audífonos para el ruido."',
            msgCuidador2: '"Mi hijo de 5 años empezó a caminar en círculos y a aletear muy fuerte con las manos en la sala de espera del médico..."',
            msgRespuesta2: '"Agarrarle las manos es lo peor que podemos hacer. Ese aleteo es su forma de liberar estrés. Déjalo aletear tranquilo."'
        },
        en: {
            btn: "ES",
            titulo: "Community Messages and Cases",
            lblCuidador: "Caregiver Message:",
            lblRespuesta: "Community Response:",
            msgCuidador1: '"Hello. Today we went to the supermarket and my 6-year-old son threw himself on the floor, screaming and kicking near the checkout counters. I felt so scared and ashamed... I thought it was a tantrum."',
            msgRespuesta1: '"I completely get you because the exact same thing happened to me. It is not a tantrum, he was just overwhelmed by all the lights and noise. What helped me was shopping during off-peak hours and using noise-canceling headphones."',
            msgCuidador2: '"My 5-year-old son started pacing in circles and flapping his hands really hard in the waiting room..."',
            msgRespuesta2: '"Holding his hands is the worst thing we can do. That hand-flapping is his way of releasing stress. Let him flap away comfortably."'
        }
    },

    paginaProyecto: {
        es: {
            btn: "EN",
            titulo: "Red Comunitaria de Apoyo para Familias con TEA",
            subConcepto: "1. Concepto General",
            descConcepto: "La propuesta consiste en una plataforma digital comunitaria y pseudónima dedicada exclusivamente a padres y cuidadores de personas en el Espectro Autista. Su diseño se inspira en la arquitectura de foros de discusión (estilo Reddit).",
            subPilares: "2. Pilares Funcionales",
            listaPilares: `
                <li><strong>Perfiles Basados en Patrones:</strong> Fichas compuestas por variables conductuales sin revelar datos identificables.</li>
                <li><strong>Validación Comunitaria:</strong> Sistema de votación para destacar estrategias prácticas efectivas.</li>
                <li><strong>Asistente IA ("Copiloto Comunitario"):</strong> Módulo no intrusivo entrenado exclusivamente con soluciones validadas.</li>
            `,
            subVentajas: "3. Ventajas Estructurales y Legales",
            descVentajas: "Cumplimiento normativo simplificado al prescindir de datos personales sensibles y reducción de sesgos mediante un entorno pseudónimo.",
            subIot: "4. Elemento IoT (Internet de las Cosas)",
            descIot: "<strong>Simulador Sensorial en VR:</strong> Herramienta inmersiva para recrear la percepción visual y auditiva de personas en el espectro."
        },
        en: {
            btn: "ES",
            titulo: "Community Support Network for Families with ASD",
            subConcepto: "1. General Concept",
            descConcepto: "The proposal consists of a pseudonymous digital community platform dedicated exclusively to parents and caregivers of individuals on the Autism Spectrum, inspired by forum architecture.",
            subPilares: "2. Functional Pillars",
            listaPilares: `
                <li><strong>Pattern-Based Profiles:</strong> Cards based on behavioral variables without revealing identifiable data.</li>
                <li><strong>Community Validation:</strong> Voting system to highlight practical effective strategies.</li>
                <li><strong>AI Co-Pilot:</strong> Non-intrusive assistant trained exclusively on validated responses.</li>
            `,
            subVentajas: "3. Structural and Legal Advantages",
            descVentajas: "Simplified regulatory compliance by dispensing with personal data and reduction of bias through a pseudonymous environment.",
            subIot: "4. IoT Element (Internet of Things)",
            descIot: "<strong>VR Sensory Processing Simulator:</strong> Immersive tool recreating the sensory perception of individuals on the spectrum."
        }
    },
    paginaMetodologia: {
        es: {
            btnIdioma: "EN",
            navP1: "Página 1: Diagnóstico",
            navP2: "Página 2: Comunidad",
            navP3: "Página 3: Experiencia VR",
            navP4: "Página 4: Bienestar & ODS",

            // PÁGINA 1
            p1HeroTitulo: "No es rebeldía, es neurodivergencia: Entendiendo las señales no vistas",
            p1HeroDesc: "Punto de entrada informativo para visibilizar el subdiagnóstico y romper barreras de desinformación.",
            p1Card1Titulo: "📊 Datos de Subdiagnóstico",
            p1Card1Desc: "El 25% de los niños con criterios clínicos no reciben diagnóstico oportuno antes de los 8 años ni en la adolescencia.",
            p1Card2Titulo: "🌍 Brecha Social y Acceso",
            p1Card2Desc: "Familias de menores recursos enfrentan barreras geográficas y económicas severas para acceder a neuropediatras.",
            p1Card3Titulo: "🧩 Test de Orientación Sensorial",
            p1Card3Desc: "Herramienta no clínica interactiva para diferenciar colapsos sensoriales de rabietas convencionales.",

            // PÁGINA 2
            p2Titulo: "Red Pseudónima de Apoyo & Foro Comunitario",
            p2Desc: "Intercambio de experiencias sin estigma, filtrado por patrones conductuales y validación empírica.",
            p2SearchPlaceholder: "Buscar por palabra clave (ej. supermercado, sueño, vacuna)...",
            p2CopilotoTxt: "Haz una pregunta rápida sobre alguna conducta y resumiré las respuestas con mayor tasa de éxito de la comunidad.",
            lblCuidador: "Mensaje del Cuidador:",
            lblRespuesta: "Respuesta de la Comunidad Validada:",

            // Casos Página 2
            p2Cat1: "Categoría 1: Espacios Públicos",
            p2C1Titulo: "Caso 1: El colapso en el supermercado",
            msgC1: '"Hola. Hoy fuimos al supermercado y mi hijo de 6 años se tiró al suelo a gritar y patear cerca de las cajas. Sentí muchísimo miedo y vergüenza..."',
            msgR1: '"Uff, te entiendo perfectamente porque a mí me pasó exactamente lo mismo... lo que a mí me sirvió fue empezar a hacer compras cortas a horas con poca gente y llevar sus audífonos..."',

            p2C2Titulo: "Caso 2: Regulación y aleteo en la sala de espera médica",
            msgC2: '"En la sala de espera empezó a caminar en círculos y a aletear muy fuerte con las manos. Le agarré las manos con fuerza... ¿Cómo le quito esos movimientos?"',
            msgR2: '"Agarrarle las manos es lo peor que podemos hacer porque ese aleteo es su forma de sacar todo el estrés. Déjalo aletear tranquilo porque así su cuerpo se calma."',

            p2Cat2: "Categoría 2: Comunicación No Verbal",
            p2C3Titulo: "Caso 3: Autoagresión por falta de comunicación",
            msgC3: '"Mi hija de 4 años no habla y lleva toda la tarde mordiéndose la mano y empujándome hacia la cocina... Siento que no logro conectar con ella."',
            msgR3: '"A mí me salvó la vida pegar fotos de la comida y el agua en la puerta del refrigerador. Guíale suavemente el dedito para que toque la imagen."',

            // PÁGINA 3
            p3Titulo: "Centro de Empatía, VR e Integración IoT",
            p3Desc: "Simulador inmersivo para experimentar de primera mano la sobrecarga sensorial y ajustar el entorno del hogar.",
            p3Sub1: "🥽 Simulador de Hipersensibilidad VR",
            p3Desc1: "Ajusta parámetros de luces, estímulos auditivos y multitud para experimentar cómo percibe un entorno saturado una persona neurodivergente.",
            btnDemoVr: "Iniciar Demo Interactiva",
            p3Sub2: "📑 Guías Visuales & Pictogramas",
            p3Desc2: "Descarga plantillas con secuencias visuales para visitas médicas, lavarse las manos y horarios de pantalla.",
            btnDescarga: "Descargar Recursos (PDF)",

            // PÁGINA 4
            p4Titulo: "Impacto en Salud Mental y Alineación con ODS",
            p4Desc: "Datos de efectividad social y reducción de la carga emocional en cuidadores.",
            ods3Desc: "Reducción del 40% del estrés familiar y mitigación de síntomas de ansiedad (80.2%) y depresión (72.5%) en cuidadores mediante corregulación.",
            ods4Desc: "Capacitación continua no formal sobre respuesta no violenta, corregulación y eliminación de castigos contraproducentes.",
            ods10Desc: "Democratización de recursos especializados para familias de bajos ingresos y comunidades vulnerables de forma totalmente gratuita.",
            ods8Desc: "Estabilización de rutinas familiares para permitir la reincorporación laboral y autonomía de tiempo de las madres y cuidadores."
        },
        en: {
            btnIdioma: "ES",
            navP1: "Page 1: Diagnosis",
            navP2: "Page 2: Community",
            navP3: "Page 3: VR Experience",
            navP4: "Page 4: Well-being & SDGs",

            // PÁGINA 1
            p1HeroTitulo: "It's not defiance, it's neurodivergence: Understanding unseen signals",
            p1HeroDesc: "Informative entry point to raise awareness about underdiagnosis and break misinformation barriers.",
            p1Card1Titulo: "📊 Underdiagnosis Data",
            p1Card1Desc: "25% of children meeting clinical criteria do not receive a timely diagnosis before age 8 or during adolescence.",
            p1Card2Titulo: "🌍 Social Gap & Access",
            p1Card2Desc: "Low-income families face severe geographic and economic barriers to access pediatric neurologists.",
            p1Card3Titulo: "🧩 Sensorial Orientation Test",
            p1Card3Desc: "Interactive non-clinical tool to differentiate sensory meltdowns from conventional tantrums.",

            // PÁGINA 2
            p2Titulo: "Pseudonymous Support Network & Forum",
            p2Desc: "Stigma-free experience exchange, filtered by behavioral patterns and empirical validation.",
            p2SearchPlaceholder: "Search by keyword (e.g., supermarket, sleep, vaccine)...",
            p2CopilotoTxt: "Ask a quick question about a behavior and I will summarize the community's most successful strategies.",
            lblCuidador: "Caregiver Message:",
            lblRespuesta: "Validated Community Response:",

            // Casos Página 2
            p2Cat1: "Category 1: Public Spaces",
            p2C1Titulo: "Case 1: Supermarket Meltdown",
            msgC1: '"Hello. Today we went to the supermarket and my 6-year-old son dropped to the floor screaming and kicking near the registers..."',
            msgR1: '"Uff, I completely understand because the exact same thing happened to me... What helped me was making short shopping trips during off-peak hours..."',

            p2C2Titulo: "Case 2: Stimming in the Medical Waiting Room",
            msgC2: '"My 5-year-old was getting a vaccine. In the waiting room, he started pacing in circles and flapping his hands hard..."',
            msgR2: '"Holding his hands is the worst thing we can do because hand-flapping is his way of releasing stress. Let him stim peacefully."',

            p2Cat2: "Category 2: Non-Verbal Communication",
            p2C3Titulo: "Case 3: Self-Harm Due to Communication Frustration",
            msgC3: '"I am desperate. My 4-year-old daughter doesn\'t speak and has been biting her hand all afternoon..."',
            msgR3: '"Sticking pictures of food and water on the fridge door saved my life. Gently guide her finger to tap the image."',

            // PÁGINA 3
            p3Titulo: "Empathy Center, VR & IoT Integration",
            p3Desc: "Immersive simulator to experience sensory overload firsthand and adjust home environments.",
            p3Sub1: "🥽 VR Hypersensitivity Simulator",
            p3Desc1: "Adjust parameters for lighting, auditory stimuli, and crowds to experience how a neurodivergent person perceives environments.",
            btnDemoVr: "Launch Interactive Demo",
            p3Sub2: "📑 Visual Guides & Pictograms",
            p3Desc2: "Download visual sequence templates for doctor visits, handwashing, and screen time management.",
            btnDescarga: "Download Resources (PDF)",

            // PÁGINA 4
            p4Titulo: "Mental Health Impact & SDG Alignment",
            p4Desc: "Social effectiveness data and emotional burden reduction for caregivers.",
            ods3Desc: "40% reduction in family stress and mitigation of anxiety (80.2%) and depressive symptoms (72.5%) in caregivers through co-regulation.",
            ods4Desc: "Continuous non-formal education on non-violent responses, co-regulation, and elimination of counterproductive punishments.",
            ods10Desc: "Democratization of specialized resources for low-income families and vulnerable communities entirely free of charge.",
            ods8Desc: "Stabilization of family routines to enable mothers and caregivers to re-enter the workforce and gain time autonomy."
        }
    }
};

function alternarIdioma() {
    // Alternar idioma entre español e inglés
    idiomaActual = (idiomaActual === "es")
        ? "en" : "es";

    // Intentar actualizar la PARTE 1 si los elementos existen en la página activa
    if (document.getElementById("titulo-principal")) {
        const t = traducciones.paginaIndex[idiomaActual];
        document.getElementById("btn-idioma").textContent = t.btn;
        document.getElementById("titulo-principal").textContent = t.titulo;
        document.getElementById("desc-intro").textContent = t.intro;
        document.getElementById("sub-realidad").textContent = t.subRealidad;
        document.getElementById("lista-realidad").innerHTML = t.listaRealidad;
        document.getElementById("sub-costo").textContent = t.subCosto;
        document.getElementById("lista-costo").innerHTML = t.listaCosto;
        document.getElementById("titulo-ods").textContent = t.tituloOds;
        document.getElementById("lista-ods").innerHTML = t.listaOds;
    }
    if (document.getElementById("titulo-solucion")) {
        const t = traducciones.paginaProblematica[idiomaActual];
        document.getElementById("btn-idioma").textContent = t.btn;
        document.getElementById("titulo-solucion").textContent = t.titulo;
        document.getElementById("sub-concepto").textContent = t.subConcepto;
        document.getElementById("desc-concepto").textContent = t.descConcepto;
        document.getElementById("sub-pilares").textContent = t.subPilares;
        document.getElementById("lista-pilares").innerHTML = t.listaPilares;
        document.getElementById("sub-ventajas").textContent = t.subVentajas;
        document.getElementById("desc-ventajas").textContent = t.descVentajas;
        document.getElementById("sub-iot").textContent = t.subIot;
        document.getElementById("desc-iot").innerHTML = t.descIot;
    }
    if (document.getElementById("titulo-comunidad")) {
        const t = traducciones.paginaForo[idiomaActual];
        document.getElementById("btn-idioma").textContent = t.btn;
        document.getElementById("titulo-comunidad").textContent = t.titulo;
        document.getElementById("lbl-cuidador1").textContent = t.lblCuidador;
        document.getElementById("lbl-respuesta1").textContent = t.lblRespuesta;
        document.getElementById("msg-cuidador1").textContent = t.msgCuidador1;
        document.getElementById("msg-respuesta1").textContent = t.msgRespuesta1;
        document.getElementById("lbl-cuidador2").textContent = t.lblCuidador;
        document.getElementById("lbl-respuesta2").textContent = t.lblRespuesta;
        document.getElementById("msg-cuidador2").textContent = t.msgCuidador2;
        document.getElementById("msg-respuesta2").textContent = t.msgRespuesta2;
    }
    if (document.getElementById("txt-anuncio")) {
        const t = traducciones.paginaProyecto[idiomaActual];
        document.getElementById("btn-idioma").textContent = t.btn;
        document.getElementById("txt-anuncio").textContent = t.anuncio;
        document.getElementById("search-input").placeholder = t.placeholderBusqueda;
        document.getElementById("nav-inicio").textContent = t.navInicio;
        document.getElementById("nav-foro").textContent = t.navForo;
        document.getElementById("nav-soporte").textContent = t.navSoporte;
        document.getElementById("nav-registro").textContent = t.navRegistro;
        document.getElementById("banner-titulo").textContent = t.bannerTitulo;
        document.getElementById("banner-sub1").textContent = t.bannerSub1;
        document.getElementById("banner-sub2").textContent = t.bannerSub2;
        document.getElementById("btn-comprar").textContent = t.btnComprar;

        for (let i = 1; i <= 6; i++) {
            const el = document.getElementById(`lbl-resenas-${i}`);
            if (el) el.textContent = t.resenas;
        }

        document.getElementById("ft-comunidad").textContent = t.ftComunidad;
        document.getElementById("ft-contacto").textContent = t.ftContacto;
        document.getElementById("ft-horario-semana").textContent = t.ftHorarioSemana;
        document.getElementById("ft-horario-finde").textContent = t.ftHorarioFinde;
        document.getElementById("ft-titulo-links").textContent = t.ftTituloLinks;
        document.getElementById("ft-link-comunidad").textContent = t.ftLinkComunidad;
        document.getElementById("ft-titulo-sub").textContent = t.ftTituloSub;
        document.getElementById("ft-sub-desc").textContent = t.ftSubDesc;
        document.getElementById("ft-lbl-correo").textContent = t.ftLblCorreo;
    }
    if (document.getElementById("p1-hero-titulo")) {
        const t = traducciones.paginaMetodologia[idiomaActual];
        document.getElementById("btn-idioma").textContent = t.btn;

        // Navegación de páginas
        if (document.getElementById("nav-p1")) document.getElementById("nav-p1").textContent = t.navPag1;
        if (document.getElementById("nav-p2")) document.getElementById("nav-p2").textContent = t.navPag2;
        if (document.getElementById("nav-p3")) document.getElementById("nav-p3").textContent = t.navPag3;
        if (document.getElementById("nav-p4")) document.getElementById("nav-p4").textContent = t.navPag4;

        // Página 1
        document.getElementById("p1-hero-titulo").textContent = t.p1HeroTitulo;
        document.getElementById("p1-hero-desc").textContent = t.p1HeroDesc;
        document.getElementById("p1-card1-titulo").textContent = t.p1Card1Titulo;
        document.getElementById("p1-card1-desc").textContent = t.p1Card1Desc;
        document.getElementById("p1-card2-titulo").textContent = t.p1Card2Titulo;
        document.getElementById("p1-card2-desc").textContent = t.p1Card2Desc;
        document.getElementById("p1-card3-titulo").textContent = t.p1Card3Titulo;
        document.getElementById("p1-card3-desc").textContent = t.p1Card3Desc;

        // Página 2
        document.getElementById("p2-titulo").textContent = t.p2Titulo;
        document.getElementById("p2-desc").textContent = t.p2Desc;
        document.getElementById("p2-search-input").placeholder = t.p2SearchInput;
        document.getElementById("p2-copiloto-txt").textContent = t.p2CopilotoTxt;

        // Página 3
        document.getElementById("p3-titulo").textContent = t.p3Titulo;
        document.getElementById("p3-desc").textContent = t.p3Desc;
        document.getElementById("p3-sub1").textContent = t.p3Sub1;
        document.getElementById("p3-desc1").textContent = t.p3Desc1;
        document.getElementById("btn-demo-vr").textContent = t.btnDemoVr;
        document.getElementById("p3-sub2").textContent = t.p3Sub2;
        document.getElementById("p3-desc2").textContent = t.p3Desc2;
        document.getElementById("btn-descarga").textContent = t.btnDescarga;

        // Página 4
        document.getElementById("p4-titulo").textContent = t.p4Titulo;
        document.getElementById("p4-desc").textContent = t.p4Desc;
        document.getElementById("ods3-desc").textContent = t.ods3Desc;
        document.getElementById("ods4-desc").textContent = t.ods4Desc;
        document.getElementById("ods10-desc").textContent = t.ods10Desc;
        document.getElementById("ods8-desc").textContent = t.ods8Desc;
    }
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