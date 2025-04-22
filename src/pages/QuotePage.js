import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const QuotePage = () => {
  const [serviceType, setServiceType] = useState('');
  const [complexity, setComplexity] = useState('');
  const [projectScale, setProjectScale] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const services = [
    'Desarrollo Web', 
    'Aplicaciones Móviles', 
    'Software Empresarial'
  ];

  const complexityLevels = [
    'Básico', 
    'Intermedio', 
    'Avanzado'
  ];

  const projectScales = [
    'Pequeño', 
    'Mediano', 
    'Grande'
  ];

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const quoteData = {
      serviceType,
      complexity,
      projectScale,
      email,
      phoneNumber
    };
    
    // Simulating quote generation
    console.log('Quote Generated:', quoteData);
    alert('Cotización generada para Alien Systems');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-4"
    >
      <motion.div 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-xl"
      >
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Cotizador Alien Systems
        </h1>
        
        <form onSubmit={handleQuoteSubmit} className="space-y-6">
          <div>
            <label className="text-white block mb-2">Tipo de Servicio</label>
            <select 
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className={cn(
                "w-full p-3 rounded-lg bg-white/20 text-white border border-white/30",
                "focus:outline-none focus:ring-2 focus:ring-blue-500"
              )}
            >
              <option value="">Selecciona un servicio</option>
              {services.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-white block mb-2">Complejidad</label>
            <select 
              value={complexity}
              onChange={(e) => setComplexity(e.target.value)}
              className={cn(
                "w-full p-3 rounded-lg bg-white/20 text-white border border-white/30",
                "focus:outline-none focus:ring-2 focus:ring-blue-500"
              )}
            >
              <option value="">Selecciona complejidad</option>
              {complexityLevels.map((level) => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-white block mb-2">Escala del Proyecto</label>
            <select 
              value={projectScale}
              onChange={(e) => setProjectScale(e.target.value)}
              className={cn(
                "w-full p-3 rounded-lg bg-white/20 text-white border border-white/30",
                "focus:outline-none focus:ring-2 focus:ring-blue-500"
              )}
            >
              <option value="">Selecciona escala</option>
              {projectScales.map((scale) => (
                <option key={scale} value={scale}>{scale}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-white block mb-2">Correo Electrónico</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@empresa.com"
              className={cn(
                "w-full p-3 rounded-lg bg-white/20 text-white border border-white/30",
                "focus:outline-none focus:ring-2 focus:ring-blue-500"
              )}
            />
          </div>

          <div>
            <label className="text-white block mb-2">Teléfono</label>
            <input 
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+52 (55) 1234 5678"
              className={cn(
                "w-full p-3 rounded-lg bg-white/20 text-white border border-white/30",
                "focus:outline-none focus:ring-2 focus:ring-blue-500"
              )}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className={cn(
              "w-full py-4 bg-blue-600 text-white rounded-lg font-bold",
              "hover:bg-blue-700 transition-colors duration-300",
              "flex items-center justify-center space-x-2"
            )}
          >
            Generar Cotización
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default QuotePage;