//formulario//

const formulario = document.getElementById("formulario");

if (formulario) {
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const mensaje = document.getElementById("mensaje").value;
    const resultado = document.getElementById("resultado");

    if (mensaje.trim() === "") {
      resultado.textContent = "Por favor, escribí un mensaje.";
      resultado.style.color = "red";
    } else {
      resultado.textContent =
        "¡Gracias por compartirnos esto y por tu compromiso con la Memoria, la Verdad y la Justicia!";
      resultado.style.color = "green";

      document.getElementById("mensaje").value = "";
    }
  });
}


//Tarjeta dinamica//

const botonTarjeta = document.getElementById("crearTarjeta");

if (botonTarjeta) {
  botonTarjeta.addEventListener("click", function () {
    const tarjeta = document.getElementById("tarjeta");

    tarjeta.innerHTML = `
      <div class="card mt-3">
        <div class="card-body">
          <h5 class="card-title">Nunca Más</h5>
          <p class="card-text">
            Recordar el pasado es defender la democracia y los derechos humanos.
          </p>
        </div>
      </div>
    `;
  });
}


//Modo oscuro//

const botonModo = document.getElementById("btn-modo");

if (botonModo) {
  botonModo.addEventListener("click", function () {
    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
      botonModo.textContent = "☀️ Modo claro";
      botonModo.classList.remove("btn-dark");
      botonModo.classList.add("btn-light");
    } else {
      botonModo.textContent = "🌙 Modo oscuro";
      botonModo.classList.remove("btn-light");
      botonModo.classList.add("btn-dark");
    }
  });
}
