import { projects } from '../../config/projects';
import ProjectPageClient from './ProjectPageClient';

// Esta función es requerida para exportación estática
export async function generateStaticParams() {
  return projects.map((_, index) => ({
    id: index.toString()
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects[parseInt(id)];

  if (!project) {
    return null;
  }

  return <ProjectPageClient project={project} />;
}