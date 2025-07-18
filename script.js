// Datos de la malla curricular
const curriculumData = [
    {
        semester: 1,
        title: "🔬 SEMESTRE 1",
        courses: [
            { code: "QIM100I", name: "Química General", credits: 10, prerequisites: [] },
            { code: "QIM101Q", name: "Laboratorio de Química General", credits: 10, prerequisites: [] },
            { code: "QIF117", name: "El Mundo de los Medicamentos", credits: 10, prerequisites: [] },
            { code: "MAT1000", name: "Precálculo", credits: 10, prerequisites: [] },
            { code: "QIF100B", name: "Introducción a las Ciencias Farmacéuticas", credits: 0, prerequisites: [] },
            { code: "FIL2001", name: "Filosofía: ¿Para Qué?", credits: 10, prerequisites: [] }
        ]
    },
    {
        semester: 2,
        title: "🧪 SEMESTRE 2",
        courses: [
            { code: "QIM100A", name: "Química General II", credits: 10, prerequisites: ["QIM100I", "QIM101Q"] },
            { code: "MAT1100", name: "Cálculo I", credits: 10, prerequisites: ["MAT1000"] },
            { code: "FIS109C", name: "Física para Ciencias", credits: 10, prerequisites: [] },
            { code: "EFG1", name: "Electivo Formación General (1/7)", credits: 10, prerequisites: [] },
            { code: "EFG2", name: "Electivo Formación General (2/7)", credits: 10, prerequisites: [] }
        ]
    },
    {
        semester: 3,
        title: "🌿 SEMESTRE 3",
        courses: [
            { code: "QIM102A", name: "Química Orgánica I", credits: 10, prerequisites: ["QIM100A"] },
            { code: "EYP2310", name: "Estadística para Química y Farmacia", credits: 10, prerequisites: ["MAT1100"] },
            { code: "QIF115A", name: "Botánica y Farmacognosia", credits: 10, prerequisites: ["QIF117", "QIM100A"] },
            { code: "BIO141C", name: "Biología de la Célula", credits: 10, prerequisites: [] },
            { code: "EFG3", name: "Electivo Formación General (3/7)", credits: 10, prerequisites: [] }
        ]
    },
    {
        semester: 4,
        title: "⚗️ SEMESTRE 4",
        courses: [
            { code: "QIM103A", name: "Química Orgánica II", credits: 10, prerequisites: ["QIM102A"] },
            { code: "QIM109A", name: "Química Analítica I", credits: 10, prerequisites: ["QIM100A", "EYP2310"] },
            { code: "BIO135C", name: "Fisiología", credits: 10, prerequisites: ["BIO141C"] },
            { code: "EFG4", name: "Electivo Formación General (4/7)", credits: 10, prerequisites: [] },
            { code: "EFG5", name: "Electivo Formación General (5/7)", credits: 10, prerequisites: [] }
        ]
    },
    {
        semester: 5,
        title: "🧬 SEMESTRE 5",
        courses: [
            { code: "QIM104A", name: "Laboratorio de Química Orgánica", credits: 10, prerequisites: ["QIM103A"] },
            { code: "QIM117B", name: "Bioquímica", credits: 10, prerequisites: ["QIM103A"] },
            { code: "QIM150A", name: "Química-Física", credits: 10, prerequisites: ["QIM100A", "FIS109C", "MAT1100"] },
            { code: "QIM111", name: "Análisis Instrumental", credits: 10, prerequisites: ["QIM109A"] },
            { code: "MEB203B", name: "Fisiopatología", credits: 10, prerequisites: ["BIO135C"] }
        ]
    },
    {
        semester: 6,
        title: "🦠 SEMESTRE 6",
        courses: [
            { code: "BIO145C", name: "Microbiología e Inmunología", credits: 10, prerequisites: ["QIM117B"] },
            { code: "QIF101A", name: "Fármaco-Química I", credits: 10, prerequisites: ["QIM104A", "QIM150A"] },
            { code: "QIF104A", name: "Farmacocinética y Bio-farmacia", credits: 10, prerequisites: ["QIM150A"] },
            { code: "QIF150", name: "Farmacología I", credits: 10, prerequisites: ["MEB203B", "QIM117B"] },
            { code: "EFG6", name: "Electivo Formación General (6/7)", credits: 10, prerequisites: [] }
        ]
    },
    {
        semester: 7,
        title: "💊 SEMESTRE 7",
        courses: [
            { code: "QIF102A", name: "Fármaco-Química II", credits: 10, prerequisites: ["QIF101A", "QIF150"] },
            { code: "QIF105A", name: "Tecnología Farmacéutica I", credits: 10, prerequisites: ["QIF104A", "QIM111"] },
            { code: "QIF116", name: "Farmacología II", credits: 10, prerequisites: ["QIF150"] },
            { code: "QIF118A", name: "Bioquímica Clínica", credits: 10, prerequisites: ["MEB203B", "QIM117B", "QIM150A"] },
            { code: "EFG7", name: "Electivo Formación General (7/7)", credits: 10, prerequisites: [] }
        ]
    },
    {
        semester: 8,
        title: "🎓 SEMESTRE 8 (Licenciatura)",
        courses: [
            { code: "QIF108", name: "Toxicología", credits: 10, prerequisites: ["QIF116", "QIF102A"] },
            { code: "QIF400", name: "Tesis de Grado", credits: 40, prerequisites: ["QIF105A", "QIF116"] }
        ]
    },
    {
        semester: 9,
        title: "🏥 SEMESTRE 9",
        courses: [
            { code: "QIF103A", name: "Fármaco-Química III", credits: 10, prerequisites: ["QIF102A"] },
            { code: "QIF111A", name: "Farmacología III", credits: 10, prerequisites: ["QIF116"] },
            { code: "QIF110A", name: "Farmacia Clínica y Atención Farmacéutica", credits: 10, prerequisites: ["QIF116", "QIF101A"] },
            { code: "QIF106A", name: "Tecnología Farmacéutica II", credits: 10, prerequisites: ["QIF105A"] },
            { code: "QIF113A", name: "Práctica Profesional I", credits: 0, prerequisites: ["QIF105A", "QIF102A"] },
            { code: "OPT1", name: "Optativo de Profundización (1/3)", credits: 10, prerequisites: [] }
        ]
    },
    {
        semester: 10,
        title: "🏆 SEMESTRE 10 (Título Profesional)",
        courses: [
            { code: "MEB231Q", name: "Salud Pública para Química y Farmacia", credits: 5, prerequisites: ["QIF150"] },
            { code: "QIF112A", name: "Internado Clínico", credits: 10, prerequisites: ["QIF111A", "QIF102A"] },
            { code: "QIF109A", name: "Farmacia Privada", credits: 10, prerequisites: ["QIF102A"] },
            { code: "QIF107", name: "Legislación y Deontología Farmacéutica", credits: 5, prerequisites: ["QIF101A"] },
            { code: "QIF114A", name: "Práctica Profesional II", credits: 0, prerequisites: ["QIF105A", "QIF102A"] },
            { code: "OPT2", name: "Optativo de Profundización (2/3)", credits: 10, prerequisites: [] },
            { code: "OPT3", name: "Optativo de Profundización (3/3)", credits: 10, prerequisites: [] }
        ]
    }
];

