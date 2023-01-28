import { productoServicios } from "../service/product-service.js";
const obtenerInfo = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  if (id == null) {
    window.location.href = "../../index.html";
  }
  const Link = document.querySelector("[data-link]");
  const nombre = document.querySelector("[data-nombre]");
  const precio = document.querySelector("[data-precio]");
  const descripcion = document.querySelector("[data-descripcion]");
  productoServicios.editarProducto(id).then((product) => {
    Link.value = product.link;
    nombre.value = product.nombre;
    precio.value = product.precio;
    descripcion.value = product.descripcion;
    if (product.link == undefined) {
      window.location.href = "../../index.html";
    }
  });
};
obtenerInfo();

const form = document.querySelector("[data-form]");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const Link = document.querySelector("[data-link]").value;
  const categoria = document.querySelector("#productoTipoObjeto");
  if (categoria.value == "--Tipo De Objeto--") {
    categoria.classList.add("fail");
    return;
  }
  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const descripcion = document.querySelector("[data-descripcion]").value;
  productoServicios
    .reconstruirProducto(Link, categoria.value, nombre, precio, descripcion, id)
    .then((respuesta) => {
      window.location.href = "../pages/allProducts.html";
    })
    .catch((err) => console.log(err));
});
