import { productoServicios } from "../service/product-service.js";

const allProducts = (link, categoria, nombre, precio, id) => {
  const product = document.createElement("div");
  product.classList.add("producto");
  const contenidoSeccion = `
    <div class="edicion__iconos">
        <img data-tacho id="${id}" src="../imagenes/icons/Vectorbasura.svg" alt="img tacho">
        <a href="editarProducto.html?id=${id}"><img data-lapiz id="${id}" src="../imagenes/icons/Vectorlapiz.svg" alt="img lapiz"></a>
    </div>
    <p class="title-3">${categoria}</p>
    <img " src="../imagenes/productos/${link}" alt="producto">
    </div>
    <div class="product-title">
        <p class="title-1">${nombre}</p>
        <p class="title-2">$${precio}</p>
    </div>`;
  product.innerHTML = contenidoSeccion;
  const tacho = product.querySelector("[data-tacho]");
  tacho.addEventListener("click", () => {
    const id = tacho.id;
    productoServicios
      .eliminarProducto(id)
      .then((respuesta) => {})
      .catch((err) => alert("ocurrio un error"));
  });
  return product;
};
const table = document.querySelector("[data-table]");
productoServicios
  .secciones()
  .then((info) => {
    info.forEach(({ link, categoria, nombre, precio, id }) => {
      const articuloNew = allProducts(link, categoria, nombre, precio, id);
      table.appendChild(articuloNew);
    });
  })
  .catch((error) => alert("Ocurrio un error"));
