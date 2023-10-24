// /* eslint-disable react-hooks/rules-of-hooks */
// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import firebaseConfig from "firebaseConfig.js"
// import { useRouter } from "next/router";

// const Register = () => {
//   // Inicializa Firebase con la configuración
//   const firebaseApp = initializeApp(firebaseConfig);

//   // Obtiene el servicio de autenticación
//   const auth = getAuth(firebaseApp);

//   const handleRegistration = (e) => {
//     e.preventDefault();

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Usuario registrado exitosamente, puedes redirigir o realizar acciones adicionales
//         const router = useRouter();
//         router.push("/"); // Redirige al usuario a la página de inicio
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // Manejo de errores, puedes mostrar un mensaje de error
//       });
//   };

//   return (
//     <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-lg text-center">
//         <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
//         <p className="mt-4 text-gray-500">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
//           nulla eaque error neque ipsa culpa autem, at itaque nostrum!
//         </p>
//       </div>

//       <form
//         onSubmit={handleRegistration}
//         className="mx-auto mb-0 mt-8 max-w-md space-y-4"
//       >
//         <div>
//           <label htmlFor="email" className="sr-only">
//             Email
//           </label>
//           <div className="relative">
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//               placeholder="Enter email"
//             />
//           </div>
//         </div>

//         <div>
//           <label htmlFor="password" className="sr-only">
//             Password
//           </label>
//           <div className="relative">
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//               placeholder="Enter password"
//             />
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <p className="text-sm text-gray-500">
//             No account?
//             <a className="underline" href="/signup">
//               Sign up
//             </a>
//           </p>

//           <button
//             type="submit"
//             className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
//           >
//             Sign in
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Register;
import React from 'react'

const Register = () => {
  return (
    <div>Register</div>
  )
}

export default Register