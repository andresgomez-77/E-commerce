import { usuarioService } from "../service/login-service.js";
const sesion = document.querySelector("[data-sesion]");
sesion.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const email = document.querySelector("[data-sesemail]").value;
  const password = document.querySelector("[data-sespass]").value;
  verificarSesion(email, password);
});
const cuentas = [];
usuarioService.usuarioLogin().then((info) => {
  info.forEach((usuario) => {
    cuentas.push({
      email: usuario.email,
      password: usuario.password,
      id: usuario.id,
    });
  });
});

const verificarSesion = (email, password) => {
  for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i].email == email && cuentas[i].password == password) {
      return (window.location.href = "../pages/allProducts.html");
    }
  }
  const error = document.querySelector(".login__mensaje-fallido");
  error.classList.add("fail");
  setTimeout(() => {
    error.classList.remove("fail");
  }, 3000);
};
