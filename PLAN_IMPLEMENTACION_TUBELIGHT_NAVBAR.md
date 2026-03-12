# 🚀 Plan de Implementación: Tubelight Navbar

## 📋 Descripción General

Migración completa del navbar actual a un nuevo componente `tubelight-navbar` con efectos de iluminación animados, manteniendo las secciones existentes (Inicio, Sobre Mí, Proyectos, Contacto) y la integración completa con el sistema de temas dark/light. Implementación modular por fases con validación en documentación oficial.

---

## 🎯 FASE 1: Instalación de Dependencias y Preparación del Entorno

### 📚 Documentación a Consultar:

- [npm - lucide-react](https://www.npmjs.com/package/lucide-react)
- [Lucide React Official Docs](https://lucide.dev/guide/packages/lucide-react)
- [clsx Documentation](https://github.com/lukeed/clsx)
- [Tailwind Merge Documentation](https://github.com/dcastil/tailwind-merge)

### 🔧 Comandos a Ejecutar:

```bash
# Instalar dependencias necesarias
npm install lucide-react clsx tailwind-merge

# Verificar instalación
npm list lucide-react clsx tailwind-merge
```

### 📦 Dependencias Actuales vs Requeridas:

**✅ Ya Instaladas:**

- `framer-motion: ^12.23.24`
- `next: ^16.0.1`
- `react: ^19.2.0`
- `typescript: ^5.0.0`

**❌ Faltantes (a instalar):**

- `lucide-react`: Para iconos SVG optimizados
- `clsx`: Para condicionales de clases CSS
- `tailwind-merge`: Para merge inteligente de clases Tailwind

### ✅ Resultados Esperados:

- ✅ Dependencias instaladas correctamente
- ✅ Sin conflictos en package.json
- ✅ TypeScript types disponibles para lucide-react

---

## 🛠️ FASE 2: Creación de Utilidad cn() y Setup Base

### 📚 Documentación a Consultar:

- [Tailwind Merge - Usage](https://github.com/dcastil/tailwind-merge#usage)
- [clsx - API Reference](https://github.com/lukeed/clsx#api)
- [TypeScript Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

### 📁 Archivo a Crear: `app/lib/utils.ts`

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases CSS de manera inteligente
 * - clsx: maneja condicionales y arrays
 * - twMerge: resuelve conflictos entre clases de Tailwind
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 🔍 Validación del Path Alias:

**Verificar en `tsconfig.json`:**

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./app/*"]
    }
  }
}
```

### ✅ Resultados Esperados:

- ✅ Archivo `app/lib/utils.ts` creado
- ✅ Función `cn()` disponible en `@/lib/utils`
- ✅ TypeScript reconoce los tipos correctamente
- ✅ Path alias `@/lib/utils` funciona

---

## 🎨 FASE 3: Implementación del Componente Base Tubelight Navbar

### 📚 Documentación a Consultar:

- [Framer Motion - Layout Animations](https://www.framer.com/motion/layout-animations/)
- [Lucide Icons - Icon Catalog](https://lucide.dev/icons/)
- [Next.js - Link Component](https://nextjs.org/docs/app/api-reference/components/link)
- [React Hooks - useEffect](https://react.dev/reference/react/useEffect)

### 📁 Archivo a Crear: `app/components/ui/tubelight-navbar.tsx`

```tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
```

### 🎨 Análisis del Componente:

**Estructura del Estado:**

```tsx
const [activeTab, setActiveTab] = useState(items[0].name); // Tab activo
const [isMobile, setIsMobile] = useState(false); // Detección mobile
```

**Responsive Design:**

```tsx
// Desktop: fixed top-0 sm:pt-6 (navbar arriba)
// Mobile: fixed bottom-0 mb-6 (navbar abajo)
"fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6";
```

**Efecto Tubelight:**

```tsx
// Layout ID "lamp" permite animación suave entre tabs
<motion.div layoutId="lamp" ...>
  // Efecto de "tubo" de luz en la parte superior
  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
    // Múltiples capas de blur para efecto de luminosidad
    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
  </div>
</motion.div>
```

### ✅ Resultados Esperados:

- ✅ Componente `NavBar` creado en `app/components/ui/tubelight-navbar.tsx`
- ✅ TypeScript interfaces correctas
- ✅ Importaciones funcionando correctamente
- ✅ Efecto tubelight renderizando

---

## 🔗 FASE 4: Configuración de Navegación y Items

### 📚 Documentación a Consultar:

- [Lucide Icons - Navigation Icons](https://lucide.dev/icons/home)
- [Next.js - Hash Links](https://nextjs.org/docs/app/api-reference/components/link#hash-links)
- [MDN - URL Fragments](https://developer.mozilla.org/en-US/docs/Web/API/URL/hash)

### 📁 Archivo a Crear: `app/components/ui/navbar-config.ts`

```typescript
import { Home, User, Briefcase, Mail } from "lucide-react";
import { NavItem } from "./tubelight-navbar";

/**
 * Configuración de items de navegación
 * Basado en las secciones actuales del portafolio:
 * - Inicio: Página principal
 * - Sobre Mí: Sección #sobre-mi
 * - Proyectos: Sección #proyectos
 * - Contacto: Sección #contacto
 */
export const navItems: NavItem[] = [
  {
    name: "Inicio",
    url: "/",
    icon: Home,
  },
  {
    name: "Sobre Mí",
    url: "/#sobre-mi",
    icon: User,
  },
  {
    name: "Proyectos",
    url: "/#proyectos",
    icon: Briefcase,
  },
  {
    name: "Contacto",
    url: "/#contacto",
    icon: Mail,
  },
];
```

### 🎯 Mapeo de Secciones Actuales:

**Desde `app/page.tsx`:**

```tsx
// Sección Hero (sin ID específico - scroll to top)
<Hero />

// Sección About con ID
<div id="sobre-mi">
  <About />
</div>

// Sección Projects con ID
<div id="proyectos">
  <Projects />
</div>

// Sección Contact con ID
<div id="contacto">
  <Contact />
</div>
```

### 📱 Iconos Seleccionados (Lucide React):

| Sección   | Icono       | Justificación                   |
| --------- | ----------- | ------------------------------- |
| Inicio    | `Home`      | Representa página principal     |
| Sobre Mí  | `User`      | Representa información personal |
| Proyectos | `Briefcase` | Representa trabajo/portafolio   |
| Contacto  | `Mail`      | Representa comunicación         |

### ✅ Resultados Esperados:

- ✅ Archivo de configuración creado
- ✅ Items mapeados correctamente a secciones existentes
- ✅ Iconos de Lucide importados correctamente
- ✅ TypeScript types coherentes

---

## 🎨 FASE 5: Integración con Sistema de Temas

### 📚 Documentación a Consultar:

- [Tailwind CSS - Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [CSS Custom Properties - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [React Context - Consuming Context](https://react.dev/reference/react/useContext)

### 🔍 Variables CSS Actuales (desde `app/globals.css`):

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --primary: #3b82f6;
  --primary-foreground: #ffffff;
  --secondary: #6366f1;
  --accent: #8b5cf6;
  --muted: #f1f5f9;
  --border: #e2e8f0;
}

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
  --primary: #60a5fa;
  --primary-foreground: #ffffff;
  --secondary: #818cf8;
  --accent: #a78bfa;
  --muted: #1e293b;
  --border: #334155;
}
```

### 🔧 Variables Utilizadas en Tubelight Navbar:

```tsx
// Clases CSS que usan las variables del tema
"bg-background/5"; // → var(--background) con 5% opacidad
"border-border"; // → var(--border)
"text-foreground/80"; // → var(--foreground) con 80% opacidad
"text-primary"; // → var(--primary)
"hover:text-primary"; // → var(--primary) en hover
"bg-muted"; // → var(--muted)
"bg-primary/5"; // → var(--primary) con 5% opacidad
"bg-primary/20"; // → var(--primary) con 20% opacidad
```

### 📁 Integración con ThemeContext (Opcional):

```typescript
// Si necesitas acceso directo al tema en el componente
import { useTheme } from "@/lib/hooks/useTheme";

export function NavBar({ items, className }: NavBarProps) {
  const { theme } = useTheme(); // 'light' | 'dark'

  // Resto del componente...
}
```

### ✅ Resultados Esperados:

- ✅ Navbar respeta variables CSS del tema
- ✅ Transición automática light/dark mode
- ✅ Colores coherentes con diseño existente
- ✅ Efecto tubelight visible en ambos temas

---

## 🔄 FASE 6: Reemplazo del Navbar Actual

### 📚 Documentación a Consultar:

- [Next.js - Layout Files](https://nextjs.org/docs/app/api-reference/file-conventions/layout)
- [React - Component Composition](https://react.dev/learn/passing-props-to-a-component)
- [Framer Motion - AnimatePresence](https://www.framer.com/motion/animate-presence/)

### 🔍 Ubicación Actual del Navbar:

**En `app/layout.tsx`:**

```tsx
// ANTES (navbar actual)
import { Navbar } from "@/components/shared/Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>
          <Navbar /> {/* ← Navbar actual a reemplazar */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
```

### 🔄 Modificación a Implementar:

**En `app/layout.tsx` (DESPUÉS):**

```tsx
// DESPUÉS (nuevo tubelight navbar)
import { NavBar } from "@/components/ui/tubelight-navbar";
import { navItems } from "@/components/ui/navbar-config";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>
          <NavBar items={navItems} /> {/* ← Nuevo navbar */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
```

### 📱 Consideraciones de Posicionamiento:

**Navbar Actual:**

```css
/* Posición: Fixed top, full width */
.navbar-current {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
}
```

**Tubelight Navbar:**

```css
/* Posición: Centrado, responsive */
.tubelight-navbar {
  position: fixed;
  bottom: 0; /* Mobile: bottom */
  top: 0; /* Desktop: top (sm:) */
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
}
```

### 🧹 Archivos a Mantener/Remover:

**Mantener (como backup):**

- `app/components/shared/Navbar.tsx` → Renombrar a `Navbar.backup.tsx`
- `app/components/shared/ThemeToggle.tsx` → Mantener (puede reutilizarse)

**Modificar:**

- `app/layout.tsx` → Cambiar import y componente

### ⚠️ Ajustes de Spacing:

**Problema:** El navbar actual puede afectar el padding del contenido.

**Solución:** Verificar en `app/page.tsx` si hay clases como:

```tsx
// Puede necesitar ajuste si había padding-top para navbar fijo
<main className="pt-20"> {/* ← Revisar si es necesario */}
```

### ✅ Resultados Esperados:

- ✅ Navbar actual reemplazado exitosamente
- ✅ Tubelight navbar renderizado correctamente
- ✅ Sin problemas de z-index o posicionamiento
- ✅ Navegación funcionando en todas las secciones
- ✅ Responsive design operativo (mobile/desktop)

---

## 🔧 FASE 7: Optimizaciones y Funcionalidad Avanzada

### 📚 Documentación a Consultar:

- [MDN - Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [React - useCallback Hook](https://react.dev/reference/react/useCallback)
- [Next.js - Scroll Restoration](https://nextjs.org/docs/app/api-reference/components/link#scroll)

### 🎯 Detección de Sección Activa (Opcional):

```typescript
// Hook personalizado para detección de scroll
import { useEffect, useState, useCallback } from "react";

export function useActiveSection(sections: string[]) {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // 50% visible
        rootMargin: "-20% 0px -80% 0px", // Offset para mejor UX
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return activeSection;
}
```

### 🔧 Integración en Tubelight Navbar:

```tsx
// Modificación del componente para scroll activo
export function NavBar({ items, className }: NavBarProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Detección automática de sección activa
  const activeSection = useActiveSection(["sobre-mi", "proyectos", "contacto"]);

  // Mapear sección a nombre de nav item
  const getActiveTab = useCallback(() => {
    switch (activeSection) {
      case "sobre-mi":
        return "Sobre Mí";
      case "proyectos":
        return "Proyectos";
      case "contacto":
        return "Contacto";
      default:
        return "Inicio";
    }
  }, [activeSection]);

  const activeTab = getActiveTab();

  // Resto del componente...
}
```

### ⚡ Smooth Scroll Mejorado:

```css
/* Añadir a globals.css */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px; /* Offset para navbar fixed */
}

/* Mejorar scroll en iOS */
* {
  -webkit-overflow-scrolling: touch;
}
```

### 🎨 Animaciones Adicionales:

```tsx
// Variantes de animación para Framer Motion
const navVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

// Aplicar a navbar container
<motion.div
  variants={navVariants}
  initial="hidden"
  animate="visible"
  className={cn("fixed bottom-0 sm:top-0...", className)}
>
```

### ✅ Resultados Esperados:

- ✅ Detección automática de sección activa (opcional)
- ✅ Smooth scroll mejorado
- ✅ Animaciones de entrada fluidas
- ✅ Performance optimizada
- ✅ Accesibilidad mejorada

---

## 📋 CHECKLIST FINAL DE IMPLEMENTACIÓN

### ✅ Dependencias:

- [ ] `lucide-react` instalado
- [ ] `clsx` instalado
- [ ] `tailwind-merge` instalado
- [ ] Sin errores en `npm install`

### ✅ Archivos Creados:

- [ ] `app/lib/utils.ts` con función `cn()`
- [ ] `app/components/ui/tubelight-navbar.tsx`
- [ ] `app/components/ui/navbar-config.ts` (opcional)

### ✅ Integración:

- [ ] Import correcto en `app/layout.tsx`
- [ ] Navbar actual reemplazado/backup
- [ ] Items de navegación mapeados
- [ ] Variables CSS del tema funcionando

### ✅ Testing:

- [ ] Navegación funciona en todas las secciones
- [ ] Responsive design (mobile/desktop)
- [ ] Dark/Light mode correcto
- [ ] Efecto tubelight visible
- [ ] Animaciones suaves
- [ ] Sin errores en consola

### ✅ Performance:

- [ ] Bundle size aceptable
- [ ] Animaciones 60fps
- [ ] Sin memory leaks
- [ ] Smooth scroll operativo

---

## 🚨 Posibles Problemas y Soluciones

### ❌ **Error: "Cannot resolve '@/lib/utils'"**

**Solución:**

```json
// Verificar tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./app/*"]
    }
  }
}
```

### ❌ **Error: "cn is not a function"**

**Solución:**

```bash
# Reinstalar dependencias
npm install clsx tailwind-merge
```

### ❌ **Efecto tubelight no visible**

**Solución:**

```css
/* Verificar variables CSS en globals.css */
:root {
  --primary: #3b82f6; /* Debe estar definido */
}
```

### ❌ **Layout shifts en mobile**

**Solución:**

```css
/* Añadir padding bottom al body en mobile */
@media (max-width: 768px) {
  body {
    padding-bottom: 80px; /* Espacio para navbar bottom */
  }
}
```

---

## 📈 Próximos Pasos Post-Implementación

### 🔮 Mejoras Futuras:

1. **Breadcrumbs dinámicos** para navegación de proyectos
2. **Keyboard navigation** (Tab, Enter, Arrows)
3. **Gestures móviles** (swipe para cambiar tabs)
4. **Preloading** de secciones al hover
5. **Analytics** de navegación con Google Analytics

### 🎯 A/B Testing:

- Comparar engagement vs navbar anterior
- Medir tiempo en cada sección
- Evaluar tasa de contacto

---

**🎉 ¡Plan de Implementación Completo!**

_Cada fase debe ser ejecutada secuencialmente, consultando la documentación oficial correspondiente y solicitando autorización antes de proceder a la siguiente fase._
