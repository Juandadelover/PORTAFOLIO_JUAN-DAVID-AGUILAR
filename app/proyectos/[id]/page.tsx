import { notFound } from 'next/navigation';
import { projects } from '../../config/projects';
import ProjectPageClient from './ProjectPageClient';

// Esta función es requerida para exportación estática
export async function generateStaticParams() {
  return projects.map((_, index) => ({
    id: index.toString()
  }));
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id);
  
  // Validación de ID
  if (isNaN(projectId) || projectId < 0 || projectId >= projects.length) {
    notFound();
  }

  const project = projects[projectId];
  return <ProjectPageClient project={project} />;
}