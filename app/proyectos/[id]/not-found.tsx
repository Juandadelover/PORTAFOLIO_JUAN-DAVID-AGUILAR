import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-6xl sm:text-7xl font-black text-white mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Proyecto no encontrado
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Lo sentimos, el proyecto que estás buscando no existe o ha sido movido.
        </p>
        
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium rounded-full transition-all duration-300 hover:scale-105"
        >
          <HiArrowLeft className="w-5 h-5" />
          Volver a Proyectos
        </Link>
      </div>
    </div>
    );
  }