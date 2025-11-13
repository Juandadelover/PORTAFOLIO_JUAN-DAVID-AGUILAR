import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Project, projects } from '../../config/projects';
import ProjectPageClient from './ProjectPageClient';

export const dynamicParams = false;

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString()
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return {
      title: 'Proyecto no encontrado | Juan David Aguilar',
      description: 'El proyecto solicitado no existe.',
    };
  }

  const imageUrl = project.images[0]?.url || '/img/FotoJuanda.webp';

  return {
    title: `${project.title} | Proyecto de Desarrollo - Juan David Aguilar`,
    description: project.description,
    keywords: [...project.tech, 'desarrollo web', 'proyecto', 'portafolio', 'desarrollador'],
    openGraph: {
      title: `${project.title} | Proyecto de Desarrollo`,
      description: project.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Proyecto de Desarrollo`,
      description: project.description,
      images: [imageUrl],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    notFound();
  }
  return <ProjectPageClient project={project} />;
}