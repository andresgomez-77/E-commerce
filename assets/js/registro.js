import { usuarioService } from "./service/login-service.js";
const crearUsuario = document.querySelector("[data-register]");
crearUsuario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = document.querySelector("[data-regname]").value;
  const email = document.querySelector("[data-regemail]").value;
  const password = document.querySelector("[data-regpass]").value;
  console.log(nombre, email, password);
  usuarioService
    .crearUsuario(nombre, email, password)
    .then((result) => {
      window.location.href = "../pages/iniciar-sesion.html";
    })
    .catch((err) => {
      console.log(err);
    });
});
