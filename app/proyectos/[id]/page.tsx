import { notFound } from 'next/navigation';
import { Project, projects } from '../../config/projects';
import ProjectPageClient from './ProjectPageClient';

export const dynamicParams = false;

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString()
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id.toString() === id);
  
  if (!project) {
    notFound();
  }
  return <ProjectPageClient project={project} />;
}