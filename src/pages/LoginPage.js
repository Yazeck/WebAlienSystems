import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUserLogin = () => {
    if (email === 'usuario@aliensystems.com' && password === 'usuario123') {
      navigate('/usuario');
    }
  };

  const handleAdminLogin = () => {
    if (email === 'admin@aliensystems.com' && password === 'admin123') {
      navigate('/admin');
    }
  };

  const handleGoogleLogin = () => {
    // Google login placeholder
    alert('Próximamente: Inicio de sesión con Google');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-96"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Iniciar Sesión
        </h2>
        
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <div className="space-y-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleUserLogin}
              className="w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Iniciar como Usuario
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAdminLogin}
              className="w-full bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 transition-colors"
            >
              Iniciar como Administrador
            </motion.button>
            
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/30"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white/10 text-white/70">o</span>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGoogleLogin}
              className="w-full bg-red-600 text-white p-3 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path d="M20.283 10.356h-8.327v3.451h4.792c-0.863 2.105-2.869 3.628-5.311 3.628-3.14 0-5.689-2.549-5.689-5.688 0-3.14 2.549-5.689 5.689-5.689 1.402 0 2.682 0.507 3.706 1.35l2.581-2.581c-1.836-1.628-4.224-2.619-6.938-2.619-5.813 0-10.528 4.715-10.528 10.527s4.715 10.527 10.528 10.527c5.301 0 9.717-3.908 10.405-9h-3.44z"/>
              </svg>
              Iniciar con Google
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;