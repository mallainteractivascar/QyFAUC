document.addEventListener('DOMContentLoaded', function() {
    // Datos de la malla curricular
    const curriculumData = [
        {
            semester: 1,
            title: "🔬 SEMESTRE 1",
            courses: [
                { code: "QIM100I", name: "Química General", credits: 10, prerequisites: [], color: "pastel-blue" },
                { code: "QIM101Q", name: "Laboratorio de Química General", credits: 10, prerequisites: [], color: "pastel-blue" },
                { code: "QIF117", name: "El Mundo de los Medicamentos", credits: 10, prerequisites: [], color: "pastel-green" },
                { code: "MAT1000", name: "Precálculo", credits: 10, prerequisites: [], color: "pastel-orange" },
                { code: "QIF100B", name: "Introducción a las Ciencias Farmacéuticas", credits: 0, prerequisites: [], color: "pastel-purple" },
                { code: "FIL2001", name: "Filosofía: ¿Para Qué?", credits: 10, prerequisites: [], color: "pastel-yellow" }
            ]
        },
        {
            semester: 2,
            title: "🧪 SEMESTRE 2",
            courses: [
                { code: "QIM100A", name: "Química General II", credits: 10, prerequisites: ["QIM100I", "QIM101Q"], color: "pastel-blue" },
                { code: "MAT1100", name: "Cálculo I", credits: 10, prerequisites: ["MAT1000"], color: "pastel-orange" },
                { code: "FIS109C", name: "Física para Ciencias", credits: 10, prerequisites: [], color: "pastel-orange" },
                { code: "EFG1", name: "Electivo Formación General (1/7)", credits: 10, prerequisites: [], color: "pastel-yellow" },
                { code: "EFG2", name: "Electivo Formación General (2/7)", credits: 10, prerequisites: [], color: "pastel-yellow" }
            ]
        },
        {
            semester: 3,
            title: "🌿 SEMESTRE 3",
            courses: [
                { code: "QIM102A", name: "Química Orgánica I", credits: 10, prerequisites: ["QIM100A"], color: "pastel-blue" },
                { code: "EYP2310", name: "Estadística para Química y Farmacia", credits: 10, prerequisites: ["MAT1100"], color: "pastel-orange" },
                { code: "QIF115A", name: "Botánica y Farmacognosia", credits: 10, prerequisites: ["QIF117", "QIM100A"], color: "pastel-green" },
                { code: "BIO141C", name: "Biología de la Célula", credits: 10, prerequisites: [], color: "pastel-green" },
                { code: "EFG3", name: "Electivo Formación General (3/7)", credits: 10, prerequisites: [], color: "pastel-yellow" }
            ]
        },
        {
            semester: 4,
            title: "⚗️ SEMESTRE 4",
            courses: [
                { code: "QIM103A", name: "Química Orgánica II", credits: 10, prerequisites: ["QIM102A"], color: "pastel-blue" },
                { code: "QIM109A", name: "Química Analítica I", credits: 10, prerequisites: ["QIM100A", "EYP2310"], color: "pastel-blue" },
                { code: "BIO135C", name: "Fisiología", credits: 10, prerequisites: ["BIO141C"], color: "pastel-green" },
                { code: "EFG4", name: "Electivo Formación General (4/7)", credits: 10, prerequisites: [], color: "pastel-yellow" },
                { code: "EFG5", name: "Electivo Formación General (5/7)", credits: 10, prerequisites: [], color: "pastel-yellow" }
            ]
        },
        {
            semester: 5,
            title: "🧬 SEMESTRE 5",
            courses: [
                { code: "QIM104A", name: "Laboratorio de Química Orgánica", credits: 10, prerequisites: ["QIM103A"], color: "pastel-blue" },
                { code: "QIM117B", name: "Bioquímica", credits: 10, prerequisites: ["QIM103A"], color: "pastel-blue" },
                { code: "QIM150A", name: "Química-Física", credits: 10, prerequisites: ["QIM100A", "FIS109C", "MAT1100"], color: "pastel-blue" },
                { code: "QIM111", name: "Análisis Instrumental", credits: 10, prerequisites: ["QIM109A"], color: "pastel-blue" },
                { code: "MEB203B", name: "Fisiopatología", credits: 10, prerequisites: ["BIO135C"], color: "pastel-green" }
            ]
        },
        {
            semester: 6,
            title: "🦠 SEMESTRE 6",
            courses: [
                { code: "BIO145C", name: "Microbiología e Inmunología", credits: 10, prerequisites: ["QIM117B"], color: "pastel-green" },
                { code: "QIF101A", name: "Fármaco-Química I", credits: 10, prerequisites: ["QIM104A", "QIM150A"], color: "pastel-red" },
                { code: "QIF104A", name: "Farmacocinética y Bio-farmacia", credits: 10, prerequisites: ["QIM150A"], color: "pastel-red" },
                { code: "QIF150", name: "Farmacología I", credits: 10, prerequisites: ["MEB203B", "QIM117B"], color: "pastel-red" },
                { code: "EFG6", name: "Electivo Formación General (6/7)", credits: 10, prerequisites: [], color: "pastel-yellow" }
            ]
        },
        {
            semester: 7,
            title: "💊 SEMESTRE 7",
            courses: [
                { code: "QIF102A", name: "Fármaco-Química II", credits: 10, prerequisites: ["QIF101A", "QIF150"], color: "pastel-red" },
                { code: "QIF105A", name: "Tecnología Farmacéutica I", credits: 10, prerequisites: ["QIF104A", "QIM111"], color: "pastel-red" },
                { code: "QIF116", name: "Farmacología II", credits: 10, prerequisites: ["QIF150"], color: "pastel-red" },
                { code: "QIF118A", name: "Bioquímica Clínica", credits: 10, prerequisites: ["MEB203B", "QIM117B", "QIM150A"], color: "pastel-green" },
                { code: "EFG7", name: "Electivo Formación General (7/7)", credits: 10, prerequisites: [], color: "pastel-yellow" }
            ]
        },
        {
            semester: 8,
            title: "🎓 SEMESTRE 8 (Licenciatura)",
            courses: [
                { code: "QIF108", name: "Toxicología", credits: 10, prerequisites: ["QIF116", "QIF102A"], color: "pastel-red" },
                { code: "QIF400", name: "Tesis de Grado", credits: 40, prerequisites: ["QIF105A", "QIF116"], color: "pastel-purple" }
            ]
        },
        {
            semester: 9,
            title: "🏥 SEMESTRE 9",
            courses: [
                { code: "QIF103A", name: "Fármaco-Química III", credits: 10, prerequisites: ["QIF102A"], color: "pastel-red" },
                { code: "QIF111A", name: "Farmacología III", credits: 10, prerequisites: ["QIF116"], color: "pastel-red" },
                { code: "QIF110A", name: "Farmacia Clínica y Atención Farmacéutica", credits: 10, prerequisites: ["QIF116", "QIF101A"], color: "pastel-red" },
                { code: "QIF106A", name: "Tecnología Farmacéutica II", credits: 10, prerequisites: ["QIF105A"], color: "pastel-red" },
                { code: "QIF113A", name: "Práctica Profesional I", credits: 0, prerequisites: ["QIF105A", "QIF102A"], color: "pastel-purple" },
                { code: "OPT1", name: "Optativo de Profundización (1/3)", credits: 10, prerequisites: [], color: "pastel-yellow" }
            ]
        },
        {
            semester: 10,
            title: "🏆 SEMESTRE 10 (Título Profesional)",
            courses: [
                { code: "MEB231Q", name: "Salud Pública para Química y Farmacia", credits: 5, prerequisites: ["QIF150"], color: "pastel-green" },
                { code: "QIF112A", name: "Internado Clínico", credits: 10, prerequisites: ["QIF111A", "QIF102A"], color: "pastel-purple" },
                { code: "QIF109A", name: "Farmacia Privada", credits: 10, prerequisites: ["QIF102A"], color: "pastel-red" },
                { code: "QIF107", name: "Legislación y Deontología Farmacéutica", credits: 5, prerequisites: ["QIF101A"], color: "pastel-purple" },
                { code: "QIF114A", name: "Práctica Profesional II", credits: 0, prerequisites: ["QIF105A", "QIF102A"], color: "pastel-purple" },
                { code: "OPT2", name: "Optativo de Profundización (2/3)", credits: 10, prerequisites: [], color: "pastel-yellow" },
                { code: "OPT3", name: "Optativo de Profundización (3/3)", credits: 10, prerequisites: [], color: "pastel-yellow" }
            ]
        }
    ];

    // Estado de la aplicación
    const state = {
        approvedCourses: JSON.parse(localStorage.getItem('approvedCourses')) || [],
        totalCredits: calculateTotalCredits(),
        completedCredits: calculateCompletedCredits()
    };

    // Elementos del DOM
    const timelineElement = document.querySelector('.timeline');
    const resetBtn = document.getElementById('reset-btn');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const courseModal = document.getElementById('course-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalCode = document.getElementById('modal-code');
    const modalCredits = document.getElementById('modal-credits');
    const modalPrerequisites = document.getElementById('modal-prerequisites');
    const toggleCourseBtn = document.getElementById('toggle-course');

    // Variables para el modal
    let currentCourse = null;

    // Inicializar la aplicación
    function init() {
        renderTimeline();
        updateProgress();
        setupEventListeners();
    }

    // Renderizar la línea de tiempo con todos los semestres y cursos
    function renderTimeline() {
        timelineElement.innerHTML = '';
        
        curriculumData.forEach(semester => {
            const semesterElement = document.createElement('div');
            semesterElement.className = 'semester';
            
            const semesterHeader = document.createElement('div');
            semesterHeader.className = 'semester-header';
            
            const semesterIcon = document.createElement('div');
            semesterIcon.className = 'semester-icon';
            semesterIcon.textContent = semester.title.split(' ')[0];
            
            const semesterTitle = document.createElement('h2');
            semesterTitle.className = 'semester-title';
            semesterTitle.textContent = semester.title;
            
            semesterHeader.appendChild(semesterIcon);
            semesterHeader.appendChild(semesterTitle);
            
            const coursesContainer = document.createElement('div');
            coursesContainer.className = 'courses-container';
            
            semester.courses.forEach(course => {
                const courseElement = createCourseElement(course);
                coursesContainer.appendChild(courseElement);
            });
            
            semesterElement.appendChild(semesterHeader);
            semesterElement.appendChild(coursesContainer);
            
            timelineElement.appendChild(semesterElement);
        });
    }

    // Crear elemento HTML para un curso
    function createCourseElement(course) {
        const courseElement = document.createElement('div');
        courseElement.className = 'course';
        courseElement.dataset.code = course.code;
        
        // Verificar si el curso está aprobado
        const isApproved = state.approvedCourses.includes(course.code);
        if (isApproved) {
            courseElement.classList.add('approved');
        }
        
        // Verificar si el curso está bloqueado (no se cumplen los prerrequisitos)
        const isLocked = !isCourseUnlocked(course);
        if (isLocked && !isApproved) {
            courseElement.classList.add('locked');
        }
        
        const courseCode = document.createElement('div');
        courseCode.className = 'course-code';
        courseCode.textContent = course.code;
        
        const courseName = document.createElement('div');
        courseName.className = 'course-name';
        courseName.textContent = course.name;
        
        const courseCredits = document.createElement('div');
        courseCredits.className = 'course-credits';
        courseCredits.textContent = `${course.credits} créditos`;
        
        courseElement.appendChild(courseCode);
        courseElement.appendChild(courseName);
        courseElement.appendChild(courseCredits);
        
        return courseElement;
    }

    // Verificar si un curso está desbloqueado (se cumplen los prerrequisitos)
    function isCourseUnlocked(course) {
        if (course.prerequisites.length === 0) return true;
        
        return course.prerequisites.every(prereq => 
            state.approvedCourses.includes(prereq)
        );
    }

    // Configurar event listeners
    function setupEventListeners() {
        // Click en curso
        document.addEventListener('click', function(e) {
            const courseElement = e.target.closest('.course:not(.locked)');
            if (courseElement) {
                const courseCode = courseElement.dataset.code;
                showCourseModal(courseCode);
            }
        });
        
        // Botón de reinicio
        resetBtn.addEventListener('click', resetProgress);
        
        // Cerrar modal
        closeModal.addEventListener('click', closeCourseModal);
        
        // Click fuera del modal para cerrarlo
        window.addEventListener('click', function(e) {
            if (e.target === courseModal) {
                closeCourseModal();
            }
        });
        
        // Toggle curso aprobado
        toggleCourseBtn.addEventListener('click', toggleCourseApproval);
    }

    // Mostrar modal con información del curso
    function showCourseModal(courseCode) {
        const course = findCourseByCode(courseCode);
        if (!course) return;
        
        currentCourse = course;
        
        modalTitle.textContent = course.name;
        modalCode.textContent = `Código: ${course.code}`;
        modalCredits.textContent = `Créditos: ${course.credits}`;
        
        // Mostrar prerrequisitos
        if (course.prerequisites.length > 0) {
            const prereqNames = course.prerequisites.map(code => {
                const prereqCourse = findCourseByCode(code);
                return prereqCourse ? prereqCourse.name : code;
            });
            modalPrerequisites.textContent = `Prerrequisitos: ${prereqNames.join(', ')}`;
        } else {
            modalPrerequisites.textContent = 'Prerrequisitos: Ninguno';
        }
        
        // Configurar botón de aprobación
        const isApproved = state.approvedCourses.includes(course.code);
        toggleCourseBtn.textContent = isApproved ? 'Marcar como pendiente' : 'Marcar como aprobado';
        toggleCourseBtn.className = isApproved ? 'approved' : '';
        
        courseModal.style.display = 'block';
    }

    // Cerrar modal
    function closeCourseModal() {
        courseModal.style.display = 'none';
        currentCourse = null;
    }

    // Alternar estado de aprobación del curso
    function toggleCourseApproval() {
        if (!currentCourse) return;
        
        const courseCode = currentCourse.code;
        const isApproved = state.approvedCourses.includes(courseCode);
        
        if (isApproved) {
            // Remover de aprobados
            state.approvedCourses = state.approvedCourses.filter(code => code !== courseCode);
        } else {
            // Agregar a aprobados
            state.approvedCourses.push(courseCode);
        }
        
        // Actualizar localStorage
        localStorage.setItem('approvedCourses', JSON.stringify(state.approvedCourses));
        
        // Recalcular créditos completados
        state.completedCredits = calculateCompletedCredits();
        
        // Actualizar UI
        updateProgress();
        renderTimeline();
        closeCourseModal();
    }

    // Reiniciar progreso
    function resetProgress() {
        state.approvedCourses = [];
        state.completedCredits = 0;
        
        localStorage.removeItem('approvedCourses');
        updateProgress();
        renderTimeline();
    }

    // Actualizar barra de progreso
    function updateProgress() {
        const percentage = Math.round((state.completedCredits / state.totalCredits) * 100);
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}% completado`;
    }

    // Calcular créditos totales del plan de estudios
    function calculateTotalCredits() {
        return curriculumData.reduce((total, semester) => {
            return total + semester.courses.reduce((sum, course) => sum + course.credits, 0);
        }, 0);
    }

    // Calcular créditos completados
    function calculateCompletedCredits() {
        return curriculumData.reduce((total, semester) => {
            return total + semester.courses.reduce((sum, course) => {
                return state.approvedCourses.includes(course.code) ? sum + course.credits : sum;
            }, 0);
        }, 0);
    }

    // Encontrar curso por código
    function findCourseByCode(code) {
        for (const semester of curriculumData) {
            const course = semester.courses.find(c => c.code === code);
            if (course) return course;
        }
        return null;
    }

    // Iniciar la aplicación
    init();
});
