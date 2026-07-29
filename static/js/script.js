console.log("Conexión centralizada con JS...");

// <button id="btn-idioma" onclick="alternarIdioma()">🌐 Switch to English</button>

let idiomaActual = "es";

const traducciones = {

    paginaIndex: {
        es: {
            btn: "🌐 Inglés",
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
            btn: "🌐 Spanish",
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


    paginaProyecto: {
        es: {
            btn: "🌐 Inglés",
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
            btn: "🌐 Spanish",
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


    paginaUsuarios: {
        es: {
            btn: "🌐 Inglés",
            titulo: "Casos y Mensajes de la Comunidad",
            lblCuidador: "Mensaje del cuidador:",
            lblRespuesta: "Respuesta de la comunidad:",
            msgCuidador1: '"Hola. Hoy fuimos al supermercado y mi hijo de 6 años se tiró al suelo a gritar y patear cerca de las cajas. Sentí muchísimo miedo y vergüenza... Pensé que era un berrinche."',
            msgRespuesta1: '"Te entiendo perfectamente porque me pasó lo mismo. No es un berrinche, se saturó con tanta luz y ruido. Lo que me sirvió fue hacer compras en horas con poca gente y usar audífonos para el ruido."',
            msgCuidador2: '"Mi hijo de 5 años empezó a caminar en círculos y a aletear muy fuerte con las manos en la sala de espera del médico..."',
            msgRespuesta2: '"Agarrarle las manos es lo peor que podemos hacer. Ese aleteo es su forma de liberar estrés. Déjalo aletear tranquilo."'
        },
        en: {
            btn: "🌐 Spanish",
            titulo: "Community Messages and Cases",
            lblCuidador: "Caregiver Message:",
            lblRespuesta: "Community Response:",
            msgCuidador1: '"Hello. Today we went to the supermarket and my 6-year-old son threw himself on the floor, screaming and kicking near the checkout counters. I felt so scared and ashamed... I thought it was a tantrum."',
            msgRespuesta1: '"I completely get you because the exact same thing happened to me. It is not a tantrum, he was just overwhelmed by all the lights and noise. What helped me was shopping during off-peak hours and using noise-canceling headphones."',
            msgCuidador2: '"My 5-year-old son started pacing in circles and flapping his hands really hard in the waiting room..."',
            msgRespuesta2: '"Holding his hands is the worst thing we can do. That hand-flapping is his way of releasing stress. Let him flap away comfortably."'
        }
    }
};

// Función principal llamada por el botón onclick="alternarIdioma()"
function alternarIdioma() {
    // Alternar idioma entre español e inglés
    idiomaActual = (idiomaActual === "es") ? "en" : "es";

    // Intentar actualizar la PARTE 1 si los elementos existen en la página activa
    if (document.getElementById("titulo-principal")) {
        const t = traducciones.parte1[idiomaActual];
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
        const t = traducciones.parte2[idiomaActual];
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
        const t = traducciones.parte3[idiomaActual];
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
}