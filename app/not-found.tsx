import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-8">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
          Página no encontrada
        </h2>
        <p className="text-gray-400 mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}