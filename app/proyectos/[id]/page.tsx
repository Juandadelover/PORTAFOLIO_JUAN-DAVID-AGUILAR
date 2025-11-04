import { notFound } from 'next/navigation';
import { Project, projects } from '../../config/projects';
import ProjectPageClient from './ProjectPageClient';

export const dynamicParams = false;

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString()
  }));
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id.toString() === params.id);
  
  if (!project) {
    notFound();
  }
  return <ProjectPageClient project={project} />;
}