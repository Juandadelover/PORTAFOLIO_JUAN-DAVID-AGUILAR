import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Project, projects } from '../../config/projects';
import ProjectPageClient from './ProjectPageClient';
import Breadcrumb from '../../components/Breadcrumb';

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

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": project.title,
      "description": project.description,
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": project.tech.includes('Flutter') ? 'Android, iOS' : 'Web',
      "author": {
        "@type": "Person",
        "name": "Juan David Aguilar"
      },
      "image": project.images.map(img => `https://eljuandadeloper.vercel.app${img.url}`),
      "url": `https://eljuandadeloper.vercel.app/proyectos/${project.id}`,
      "datePublished": "2024-01-01", // Ajustar fecha real si disponible
      "programmingLanguage": project.tech.join(', '),
      "offers": project.demo ? {
        "@type": "Offer",
        "url": project.demo
      } : undefined
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://eljuandadeloper.vercel.app"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Proyectos",
          "item": "https://eljuandadeloper.vercel.app#proyectos"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": project.title,
          "item": `https://eljuandadeloper.vercel.app/proyectos/${project.id}`
        }
      ]
    }
  ];

  return (
    <>
      {jsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { label: "Proyectos", href: "/#proyectos" },
          { label: project.title }
        ]} />
      </div>
      <ProjectPageClient project={project} />
    </>
  );
}