document.addEventListener("DOMContentLoaded", () => {
    const cursos = document.querySelectorAll(".curso");

    cursos.forEach(curso => {
        // Bloquea cursos con prerrequisitos al inicio
        if (curso.dataset.prereq) {
            curso.classList.add("bloqueado");
        }

        curso.addEventListener("click", () => {
            if (curso.classList.contains("bloqueado")) {
                alert("Debes aprobar los prerrequisitos primero");
                return;
            }

            curso.classList.toggle("aprobado");
            actualizarCursos();
        });
    });

    function actualizarCursos() {
        cursos.forEach(curso => {
            if (!curso.dataset.prereq) return;

            const prereqs = curso.dataset.prereq.split(",");
            const desbloqueado = prereqs.every(pr => {
                const prereqCurso = document.getElementById(pr);
                return prereqCurso && prereqCurso.classList.contains("aprobado");
            });

            if (desbloqueado) {
                curso.classList.remove("bloqueado");
            } else {
                curso.classList.add("bloqueado");
                curso.classList.remove("aprobado");
            }
        });
    }
});
