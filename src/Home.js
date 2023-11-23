import { useState, useEffect } from "react";
import { app } from "./fb";
import Layout from "../components/Layout";

const Home = () => {
  const [isSesionIniciada, setIsSesionIniciada] = useState(true);
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Verificar si hay un usuario autenticado
    const usuarioActual = app.auth().currentUser;
    if (usuarioActual) {
      setUsuario(usuarioActual);
    } else {
      setIsSesionIniciada(false);
    }
  }, []);

  const cerrarSesion = () => {
    app.auth().signOut();
    setIsSesionIniciada(false);
  };

  const enviarMensaje = (mensaje) => {
    if (mensaje && mensaje.trim() !== "") {
      if (usuario) {
        // Agregar el mensaje con el correo del usuario a la colección 'Mensajes'
        app
          .firestore()
          .collection("Mensajes")
          .add({
            mensaje,
            correo: usuario.email, // Agregar el correo del usuario al documento
          })
          .then(() => {
            console.log("Mensaje enviado correctamente");
          })
          .catch((error) => {
            console.error("Error al enviar el mensaje:", error);
          });
      }
    } else {
      console.error("El mensaje está vacío o indefinido");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const mensaje = e.target.message.value;
    enviarMensaje(mensaje);
  };

  return (
    <Layout>
      <div
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/di1v23yy0/image/upload/v1694218813/doble-exposicion-mapa-mundo-digital-abstracto-conexiones-escritura-mano-cuaderno-segundo-plano-investigacion-portatiles-concepto-estrategia_258654-22290_scqape.avif')`,
        }}
      >
        <div className="bg-white bg-opacity-80 p-8 rounded-lg">
          <h1 className="text-3xl mb-4">¡Bienvenido! Sesión iniciada</h1>
          {isSesionIniciada && (
            <button
              onClick={cerrarSesion}
              className="bg-red-500 text-white px-4 py-2 rounded-md mb-4"
            >
              Cerrar Sesión
            </button>
          )}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form id="formulario-contacto"
            onSubmit={onSubmit}
            className="flex flex-col items-center"
            
          >
            <div className="mb-4 w-80">
              <label htmlFor="message" className="text-lg mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
