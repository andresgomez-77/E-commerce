import { productoServicios } from "../service/product-service.js";

const obtenerInfo = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const tablaSimilares = document.querySelector(".producto__holder");
  console.log(url);
  if (id == null) {
    window.location.href = "../../index.html";
  }
  productoServicios.productos(id).then((product) => {
    productosSecciones(
      product.link,
      product.nombre,
      product.precio,
      product.descripcion
    );
    const categoriaProduct = product.categoria;
    const idProducto = product.id;

    productoServicios.secciones().then((data) => {
      data.forEach(({ link, categoria, nombre, precio, id }) => {
        let contador = 1;
        if (categoriaProduct == categoria && idProducto != id && contador < 6) {
          const lineaSimilares = productosSimilares(link, nombre, precio, id);
          tablaSimilares.appendChild(lineaSimilares);
          contador++;
        }
      });
    });
  });
};
obtenerInfo();

const productosSecciones = (link, nombre, precio, descripcion) => {
  const tabla = document.querySelector(".articulo");
  const caja = document.createElement("div");
  caja.classList.add("producto__main");
  const contenidoSeccion = 
  `<h2 class="producto__titleView">${nombre}</h2>
  <img class="product__img" src="../imagenes/productos/${link}"">
  <div class="producto__datos">
      <h2 class="product__tittle">${nombre}</h2>
      <p class="product__price">$${precio}</p>
      <p class="product__text">${descripcion}</p>
  </div>`;
  caja.innerHTML = contenidoSeccion;
  tabla.appendChild(caja);
};

const productosSimilares = (link, nombre, precio, id) => {
  const similares = document.createElement("div");
  similares.classList.add("producto");
  const contenidoSimilar = `<a href="../pages/productos.html?id=${id}">
  <img src="../imagenes/productos/${link}"/>
  <div class="product-title">
    <p class="title-1">${nombre}</p>
    <p class="title-2">${precio}</p>
  </div>
  </a>`;
  similares.innerHTML = contenidoSimilar;
  return similares;
};
