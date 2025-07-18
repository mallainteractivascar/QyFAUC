const cursos = [
    { id: "QIM100I", nombre: "Química General", prereq: [] },
    { id: "QIM100A", nombre: "Química General II", prereq: ["QIM100I"] },
    { id: "QIM102A", nombre: "Química Orgánica I", prereq: ["QIM100A"] }
];

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
                "color": "#333",
                "font-size": "10px",
                "width": 80,
                "height": 40,
                "border-width": 2,
                "border-color": "#f7a1b4",
                "shape": "roundrectangle"
            }
        },
        {
            selector: "edge",
            style: {
                "width": 2,
                "line-color": "#aaa",
                "target-arrow-color": "#aaa",
                "target-arrow-shape": "triangle"
            }
        }
    ],
    layout: {
        name: "grid", // Para prueba usa grid
        fit: true
    }
});

// Click para marcar aprobados
cy.on("tap", "node", evt => {
    const node = evt.target;
    node.toggleClass("aprobado");
    console.log(`Click en ${node.id()}`);
});