// Estado de la aplicación
const state = {
    approvedCourses: JSON.parse(localStorage.getItem('approvedCourses')) || [],
    totalCredits: curriculumData.reduce((total, semester) => {
        return total + semester.courses.reduce((sum, course) => sum + course.credits, 0);
    }, 0),
    get completedCredits() {
        return curriculumData.reduce((total, semester) => {
            return total + semester.courses.reduce((sum, course) => {
                return this.approvedCourses.includes(course.code) ? sum + course.credits : sum;
            }, 0);
        }, 0);
    }
};

// Elementos del DOM
const elements = {
    timeline: document.getElementById('timeline'),
    resetBtn: document.getElementById('reset-btn'),
    progressBar: document.getElementById('progress-bar'),
    progressText: document.getElementById('progress-text'),
    courseModal: document.getElementById('course-modal'),
    closeModal: document.querySelector('.close-modal'),
    modalTitle: document.getElementById('modal-title'),
    modalCode: document.getElementById('modal-code'),
    modalCredits: document.getElementById('modal-credits'),
    modalPrerequisites: document.getElementById('modal-prerequisites'),
    toggleCourseBtn: document.getElementById('toggle-course')
};

// Variables para el modal
let currentCourse = null;

// Funciones principales
function renderTimeline() {
    elements.timeline.innerHTML = '';
    
    curriculumData.forEach(semester => {
        const semesterElement = document.createElement('div');
        semesterElement.className = 'semester';
        
        semesterElement.innerHTML = `
            <div class="semester-header">
                <div class="semester-icon">${semester.title.split(' ')[0]}</div>
                <h2 class="semester-title">${semester.title}</h2>
            </div>
            <div class="courses-container">
                ${semester.courses.map(course => createCourseHTML(course)).join('')}
            </div>
        `;
        
        elements.timeline.appendChild(semesterElement);
    });
}

