// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import AnimatedStars from "./AnimatedStars";

// const AnimatedSideMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative h-screen bg-transparent">
//       <button
//         className="fixed top-4 left-4 p-2 bg-white text-gray-800 rounded-md z-10"
//         onClick={toggleMenu}
//       >
//         Well come
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ x: "-100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "-100%" }}
//             transition={{ duration: 0.5 }}
//             className="fixed top-0 left-0 h-full w-60  bg-transparent p-4"
//           >
//             <nav className="flex flex-col gap-4 pt-14">
//               <a href="#" className="text-white hover:text-gray-300">Home</a>
//               <a href="#" className="text-white hover:text-gray-300">About</a>
//               <a href="#" className="text-white hover:text-gray-300">Services</a>
//               <a href="#" className="text-white hover:text-gray-300">Contact</a>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//      <AnimatedStars/>
//     </div>
//   );
// };

// export default AnimatedSideMenu;


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import AnimatedStars from "./AnimatedStars";

// const AnimatedSideMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const menuItems = [
//     { text: "Home", delay: 2 },
//     { text: "About", delay: 2.1 },
//     { text: "Services", delay: 2.2 },
//     { text: "Contact", delay: 2.3 },
//   ];

//   return (
//     <div className="relative h-screen bg-gray-800">
//       <button
//         className="fixed top-4 left-4 p-2 bg-white text-gray-800 rounded-md z-10"
//         onClick={toggleMenu}
//       >
//         Toggle Menu
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ x: "-100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "-100%" }}
//             transition={{ duration: 1.5 }}
//             className="fixed top-0 left-0 h-full w-80 bg-transparent ps-40 p-4"
//           >
//             <nav className="flex flex-col gap-4 pt-16">
//               {menuItems.map((item, index) => (
//                 <motion.a
//                   key={index}
//                   href="#"
//                   className="text-white hover:text-gray-300"
//                   initial={{ x: -20, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: item.delay }}
//                 >
//                   {item.text}
//                 </motion.a>
//               ))}
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <AnimatedStars/>
//     </div>
//   );
// };

// export default AnimatedSideMenu;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import AnimatedStars from "./AnimatedStars";

// const AnimatedSideMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const menuItems = [
//     { text: "Home", delay: 0.2 },
//     { text: "About", delay: 0.4 },
//     { text: "Services", delay: 0.6 },
//     { text: "Contact", delay: 0.8 },
//   ];

//   return (
//     <div className="relative h-screen bg-gray-800">
//       <button
//         className="fixed top-4 left-4 p-2 bg-white text-gray-800 rounded-md z-10"
//         onClick={toggleMenu}
//       >
//         Toggle Menu
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ x: "-100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "-100%" }}
//             transition={{ duration: 1.5 }}
//             className="fixed top-0 left-0 h-full w-80 bg-transparent ps-20 p-4"
//           >
//             <nav className="flex flex-col gap-4 pt-16">
//               {menuItems.map((item, index) => (
//                 <motion.a
//                   key={index}
//                   href="#"
//                   className="text-white hover:text-gray-300"
//                   initial={{ x: -20, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: item.delay }}
//                 >
//                   {item.text.split("").map((letter, letterIndex) => (
//                     <motion.span
//                       key={letterIndex}
//                       initial={{ y: 20, opacity: 0 }}
//                       animate={{ y: 0, opacity: 1 }}
//                       transition={{ delay: item.delay + letterIndex * 1 }}
//                     >
//                       {letter}
//                     </motion.span>
//                   ))}
//                 </motion.a>
//               ))}
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <AnimatedStars />
//     </div>
//   );
// };

// export default AnimatedSideMenu;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import AnimatedStars from "./AnimatedStars";

// const AnimatedSideMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const menuItems = [
//     { text: "Home", delay: 0.2 },
//     { text: "About", delay: 0.4 },
//     { text: "Services", delay: 0.6 },
//     { text: "Contact", delay: 0.8 },
//   ];

//   return (
//     <div className="relative h-screen bg-gray-800">
//       <button
//         className="fixed top-4 left-4 p-2 bg-white text-gray-800 rounded-md z-10"
//         onClick={toggleMenu}
//       >
//         Toggle Menu
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ x: "-100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "-100%" }}
//             transition={{ duration: 1.5 }}
//             className="fixed top-0 left-0 h-full w-80 bg-black ps-20 rounded-r-full border-8 border-white"
//           >
//             <nav className="flex flex-col gap-4 pt-16">
//               {menuItems.map((item, index) => (
//                 <motion.a
//                   key={index}
//                   href="#"
//                   className="text-white hover:text-gray-300"
//                   initial={{ x: -20, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: item.delay }}
//                 >
//                   {item.text.split("").map((letter, letterIndex) => (
//                     <motion.span
//                       key={letterIndex}
//                       initial={{ y: 20, opacity: 0 }}
//                       animate={{ y: 0, opacity: 1 }}
//                       transition={{ delay: item.delay + letterIndex * 1 }}
//                     >
//                       {letter}
//                     </motion.span>
//                   ))}
//                 </motion.a>
//               ))}
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <AnimatedStars />
//     </div>
//   );
// };

// export default AnimatedSideMenu;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedStars from "./AnimatedStars";

const AnimatedSideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { text: "Home", delay: 0.2 },
    { text: "About", delay: 0.4 },
    { text: "Services", delay: 0.6 },
    { text: "Contact", delay: 0.8 },
  ];

  const customTransition = { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <div className="relative h-screen bg-gray-800">
      <button
        className="fixed top-4 left-4 p-2 bg-white text-gray-800 rounded-full z-10"
        onClick={toggleMenu}
      >
     
      </button>
      <motion.div
        className="w-8 h-8 bg-white rounded-full absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer z-10"
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        exit={{ scale: 0 }}
        transition={customTransition}
        onClick={toggleMenu}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={customTransition}
            className="fixed top-0 left-0 h-full w-80  bg-transparent ps-20  sm:border-8 sm:border-white"
          >
            <nav className="flex flex-col gap-4 pt-16">
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-white hover:text-gray-300"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ...customTransition, delay: item.delay }}
                >
                  {item.text.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ ...customTransition, delay: item.delay + letterIndex * 0.1 }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatedStars />
    </div>
  );
};

export default AnimatedSideMenu;

