import { productoServicios } from "../service/product-service.js";

const form = document.querySelector("[data-form]");
form.addEventListener("submit", (result) => {
  result.preventDefault();
  const link = document.querySelector("#productoLink").value;
  const categoria = document.querySelector("#productoTipoObjeto");
  if (categoria.value == "--Tipo De Objeto--") {
    categoria.classList.add("fail");
    return;
  }
  const nombre = document.querySelector("#productoNombre").value;
  const precio = document.querySelector("#productoPrecio").value;
  const descripcion = document.querySelector("#productoDescripcion").value;
  try {
    productoServicios.newProduct(
      link,
      categoria.value,
      nombre,
      precio,
      descripcion
    );
    window.location.href = "../pages/allProducts.html";
  } catch (error) {
    alert(error);
  }
});
