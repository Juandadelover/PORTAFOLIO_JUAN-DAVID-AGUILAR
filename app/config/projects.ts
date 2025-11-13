export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  images: {
    url: string;
    caption?: string;
  }[];
  tech: string[];
  demo?: string;
  featured?: boolean;
  category?: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 0,
    title: "La Felicidá - Plataforma E-commerce de Café Premium",
    description: "Transformamos la experiencia de compra de café premium en una aventura digital inmersiva, conectando productores locales con amantes del café en todo el mundo.",
    longDescription: "La Felicidá es más que una tienda en línea; es una ventana digital al mundo del café premium y la cultura local. Desarrollamos una plataforma e-commerce que no solo vende productos, sino que cuenta historias, crea conexiones y genera experiencias memorables. Desde la selección del café hasta la reserva de experiencias turísticas, cada aspecto fue diseñado pensando en la conversión y el engagement del usuario.\n\nLa plataforma integra ventas de café premium, productos artesanales y experiencias turísticas en una interfaz intuitiva y cautivadora. El diseño responsive, las animaciones fluidas y la carga optimizada garantizan una experiencia de usuario excepcional en cualquier dispositivo.",
    images: [
      {
        url: "/img/Proyecto 1/lafelicidaHome.png",
        caption: "Landing page moderna y atractiva que transmite la esencia de tu marca"
      },
      {
        url: "/img/Proyecto 1/lafelicidaCafe.png",
        caption: "Catálogo de productos que destaca la calidad de tu oferta"
      },
      {
        url: "/img/Proyecto 1/lafelicidaDetalleCafe.png",
        caption: "Detalles de producto que generan confianza y aumentan conversiones"
      },
      {
        url: "/img/Proyecto 1/lafelicidaCarrito.png",
        caption: "Carrito de compras optimizado para maximizar ventas"
      },
      {
        url: "/img/Proyecto 1/lafelicidaServicios.webp",
        caption: "Presentación profesional de servicios y experiencias"
      },
      {
        url: "/img/Proyecto 1/lafelicidaAgenteIA.png",
        caption: "Asistente virtual con IA para atención 24/7"
      }
    ],
    tech: ["React", "TypeScript", "Next.js", "TailwindCSS", "Framer Motion", "i18n"],
    demo: "https://cafefelicida.vercel.app",
    featured: true,
    category: "E-commerce",
    gradient: "from-amber-600 to-yellow-600"
  },
  {
    id: 1,
    title: "E-commerce App",
    description: "Plataforma de comercio electrónico con carrito de compras, pagos en línea y sistema de inventario en tiempo real.",
    longDescription: "Plataforma completa de e-commerce con gestión de productos, carrito de compras, pasarela de pagos integrada, sistema de inventario automatizado y panel de administración.",
    images: [
      {
        url: "/img/Proyecto 1/lafelicidaHome.png",
        caption: "Catálogo de productos e-commerce desarrollado con Flutter y Supabase"
      },
      {
        url: "/img/Proyecto 1/lafelicidaCafe.png",
        caption: "Carrito de compras integrado en aplicación móvil Flutter"
      },
      {
        url: "/img/Proyecto 1/lafelicidaDetalleCafe.png",
        caption: "Proceso de pago seguro con integración Stripe en app Flutter"
      },
      {
        url: "/img/Proyecto 1/lafelicidaCarrito.png",
        caption: "Panel de gestión de inventario en tiempo real con Supabase"
      }
    ],
    tech: ["Flutter", "Supabase", "Stripe", "REST API"],
    demo: "https://demo-proyecto2.com",
    featured: true,
    category: "E-commerce",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    id: 2,
    title: "Chat en Tiempo Real",
    description: "Aplicación de mensajería instantánea con funciones de chat grupal, mensajes directos y compartición de archivos.",
    longDescription: "App de mensajería con chat en tiempo real, grupos, llamadas de voz, compartición de multimedia, cifrado end-to-end y sincronización multiplataforma.",
    images: [
      {
        url: "/img/Proyecto 1/lafelicidaHome.png",
        caption: "Interfaz principal de chat"
      },
      {
        url: "/img/Proyecto 1/lafelicidaCafe.png",
        caption: "Gestión de grupos y canales"
      },
      {
        url: "/img/Proyecto 1/lafelicidaDetalleCafe.png",
        caption: "Llamadas de voz y video"
      },
      {
        url: "/img/Proyecto 1/lafelicidaAgenteIA.png",
        caption: "Compartición de archivos multimedia"
      }
    ],
    tech: ["Flutter", "Supabase Realtime", "Storage", "WebRTC"],
    demo: "https://demo-proyecto3.com",
    featured: false,
    category: "Social App",
    gradient: "from-green-600 to-teal-600"
  }
]