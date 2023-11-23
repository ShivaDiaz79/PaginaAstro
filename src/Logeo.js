import React from "react";
import { app } from "./fb";

const Logeo = (props) => {
  const [isRegistrando, setIsRegistrando] = React.useState(false);
  const [error, setError] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [emailForReset, setEmailForReset] = React.useState("");
  const [resetEmailSent, setResetEmailSent] = React.useState(false);

  const handleSignInError = (errorCode) => {
    if (errorCode === "auth/invalid-login-credentials") {
      setError("La contraseña es incorrecta. Verifica e intenta nuevamente.");
    } else {
      setError("Error al iniciar sesión. Inténtalo de nuevo más tarde.");
    }
  };

  const handleResetPassword = (email) => {
    app
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setResetEmailSent(true);
        setError("");
      })
      .catch((error) => {
        setError(
          "Error al enviar el correo para restablecer la contraseña: " +
            error.message
        );
      });
  };

  const crearUsuario = (correo, password) => {
    app
      .auth()
      .createUserWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("Usuario creado:", usuarioFirebase);
        props.setUsuario(usuarioFirebase);
      })
      .catch((error) => {
        setError("Error al crear usuario: " + error.message);
      });
  };

  const iniciarSesion = (correo, password) => {
    app
      .auth()
      .signInWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("Sesión iniciada con", usuarioFirebase.user);
        props.setUsuario(usuarioFirebase);
      })
      .catch((error) => {
        handleSignInError(error.code);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const correo = e.target.emailfield.value;
    const password = e.target.passwordfield.value;

    if (isRegistrando) {
      crearUsuario(correo, password);
    } else {
      iniciarSesion(correo, password);
    }
  };

  const handleForgotPassword = () => {
    if (emailForReset.trim() !== "") {
      handleResetPassword(emailForReset);
    } else {
      setError("Ingresa un correo electrónico para restablecer la contraseña.");
    }
  };

  return (
    <div className="bg-blue-300 h flex flex-col justify-center items-center p-6">
      <h1 className="text-2xl mb-4">
        {isRegistrando ? "Regístrate" : "Inicia sesión"}
      </h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {resetEmailSent ? (
        <p>Correo para restablecer contraseña enviado</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <label htmlFor="emailfield" className="mb-2">
            Correo
          </label>
          <input
            type="email"
            id="emailfield"
            className="mb-2 p-2 border rounded"
          />
          <label htmlFor="passwordfield" className="mb-2">
            Contraseña
          </label>
          <div className="flex items-center mb-4">
            <input
              type={showPassword ? "text" : "password"}
              id="passwordfield"
              className="mb-2 p-2 border rounded"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="ml-2 px-2 py-1 bg-blue-500 text-white rounded"
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>
          {!isRegistrando && (
            <div  className="flex flex-col items-center">
              <button
                onClick={() => setIsRegistrando(true)}
                className="mb-2 bg-blue-500 text-white py-1 px-4 rounded"
              >
                Registrarse
              </button>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="mb-2 text-blue-500"
              >
                Olvidé mi contraseña
              </button>
              {resetEmailSent && (
                <div className="flex flex-col items-center">
                  <input
                    type="email"
                    value={emailForReset}
                    onChange={(e) => setEmailForReset(e.target.value)}
                    placeholder="Ingresa tu correo para restablecer la contraseña"
                    className="mb-2 p-2 border rounded"
                  />
                  <button
                    onClick={handleForgotPassword}
                    className="mb-2 bg-blue-500 text-white py-1 px-4 rounded"
                  >
                    Restablecer
                  </button>
                </div>
              )}
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white py-1 px-4 rounded"
          >
            {isRegistrando ? "Regístrate" : "Inicia sesión"}
          </button>
        </form>
      )}
      <button
        onClick={() => setIsRegistrando(!isRegistrando)}
        className="text-blue-500 mt-4"
      >
        {isRegistrando
          ? "¿Ya tienes cuenta? ¡Inicia sesión"
          : "¿Tienes cuenta? ¡Regístrate gratis!"}
      </button>
    </div>
  );
};
export default Logeo;
