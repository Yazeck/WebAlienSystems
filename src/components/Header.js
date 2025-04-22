import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';


const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-gradient-to-r from-[#0A192F] to-[#112240] shadow-lg"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-white flex items-center"
        >
          <img 
            src={logo} 
            alt="logo.png" 
            className="mr-2 w-10 h-10 object-contain"  
          />
         
          Alien Systems
        </motion.div>

        <nav>
          <ul className="flex space-x-6 text-white">
            <motion.li 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="hover:text-green-400 transition-colors">
                Inicio
              </Link>
            </motion.li>
            <motion.li 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/cotizar" className="hover:text-green-400 transition-colors">
                Cotizar
              </Link>
            </motion.li>
            <motion.li 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/login" className="hover:text-green-400 transition-colors">
                Iniciar Sesion
              </Link>
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header