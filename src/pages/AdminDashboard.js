import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Chart } from 'chart.js/auto';
import { Pie, Bar } from 'react-chartjs-2';

const AdminDashboard = () => {
  const [quotes, setQuotes] = useState([
    { id: 1, service: 'Web Development', status: 'Pending', price: 5000 },
    { id: 2, service: 'Mobile App', status: 'Approved', price: 8000 },
    { id: 3, service: 'Software Development', status: 'In Progress', price: 12000 }
  ]);

  const servicesData = {
    labels: ['Web Development', 'Mobile Apps', 'Software Solutions'],
    datasets: [{
      data: [40, 30, 30],
      backgroundColor: [
        'rgba(54, 162, 235, 0.6)', 
        'rgba(255, 99, 132, 0.6)', 
        'rgba(75, 192, 192, 0.6)'
      ]
    }]
  };

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Monthly Revenue',
      data: [15000, 22000, 18000, 30000, 25000],
      backgroundColor: 'rgba(54, 162, 235, 0.6)'
    }]
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-8 bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900 text-white"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Panel de Administración</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-4">Distribución de Servicios</h2>
            <Pie data={servicesData} />
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-4">Ingresos Mensuales</h2>
            <Bar data={revenueData} />
          </div>
        </div>

        <div className="mt-8 bg-gray-800 rounded-xl p-6 shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4">Cotizaciones Recientes</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-3">ID</th>
                <th className="p-3">Servicio</th>
                <th className="p-3">Estado</th>
                <th className="p-3">Precio</th>
              </tr>
            </thead>
            <tbody>
              {quotes.map(quote => (
                <tr key={quote.id} className="border-b border-gray-700">
                  <td className="p-3">{quote.id}</td>
                  <td className="p-3">{quote.service}</td>
                  <td className="p-3">{quote.status}</td>
                  <td className="p-3">${quote.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;