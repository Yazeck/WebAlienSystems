import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Chart } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState('cotizaciones');

  const projectData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [{
      label: 'Proyectos Completados',
      data: [3, 5, 7, 4, 6, 8],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.4
    }]
  };

  const services = [
    { name: 'Desarrollo Web', color: 'bg-blue-500' },
    { name: 'Apps Móviles', color: 'bg-green-500' },
    { name: 'Software Personalizado', color: 'bg-purple-500' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-8 bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Panel de Usuario</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 p-6 rounded-xl backdrop-blur-md"
          >
            <h2 className="text-2xl text-white mb-4">Mis Cotizaciones</h2>
            <div className="space-y-2">
              {[1, 2, 3].map((cot, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 p-3 rounded-lg hover:bg-white/10 transition"
                >
                  Cotización #{index + 1}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 p-6 rounded-xl backdrop-blur-md"
          >
            <h2 className="text-2xl text-white mb-4">Servicios</h2>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`${service.color} p-3 rounded-lg text-white`}
                >
                  {service.name}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 p-6 rounded-xl backdrop-blur-md"
          >
            <h2 className="text-2xl text-white mb-4">Proyectos</h2>
            <Line data={projectData} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserDashboard;