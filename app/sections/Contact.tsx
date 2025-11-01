'use client';

import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Crear el mensaje formateado para WhatsApp
    const mensaje = `*Nuevo contacto desde el portafolio*%0A
*Nombre:* ${formData.nombre}%0A
*Email:* ${formData.email}%0A
*Asunto:* ${formData.asunto}%0A
*Mensaje:* ${formData.mensaje}`;

    // Número de WhatsApp (incluye el código de país)
    const telefono = '573113678555';
    
    // Crear el enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${telefono}?text=${mensaje}`;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800" id="contacto">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-6 text-center">Contacto</h2>
          <p className="text-gray-300 text-center mb-8">
            ¿Tienes un proyecto en mente? ¡Me encantaría escucharlo! 
            Completa el formulario y conversemos por WhatsApp sobre tu proyecto.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-white mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-700"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-700"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="asunto" className="block text-white mb-2">
                Asunto
              </label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-700"
                placeholder="Asunto de tu mensaje"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-white mb-2">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-700"
                placeholder="Escribe tu mensaje aquí"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Continuar en WhatsApp</span>
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.85 15.85L14.5 17.2L9.5 12L14.5 6.8L15.85 8.15L12 12L15.85 15.85Z"/>
              </svg>
            </motion.button>
          </form>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Información de Contacto</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2">📱</span>
                  <span>+57 311 3678555</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📍</span>
                  <span>Colombia</span>
                </li>
              </ul>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Redes Sociales</h3>
              <div className="flex flex-col space-y-3">
                <a
                  href="https://github.com/Juandadelover"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">💻</span>
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/tu-perfil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">💼</span>
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}