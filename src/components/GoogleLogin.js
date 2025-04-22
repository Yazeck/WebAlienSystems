import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // Simulated login logic
    if (email === 'admin@aliensystems.com' && password === 'admin123') {
      navigate('/admin');
    } else if (email === 'user@aliensystems.com' && password === 'user123') {
      navigate('/usuario');
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900"
    >
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl w-96 border border-white/20">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Iniciar Sesión
        </h2>
        <div className="space-y-4">
          <input 
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoogleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Iniciar Sesión
          </motion.button>
          <div className="text-center text-white/70">
            Iniciar con Google próximamente
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GoogleLogin;