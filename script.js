// Datos de cursos y prerrequisitos
const cursos = [
    { id: "QIM100I", nombre: "Química General", prereq: [] },
    { id: "QIM101Q", nombre: "Lab. Química General", prereq: [] },
    { id: "QIF117", nombre: "El Mundo de los Medicamentos", prereq: [] },
    { id: "MAT1000", nombre: "Precálculo", prereq: [] },
    { id: "QIM100A", nombre: "Química General II", prereq: ["QIM100I", "QIM101Q"] },
    { id: "MAT1100", nombre: "Cálculo I", prereq: ["MAT1000"] },
    { id: "QIM102A", nombre: "Química Orgánica I", prereq: ["QIM100A"] },
    { id: "QIM103A", nombre: "Química Orgánica II", prereq: ["QIM102A"] },
    { id: "QIM104A", nombre: "Lab. Química Orgánica", prereq: ["QIM103A"] },
    { id: "QIM117B", nombre: "Bioquímica", prereq: ["QIM103A"] },
    { id: "QIF101A", nombre: "Fármaco-Química I", prereq: ["QIM104A"] },
    { id: "QIF102A", nombre: "Fármaco-Química II", prereq: ["QIF101A"] },
    { id: "QIF150", nombre: "Farmacología I", prereq: ["QIM117B"] },
    { id: "QIF116", nombre: "Farmacología II", prereq: ["QIF150"] },
    { id: "QIF105A", nombre: "Tecnología Farmacéutica I", prereq: ["QIM117B"] },
    // … agrega TODOS los cursos aquí
];

// Crea los nodos y aristas
const elements = [];
cursos.forEach(curso => {
    elements.push({
        data: { id: curso.id, label: curso.nombre }
    });
    curso.prereq.forEach(pr => {
        elements.push({
            data: { source: pr, target: curso.id }
        });
    });
});

// Inicializa Cytoscape
const cy = cytoscape({
    container: document.getElementById("cy"),
    elements: elements,
    style: [
        {
            selector: "node",
            style: {
                "background-color": "#ffd6e0",
                "label": "data(label)",
                "text-valign": "center",
                "text-halign": "center",
                "color": "#333",
                "font-size": "10px",
                "width": 60,
                "height": 60,
                "border-width": 2,
                "border-color": "#f7a1b4",
                "shape": "roundrectangle"
            }
        },
        {
            selector: "node.aprobado",
            style: {
                "background-color": "#a8e6cf",
                "border-color": "#56c596",
                "text-decoration": "line-through"
            }
        },
        {
            selector: "node.bloqueado",
            style: {
                "background-color": "#d3d3d3",
                "border-color": "#999"
            }
        },
        {
            selector: "edge",
            style: {
                "width": 2,
                "line-color": "#bbb",
                "target-arrow-color": "#bbb",
                "target-arrow-shape": "triangle"
            }
        }
    ],
    layout: {
        name: "breadthfirst",
        directed: true,
        padding: 10
    }
});

// Click para aprobar y desbloquear
cy.on("tap", "node", evt => {
    const node = evt.target;

    if (node.hasClass("bloqueado")) {
        alert("Debes aprobar los prerrequisitos primero");
        return;
    }

    node.toggleClass("aprobado");
    actualizarNodos();
});

// Actualizar nodos bloqueados/desbloqueados
function actualizarNodos() {
    cursos.forEach(curso => {
        const node = cy.getElementById(curso.id);
        if (!curso.prereq.length) return;

        const prereqsAprobados = curso.prereq.every(pr => {
            return cy.getElementById(pr).hasClass("aprobado");
        });

        if (prereqsAprobados) {
            node.removeClass("bloqueado");
        } else {
            node.removeClass("aprobado");
            node.addClass("bloqueado");
        }
    });
}

// Inicial bloqueados
cursos.forEach(curso => {
    if (curso.prereq.length) {
        cy.getElementById(curso.id).addClass("bloqueado");
    }
});
