import { useEffect, useState } from "react";
import {
  obtenerContactos,
  agregarContacto,
  actualizarContacto,
  eliminarContacto
} from "./contactoService";

function HolaUps({ texto }) {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [lista, setLista] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [idEdicion, setIdEdicion] = useState(null);

  useEffect(() => {
    cargarContactos();
  }, []);

  const cargarContactos = async () => {
    const datos = await obtenerContactos();
    setLista(datos);
  };

  const guardar = async () => {
    if (modoEdicion && idEdicion) {
      await actualizarContacto(idEdicion, nombre, direccion);
    } else {
      await agregarContacto(nombre, direccion);
    }
    setNombre("");
    setDireccion("");
    setModoEdicion(false);
    setIdEdicion(null);
    cargarContactos();
  };

  const editar = (contacto) => {
    setNombre(contacto.nombre);
    setDireccion(contacto.direccion);
    setModoEdicion(true);
    setIdEdicion(contacto.id);
  };

  const eliminar = async (id) => {
    if (window.confirm("¿Eliminar este contacto?")) {
      await eliminarContacto(id);
      cargarContactos();
    }
  };

  return (
    <div>
      <h1>{texto} - Ecuador</h1>
      <form>
        <label>Nombre</label>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          type="text"
        />
        <label>Dirección</label>
        <input
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          type="text"
        />
        <button type="button" onClick={guardar}>
          {modoEdicion ? "Actualizar" : "Guardar"}
        </button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.direccion}</td>
              <td>
                <button onClick={() => editar(item)}>Editar</button>
                <button onClick={() => eliminar(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HolaUps;

