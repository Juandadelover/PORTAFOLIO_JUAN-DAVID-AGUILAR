import { projects } from '../../config/projects';

export async function generateStaticParams() {
  return projects.map((_, index) => ({
    id: index.toString()
  }));
}

export const dynamicParams = false; // Muestra 404 para rutas no generadas estáticamente