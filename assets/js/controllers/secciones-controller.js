import { productoServicios } from "../service/product-service.js";

const construccion = document.querySelector("#construccion");
const hogar = document.querySelector("#hogar");
const acabados = document.querySelector("#acabados");

const seccionesProductos = (nombre, link, precio, id) => {
  const seccionProduct = document.createElement("div");
  seccionProduct.classList.add("producto");
  const contenido = `<a href="assets/pages/productos.html?id=${id}">
    <img
      src="assets/imagenes/productos/${link}"
      alt=""
    />
    <div class="product-title">
      <p class="title-1">${nombre}</p>
      <p class="title-2">$${precio}</p>
    </div>
  </a>`;
  seccionProduct.innerHTML = contenido;
  return seccionProduct;
};

productoServicios
  .secciones()
  .then((info) => {
    info.forEach(({ nombre, categoria,precio, link, id }) => {
      const newSeccion = seccionesProductos(nombre, link,precio ,id);
      const seccionCat = categoria;
      if (seccionCat == "construccion") {
        construccion.appendChild(newSeccion);
      }
      if (seccionCat == "hogar") {
        hogar.appendChild(newSeccion);
      }
      if (seccionCat == "acabados") {
        acabados.appendChild(newSeccion);
      }
    });
  })
  .catch((error) => alert("Ocurrio un error"));
