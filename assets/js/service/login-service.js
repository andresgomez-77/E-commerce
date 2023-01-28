const usuarioLogin = async () => {
  const normal = await fetch("http://localhost:3000/usuarioAdmin");
  return await normal.json();
};
const crearUsuario = async (nombre, email, password) => {
  return await fetch("http://localhost:3000/usuarioAdmin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: uuid.v4(),
      nombre,
      email,
      password,
    }),
  });
};

export const usuarioService = {
  usuarioLogin,
  crearUsuario,
};
