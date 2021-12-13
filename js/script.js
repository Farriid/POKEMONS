let contenedor = document.getElementById("contenedor");
let pokemon = {};

const traer_datos = (id) => {
  fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    .then((response) => response.json())
    .then((data) => {
      pokemon = data;
      pintar_datos();
    })
    .catch((error) => console.log(error));
};

const pintar_datos = () => {
  contenedor.innerHTML = "";
  contenedor.insertAdjacentHTML(
    "beforeend",
    `
        <img src="${pokemon.sprites.front_default}">
        <h1 class="nombre">${pokemon.name}</h1>
    `
  );
  contenedor.insertAdjacentHTML(
    "beforeend",
    `
    <button id="aleatori">Mas pokemons</button>
  `
  );
  let rand_btn = document.getElementById("aleatori");
  rand_btn.addEventListener("click", () => {
    traer_datos(aleatorio_entre(1, 100));
  });
};

const aleatorio_entre = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

traer_datos(1);