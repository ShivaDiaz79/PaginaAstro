import React, { useEffect, useState } from "react";
import Ubicacion from "./components/Ubicacion";
import { db } from "../../../firebaseConfig";
import { collection, doc, setDoc, getDocs, query } from "firebase/firestore";
import Layout from "../../../components/Layout";

const Contacto = () => {
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    const messagesRef = collection(db, "messages");
    const q = query(collection(db, "messages"));
    const todos = await getDocs(q);
    const todosDocumentos = todos.docs.map((el) => el.data());
    console.log(todosDocumentos);
    setMensajes(todosDocumentos);
  };

  return (
    <Layout>
      <div className="bg-blue-600">
        <Ubicacion />

        {mensajes.length > 0 && (
          <div className="bg-pink-700">
            {mensajes.map((el, index) => {
              return (
                <div key={index}>
                  <span>{el.title}</span>
                  <span>{el.text}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
      
    </Layout>
  );
};

export default Contacto;