function createCourseHTML(course) {
    const isApproved = state.approvedCourses.includes(course.code);
    const isLocked = !isApproved && !isCourseUnlocked(course);
    
    return `
        <div class="course ${isApproved ? 'approved' : ''} ${isLocked ? 'locked' : ''}" 
             data-code="${course.code}">
            <div class="course-code">${course.code}</div>
            <div class="course-name">${course.name}</div>
            <div class="course-credits">${course.credits} créditos</div>
        </div>
    `;
}

function isCourseUnlocked(course) {
    return course.prerequisites.every(prereq => 
        state.approvedCourses.includes(prereq)
    );
}

function showCourseModal(courseCode) {
    const course = curriculumData.flatMap(s => s.courses).find(c => c.code === courseCode);
    if (!course) return;
    
    currentCourse = course;
    
    elements.modalTitle.textContent = course.name;
    elements.modalCode.textContent = `Código: ${course.code}`;
    elements.modalCredits.textContent = `Créditos: ${course.credits}`;
    
    if (course.prerequisites.length > 0) {
        const prereqNames = course.prerequisites.map(code => {
            const prereq = curriculumData.flatMap(s => s.courses).find(c => c.code === code);
            return prereq ? prereq.name : code;
        });
        elements.modalPrerequisites.textContent = `Prerrequisitos: ${prereqNames.join(', ')}`;
    } else {
        elements.modalPrerequisites.textContent = 'Prerrequisitos: Ninguno';
    }
    
    const isApproved = state.approvedCourses.includes(course.code);
    elements.toggleCourseBtn.textContent = isApproved ? 'Marcar como pendiente' : 'Marcar como aprobado';
    elements.toggleCourseBtn.className = isApproved ? 'approved' : '';
    
    elements.courseModal.style.display = 'block';
}

function closeCourseModal() {
    elements.courseModal.style.display = 'none';
    currentCourse = null;
}

function toggleCourseApproval() {
    if (!currentCourse) return;
    
    const courseCode = currentCourse.code;
    const isApproved = state.approvedCourses.includes(courseCode);
    
    if (isApproved) {
        state.approvedCourses = state.approvedCourses.filter(code => code !== courseCode);
    } else {
        state.approvedCourses.push(courseCode);
    }
    
    localStorage.setItem('approvedCourses', JSON.stringify(state.approvedCourses));
    updateProgress();
    renderTimeline();
    closeCourseModal();
}

function resetProgress() {
    state.approvedCourses = [];
    localStorage.removeItem('approvedCourses');
    updateProgress();
    renderTimeline();
}

function updateProgress() {
    const percentage = Math.round((state.completedCredits / state.totalCredits) * 100);
    elements.progressBar.style.width = `${percentage}%`;
    elements.progressText.textContent = `${percentage}% completado`;
}

// Event listeners
function setupEventListeners() {
    document.addEventListener('click', (e) => {
        const courseElement = e.target.closest('.course:not(.locked)');
        if (courseElement) {
            showCourseModal(courseElement.dataset.code);
        }
    });
    
    elements.resetBtn.addEventListener('click', resetProgress);
    elements.closeModal.addEventListener('click', closeCourseModal);
    elements.toggleCourseBtn.addEventListener('click', toggleCourseApproval);
    
    window.addEventListener('click', (e) => {
        if (e.target === elements.courseModal) {
            closeCourseModal();
        }
    });
}

// Inicialización
function init() {
    setupEventListeners();
    renderTimeline();
    updateProgress();
}

// Iniciar la aplicación cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
