// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declarar el array de amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  const inputAmigo = document.getElementById("inputAmigo");
  const nombreAmigo = inputAmigo.value.trim();

  // Validar entrada
  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Agregar amigo al array
  amigos.push(nombreAmigo);

  // Limpiar campo de entrada
  inputAmigo.value = "";

  // Actualizar la lista en el DOM
  mostrarAmigos();
}

// Función para actualizar la lista de amigos en el DOM
function mostrarAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiar lista anterior

  // Agregar cada amigo como un elemento <li>
  amigos.forEach((amigo) => {
    lista.innerHTML += `<li>${amigo}</li>`;
  });
}

// Función para sortear un amigo del arreglo
function sortearAmigo() {
  const resultado = document.getElementById("resultadoSorteo");

  // Validar si el array tiene elementos
  if (amigos.length === 0) {
    resultado.innerHTML = "No hay amigos en la lista para sortear.";
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre del amigo seleccionado
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado
  resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}

// Agregar eventos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const btnAgregar = document.getElementById("btnAgregar");
  const btnSortear = document.getElementById("btnSortear");

  // Asociar funciones a los botones
  btnAgregar.addEventListener("click", agregarAmigo);
  btnSortear.addEventListener("click", sortearAmigo);
});
