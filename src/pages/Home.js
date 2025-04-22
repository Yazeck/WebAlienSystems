import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: 'Desarrollo Web',
      description: 'Creamos sitios web modernos y funcionales',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-blue-500">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 21h4m-2-18v18m7-11H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2z"/>
        </svg>
      )
    },
    {
      title: 'Desarrollo de Apps',
      description: 'Aplicaciones móviles innovadoras',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-green-500">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
        </svg>
      )
    },
    {
      title: 'Consultoría Tech',
      description: 'Asesoramiento tecnológico especializado',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-purple-500">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 4.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Alien Systems
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transformamos ideas en soluciones tecnológicas de vanguardia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-16"
        >
          <Link 
            to="/cotizar"
            className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-full text-lg font-bold hover:scale-105 transition-transform"
          >
            Solicitar Cotización
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;