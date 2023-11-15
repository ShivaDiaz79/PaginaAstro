import React, { useState } from 'react';
import MapBox from './MapBox';

const Ubicacion = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enviar los datos a Firebase)
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Limpiar el formulario
        setFormData({
          email: '',
          message: '',
        });

        alert('Mensaje enviado con éxito.'); // Puedes mostrar una alerta o mensaje de éxito aquí
      } else {
        alert('Error al enviar el mensaje.'); // Manejar errores de envío
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el mensaje.');
    }
  };

  const location = {
    lat: -17.754694836827614,
    lng: -63.19753825664521,
    zoom: 15,
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex flex-col lg:flex-row">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Astro Estudio S.R.L.
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Avenida Cuarto Anillo, Torre Platinum 2 Business Center, Piso 21 Oficina 2
            </p>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Enviar
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              Escribenos y te responderemos en la brevedad.
            </p>
          </div>
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg p-8 mt-10 md:mt-0">
            <MapBox lat={location.lat} lng={location.lng} zoom={location.zoom} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ubicacion;



