'use client';

import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiChatAlt2, HiCheckCircle } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    asunto: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Crear el mensaje formateado para WhatsApp
    const mensaje = `*Nuevo contacto desde el portafolio*%0A%0A*Nombre:* ${formData.nombre}%0A*Asunto:* ${formData.asunto}%0A*Mensaje:* ${formData.mensaje}`;

    // Número de WhatsApp (incluye el código de país)
    const telefono = '573113678555';
    
    // Crear el enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${telefono}?text=${mensaje}`;
    
    // Abrir WhatsApp en una nueva pestaña
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: HiPhone, label: 'Teléfono', value: '+57 311 3678555', href: 'tel:+573113678555' },
    { icon: HiMail, label: 'Email', value: 'aquilarjuan123@gmail.com', href: 'mailto:aquilarjuan123@gmail.com' },
    { icon: HiLocationMarker, label: 'Ubicación', value: 'Colombia', href: null },
  ];

  const socialLinks = [
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Juandadelover', color: 'hover:text-gray-400' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/tu-perfil', color: 'hover:text-blue-400' },
    { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/573113678555', color: 'hover:text-green-400' },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" id="contacto">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-10 w-96 h-96 bg-green-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium mb-6"
          >
            <HiChatAlt2 className="w-4 h-4" />
            Contacto
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Trabajemos{' '}
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-transparent bg-clip-text">
              juntos
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            ¿Tienes un proyecto en mente? Estoy disponible para nuevas oportunidades.
            Conversemos sobre cómo puedo ayudarte a alcanzar tus objetivos.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 dark:border-gray-600 transition-all"
                        placeholder="Juan Pérez"
                      />
                    </div>
                    <div>
                      <label htmlFor="asunto" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Asunto
                      </label>
                      <input
                        type="text"
                        id="asunto"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 dark:border-gray-600 transition-all"
                        placeholder="Desarrollo de aplicación móvil"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 dark:border-gray-600 transition-all resize-none"
                      placeholder="Cuéntame sobre tu proyecto..."
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <FaWhatsapp className="w-5 h-5" />
                        <span>Continuar en WhatsApp</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Info de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all"
                    >
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{info.label}</p>
                        <p className="text-gray-900 dark:text-white font-semibold">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{info.label}</p>
                        <p className="text-gray-900 dark:text-white font-semibold">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <HiCheckCircle className="w-5 h-5 text-white" />
                  </span>
                  Sígueme en redes
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 bg-gray-100 dark:bg-gray-700 rounded-xl text-gray-600 dark:text-gray-300 ${social.color} transition-all shadow-md hover:shadow-lg`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl border border-green-200 dark:border-green-800"
            >
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Disponible para proyectos</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Respondo en menos de 24 horas</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}