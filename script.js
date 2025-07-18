document.addEventListener('DOMContentLoaded', () => {
    const cursos = document.querySelectorAll('.curso');

    cursos.forEach(curso => {
        if (curso.dataset.prereq) {
            curso.classList.add('bloqueado');
        }
        curso.addEventListener('click', () => {
            if (curso.classList.contains('bloqueado')) {
                alert('Debes aprobar los prerrequisitos primero');
                return;
            }
            curso.classList.toggle('aprobado');
            actualizarCursos();
        });
    });

    function actualizarCursos() {
        cursos.forEach(curso => {
            if (!curso.dataset.prereq) return;
            const prereqs = curso.dataset.prereq.split(',');
            const aprobado = prereqs.every(id => {
                const prereqCurso = document.getElementById(id);
                return prereqCurso.classList.contains('aprobado');
            });
            if (aprobado) {
                curso.classList.remove('bloqueado');
            } else {
                curso.classList.add('bloqueado');
                curso.classList.remove('aprobado');
            }
        });
    }
});
