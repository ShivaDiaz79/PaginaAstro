import React, { useState } from 'react';

const ContactWhatsapp = () => {
  const [userName, setUserName] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleWhatsappClick = () => {
    toggleInput();
  };

  const handleStartChat = () => {
    const message = `Hola astro estudio, mi nombre es ${userName}. Estoy visitando tu sitio. Quisiera ser atendido por un profesional`;
    const encodedMessage = encodeURIComponent(message);

    // Abre WhatsApp en una nueva pestaña
    window.open(`https://wa.me/+59133931210?text=${encodedMessage}`, '_blank');
  };

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="fixed bottom-6 right-4 text-black p-5 rounded-full cursor-pointer z-30">
      {/* Icono de WhatsApp */}
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        className="mr-2"
        height="40"
        width="40"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleWhatsappClick}
      >
        {/* Inserta aquí el código SVG del icono de WhatsApp */}
        <path
          d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.920l-.240-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
          fill="#25D366"
        ></path>
      </svg>

      {showInput ? (
        <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] transform duration-300 ease-in-out hover:scale-110  rounded-lg p-4 absolute bottom-16 right-4 bordeer border-pink-700 border-2">
          {/* Logo u otra imagen */}
          <img src="https://res.cloudinary.com/di1v23yy0/image/upload/v1689032614/Isologo-Astro-Black_gysrkc.png" alt="Logo" className="w-20 h-16  mx-auto mb-4 animate-pulse" />

          {/* Input para ingresar el nombre */}
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-40 h-28 p-2 border border-gray-300 rounded bg-focus:outline-none bg-gradient-to-r from-green-300  via-blue-500 to-purple-600 text-black focus:border-indigo-500"
          />

          <button onClick={handleStartChat} className="w-full mt-4 bg-indigo-500 text-black p-2 rounded hover:bg-indigo-600 focus:outline-none">
            Iniciar Conversación
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ContactWhatsapp;



