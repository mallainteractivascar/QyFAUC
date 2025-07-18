// Datos de la malla curricular
const mallaData = [
    {
        semester: 1,
        title: "🔬 SEMESTRE 1",
        courses: [
            { code: "QIM100I", name: "Química General", credits: 10, prereq: [] },
            { code: "QIM101Q", name: "Laboratorio de Química General", credits: 10, prereq: [] },
            { code: "QIF117", name: "El Mundo de los Medicamentos", credits: 10, prereq: [] },
            { code: "MAT1000", name: "Precálculo", credits: 10, prereq: [] },
            { code: "QIF100B", name: "Introducción a las Ciencias Farmacéuticas", credits: 0, prereq: [] },
            { code: "FIL2001", name: "Filosofía: ¿Para Qué?", credits: 10, prereq: [] }
        ]
    },
    // Resto de los semestres...
    // (Mantén aquí la estructura completa de los semestres que proporcionaste anteriormente)
];

// Estado de la aplicación
const state = {
    aprobados: JSON.parse(localStorage.getItem('aprobados')) || [],
    creditosTotales: mallaData.reduce((total, sem) => total + sem.courses.reduce((sum, cur) => sum + cur.credits, 0), 0),
    get creditosCompletados() {
        return mallaData.reduce((total, sem) => {
            return total + sem.courses.reduce((sum, cur) => {
                return this.aprobados.includes(cur.code) ? sum + cur.credits : sum;
            }, 0);
        }, 0);
    }
};

// Elementos del DOM
const DOM = {
    timeline: document.getElementById('timeline-container'),
    resetBtn: document.getElementById('reset-btn'),
    progressBar: document.getElementById('progress-bar'),
    progressText: document.getElementById('progress-text'),
    modal: document.getElementById('course-modal'),
    modalTitle: document.getElementById('modal-title'),
    modalCode: document.getElementById('modal-code'),
    modalCredits: document.getElementById('modal-credits'),
    modalPrereq: document.getElementById('modal-prereq'),
    toggleBtn: document.getElementById('toggle-btn'),
    closeBtn: document.querySelector('.close-btn')
};

// Variables globales
let cursoActual = null;

// Funciones principales
function renderMalla() {
    DOM.timeline.innerHTML = '';
    
    mallaData.forEach(semestre => {
        const semestreHTML = `
            <div class="semester">
                <div class="semester-header">
                    <div class="semester-icon">${semestre.title.split(' ')[0]}</div>
                    <h2 class="semester-title">${semestre.title}</h2>
                </div>
                <div class="courses-grid">
                    ${semestre.courses.map(curso => crearCursoHTML(curso)).join('')}
                </div>
            </div>
        `;
        
        DOM.timeline.insertAdjacentHTML('beforeend', semestreHTML);
    });
}

function crearCursoHTML(curso) {
    const aprobado = state.aprobados.includes(curso.code);
    const bloqueado = !aprobado && !estaDesbloqueado(curso);
    
    return `
        <div class="course ${aprobado ? 'approved' : ''} ${bloqueado ? 'locked' : ''}" 
             data-code="${curso.code}">
            <div class="course-code">${curso.code}</div>
            <div class="course-name">${curso.name}</div>
            <div class="course-credits">${curso.credits} créditos</div>
        </div>
    `;
}

function estaDesbloqueado(curso) {
    return curso.prereq.every(codigo => state.aprobados.includes(codigo));
}

function mostrarModal(codigoCurso) {
    const curso = mallaData.flatMap(sem => sem.courses).find(c => c.code === codigoCurso);
    if (!curso) return;
    
    cursoActual = curso;
    
    DOM.modalTitle.textContent = curso.name;
    DOM.modalCode.textContent = curso.code;
    DOM.modalCredits.textContent = curso.credits;
    
    if (curso.prereq.length > 0) {
        const prereqNombres = curso.prereq.map(codigo => {
            const pre = mallaData.flatMap(sem => sem.courses).find(c => c.code === codigo);
            return pre ? pre.name : codigo;
        });
        DOM.modalPrereq.textContent = prereqNombres.join(', ');
    } else {
        DOM.modalPrereq.textContent = 'Ninguno';
    }
    
    const aprobado = state.aprobados.includes(curso.code);
    DOM.toggleBtn.textContent = aprobado ? 'Marcar como pendiente' : 'Marcar como aprobado';
    DOM.toggleBtn.className = aprobado ? 'approved' : '';
    
    DOM.modal.style.display = 'block';
}

function cerrarModal() {
    DOM.modal.style.display = 'none';
    cursoActual = null;
}

function toggleAprobacion() {
    if (!cursoActual) return;
    
    const codigo = cursoActual.code;
    const aprobado = state.aprobados.includes(codigo);
    
    if (aprobado) {
        state.aprobados = state.aprobados.filter(c => c !== codigo);
    } else {
        state.aprobados.push(codigo);
    }
    
    localStorage.setItem('aprobados', JSON.stringify(state.aprobados));
    actualizarProgreso();
    renderMalla();
    cerrarModal();
}

function reiniciarProgreso() {
    state.aprobados = [];
    localStorage.removeItem('aprobados');
    actualizarProgreso();
    renderMalla();
}

function actualizarProgreso() {
    const porcentaje = Math.round((state.creditosCompletados / state.creditosTotales) * 100);
    DOM.progressBar.style.width = `${porcentaje}%`;
    DOM.progressText.textContent = `${porcentaje}% completado`;
}

// Event listeners
function setupEventListeners() {
    DOM.timeline.addEventListener('click', (e) => {
        const curso = e.target.closest('.course:not(.locked)');
        if (curso) {
            mostrarModal(curso.dataset.code);
        }
    });
    
    DOM.resetBtn.addEventListener('click', reiniciarProgreso);
    DOM.closeBtn.addEventListener('click', cerrarModal);
    DOM.toggleBtn.addEventListener('click', toggleAprobacion);
    
    window.addEventListener('click', (e) => {
        if (e.target === DOM.modal) {
            cerrarModal();
        }
    });
}

// Inicialización
function init() {
    setupEventListeners();
    renderMalla();
    actualizarProgreso();
}

// Iniciar la aplicación
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
