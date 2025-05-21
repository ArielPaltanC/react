// contactoService.js
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import db from "./firebase";

const contactosRef = collection(db, "contactos");

export const obtenerContactos = async () => {
  const snapshot = await getDocs(contactosRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const agregarContacto = async (nombre, direccion) => {
  await addDoc(contactosRef, { nombre, direccion });
};

export const actualizarContacto = async (id, nombre, direccion) => {
  const contactoDoc = doc(db, "contactos", id);
  await updateDoc(contactoDoc, { nombre, direccion });
};

export const eliminarContacto = async (id) => {
  const contactoDoc = doc(db, "contactos", id);
  await deleteDoc(contactoDoc);
};
