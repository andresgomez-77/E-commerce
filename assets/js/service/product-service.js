const secciones = async () => {
  const normal = await fetch("http://localhost:3000/secciones");
  return await normal.json();
};

const newProduct = async (link, categoria, nombre, precio, descripcion) => {
  try {
    return await fetch("http://localhost:3000/secciones", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuid.v4(),
        link,
        categoria,  
        nombre,
        precio,
        descripcion,
      }),
    });
  } catch (error) {
    alert(error);
  }
};

const productos = async (id) => {
  const respuesta = await fetch(`http://localhost:3000/secciones/${id}`);
  return await respuesta.json();
};
const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/secciones/${id}`, {
    method: "DELETE",
  });
};
const editarProducto = async (id) => {
  const result = await fetch(`http://localhost:3000/secciones/${id}`);
  return await result.json();
};

const reconstruirProducto = async (
  link,
  categoria,
  nombre,
  precio,
  descripcion,
  id
) => {
  try {
    const result = await fetch(`http://localhost:3000/secciones/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, precio, categoria, link, descripcion }),
    });
    return console.log(result);
  } catch (err) {
    console.log(err);
  }
};
export const productoServicios = {
  secciones,
  productos,
  newProduct,
  eliminarProducto,
  editarProducto,
  reconstruirProducto,
};
