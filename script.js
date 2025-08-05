const frases = [
  "Cree en ti y todo será posible.",
  "Cada día es una nueva oportunidad.",
  "Nunca es tarde para empezar de nuevo.",
  "Lo mejor está por venir.",
  "Sé la energía que querés atraer.",
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "No te rindas, lo bueno tarda.",
  "Convertí los obstáculos en oportunidades.",
  "Confía en tu proceso.",
  "Hoy es un buen día para empezar.",
  "Aunque no lo creas, puedes con todo.",
  "Te mereces todo lo bonito de la vida."
];

const welcomeScreen = document.querySelector(".pantalla-bienvenida");
const fraseScreen = document.querySelector(".pantalla-frase");

const nombreInput = document.getElementById("nombre");
const comenzarBtn = document.getElementById("btn-comenzar");
const nombreUsuarioSpan = document.getElementById("nombre-usuario");
const fraseElemento = document.getElementById("frase");
const volverBtn = document.getElementById("btn-volver");

let nombreUsuario = "";

// Al hacer clic en "Comenzar"
comenzarBtn.addEventListener("click", () => {
  const nombre = nombreInput.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresá tu nombre.");
    return;
  }

  nombreUsuario = nombre;
  nombreUsuarioSpan.textContent = nombreUsuario;

  welcomeScreen.style.display = "none";
  fraseScreen.style.display = "block";

  mostrarNuevaFrase();
});

// Función para mostrar frase personalizada
function mostrarNuevaFrase() {
  const indice = Math.floor(Math.random() * frases.length);
  const frase = frases[indice];
  fraseElemento.textContent = `${nombreUsuario}, ${frase}`;
}


volverBtn.addEventListener("click", () => {
  // Limpiar el campo de nombre y volver a mostrar la pantalla inicial
  nombreInput.value = "";
  fraseElemento.textContent = "Click acá para encontrar tu frase del día";

  fraseScreen.style.display = "none";
  welcomeScreen.style.display = "block";
});