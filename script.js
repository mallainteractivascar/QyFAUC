// Datos de la malla curricular (personaliza con tus cursos)
const semestres = [
  {
    titulo: "🔬 SEMESTRE 1",
    cursos: [
      { nombre: "Química General", codigo: "QIM100I", creditos: 10, prereq: [] },
      // ... Agrega todos tus cursos como en el ejemplo anterior
    ]
  },
  // ... Agrega todos los semestres
];

// Elementos DOM
const malla = document.getElementById("malla");
const resetBtn = document.getElementById("resetBtn");
const toggleThemeBtn = document.getElementById("toggleTheme");
const creditosDiv = document.getElementById("creditos");

// Estado
const aprobados = new Set(JSON.parse(localStorage.getItem("aprobados")) || []);

// Inicializar
function init() {
  renderMalla();
  calcularCreditos();
  setupEventListeners();
}

// Renderizar malla
function renderMalla() {
  malla.innerHTML = semestres.map(semestre => `
    <div class="semestre">
      <h2>${semestre.titulo}</h2>
      ${semestre.cursos.map(curso => `
        <div class="curso ${getCursoClass(curso)}" 
             onclick="toggleAprobado('${curso.codigo}')"
             id="${curso.codigo}">
          <strong>${curso.nombre}</strong><br>
          ${curso.codigo}<br>
          ${curso.creditos} créditos
        </div>
      `).join("")}
    </div>
  `).join("");
}

// Lógica para aprobar/desaprobar cursos
function toggleAprobado(codigo) {
  const curso = document.getElementById(codigo);
  if (curso.classList.contains("bloqueado")) return;

  if (aprobados.has(codigo)) {
    aprobados.delete(codigo);
  } else {
    aprobados.add(codigo);
  }
  
  localStorage.setItem("aprobados", JSON.stringify([...aprobados]));
  renderMalla();
  calcularCreditos();
}

// Calcular créditos
function calcularCreditos() {
  const total = semestres.flatMap(s => s.cursos).reduce((sum, c) => sum + c.creditos, 0);
  const aprob = [...aprobados].reduce((sum, cod) => {
    const curso = semestres.flatMap(s => s.cursos).find(c => c.codigo === cod);
    return sum + (curso?.creditos || 0);
  }, 0);
  
  creditosDiv.textContent = `Créditos: ${aprob}/${total}`;
}

// Helpers
function getCursoClass(curso) {
  const bloqueado = !curso.prereq.every(req => aprobados.has(req));
  return `${bloqueado ? "bloqueado" : ""} ${aprobados.has(curso.codigo) ? "aprobado" : ""}`;
}

// Event Listeners
function setupEventListeners() {
  resetBtn.onclick = () => {
    aprobados.clear();
    localStorage.removeItem("aprobados");
    renderMalla();
    calcularCreditos();
  };
  
  toggleThemeBtn.onclick = () => {
    document.body.classList.toggle("dark");
  };
  
  document.getElementById("viewDiagram").onclick = () => {
    window.location.href = "diagrama.html";
  };
}

// Iniciar
document.addEventListener("DOMContentLoaded", init);
