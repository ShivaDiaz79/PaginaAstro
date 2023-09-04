import React, { useState } from 'react';

const Calculator = () => {
  const [serviceType, setServiceType] = useState('web');
  const [subOption, setSubOption] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculatePrice = () => {
    let basePrice = 0;

    if (serviceType === 'web') {
      if (subOption === 'basic') {
        basePrice = 500;
      } else if (subOption === 'standard') {
        basePrice = 800;
      } else if (subOption === 'premium') {
        basePrice = 1200;
      }
    } else if (serviceType === 'mobile') {
      if (subOption === 'basic') {
        basePrice = 800;
      } else if (subOption === 'standard') {
        basePrice = 1200;
      } else if (subOption === 'premium') {
        basePrice = 1600;
      }
    } else if (serviceType === 'design') {
      if (subOption === 'basic') {
        basePrice = 300;
      } else if (subOption === 'standard') {
        basePrice = 500;
      } else if (subOption === 'premium') {
        basePrice = 700;
      }
    }

    const finalPrice = basePrice * quantity;
    setTotalPrice(finalPrice);
  };

  return (
    <div className="bg-white p-8 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Simulador de Precios</h2>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Tipo de Servicio:</label>
        <select
          className="w-full p-2 border rounded-md"
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
        >
          <option value="web">Desarrollo Web</option>
          <option value="mobile">Desarrollo Mobile</option>
          <option value="design">Diseño Gráfico</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Opciones:</label>
        <select
          className="w-full p-2 border rounded-md"
          value={subOption}
          onChange={(e) => setSubOption(e.target.value)}
        >
          <option value="basic">Básico</option>
          <option value="standard">Estándar</option>
          <option value="premium">Premium</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Cantidad:</label>
        <input
          type="number"
          className="w-full p-2 border rounded-md"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={calculatePrice}>
        Calcular Precio
      </button>
      {totalPrice > 0 && (
        <div className="mt-4">
          <p className="text-lg font-semibold">Total: ${totalPrice}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
