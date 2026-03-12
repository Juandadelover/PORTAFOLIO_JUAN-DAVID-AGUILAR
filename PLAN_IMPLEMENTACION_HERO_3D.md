# 🚀 Plan de Implementación: Hero 3D con Spline

## 📋 Resumen del Proyecto

**Objetivo:** Reemplazar el Hero actual por un nuevo Hero interactivo con escena 3D de Spline, manteniendo el contenido personal y optimizando para todos los dispositivos.

**Fecha de Creación:** 25 de Noviembre, 2025

---

## 🎯 Decisiones de Diseño Confirmadas

| Aspecto                 | Decisión                                                                               |
| ----------------------- | -------------------------------------------------------------------------------------- |
| **Contenido del texto** | Mantener todo el texto actual (¡Hola! 👋 Soy Juan David Aguilar, etc.)                 |
| **Escena 3D**           | Usar el robot del demo: `https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode` |
| **Foto de perfil**      | Mover a la sección "Sobre Mí" (`/public/img/FotoJuanda.webp`)                          |
| **Spotlight**           | Ibelick (interactivo, sigue el mouse) con colores de marca (azul/púrpura)              |
| **Responsive**          | Optimizado para móviles con fallback/layout adaptativo                                 |

---

## 📁 Estructura de Archivos a Crear/Modificar

### Archivos Nuevos

```
app/components/ui/
├── splite.tsx          # Componente de escena Spline
├── spotlight.tsx       # Spotlight interactivo (ibelick)
├── card.tsx            # Componente Card de shadcn
```

### Archivos a Modificar

```
app/
├── sections/Hero.tsx   # Nuevo Hero 3D (reemplazar completamente)
├── sections/About/index.tsx  # Agregar foto de perfil aquí
├── globals.css         # Agregar animación del loader para Spline
tailwind.config.ts      # Agregar variables CSS para card si es necesario
package.json            # Nuevas dependencias
```

---

## 📦 Dependencias a Instalar

```bash
npm install @splinetool/runtime @splinetool/react-spline
```

> **Nota:** `framer-motion` ya está instalado (v12.23.24) ✅

---

## 🔄 Fases de Implementación

### **FASE 1: Preparación del Entorno** ⏱️ ~5 min

- [ ] Instalar dependencias de Spline
- [ ] Verificar que framer-motion está correctamente instalado
- [ ] Crear backup del Hero actual (ya existe en git)

### **FASE 2: Crear Componentes UI** ⏱️ ~10 min

#### 2.1 Crear `app/components/ui/splite.tsx`

```tsx
"use client";

import { Suspense, lazy } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
```

#### 2.2 Crear `app/components/ui/spotlight.tsx` (Versión Ibelick - Interactiva)

```tsx
"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, useSpring, useTransform, SpringOptions } from "framer-motion";
import { cn } from "@/app/lib/utils";

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
};

export function Spotlight({
  className,
  size = 200,
  springOptions = { bounce: 0 },
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = "relative";
        parent.style.overflow = "hidden";
        setParentElement(parent);
      }
    }
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!parentElement) return;
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY, parentElement],
  );

  useEffect(() => {
    if (!parentElement) return;

    parentElement.addEventListener("mousemove", handleMouseMove);
    parentElement.addEventListener("mouseenter", () => setIsHovered(true));
    parentElement.addEventListener("mouseleave", () => setIsHovered(false));

    return () => {
      parentElement.removeEventListener("mousemove", handleMouseMove);
      parentElement.removeEventListener("mouseenter", () => setIsHovered(true));
      parentElement.removeEventListener("mouseleave", () =>
        setIsHovered(false),
      );
    };
  }, [parentElement, handleMouseMove]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200",
        // Colores de marca: azul y púrpura
        "from-blue-400 via-purple-500 to-pink-400",
        isHovered ? "opacity-100" : "opacity-0",
        className,
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
      }}
    />
  );
}
```

#### 2.3 Crear `app/components/ui/card.tsx`

```tsx
import * as React from "react";
import { cn } from "@/app/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
```

### **FASE 3: Actualizar Estilos Globales** ⏱️ ~3 min

Agregar en `globals.css`:

```css
/* Loader para Spline Scene */
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid rgba(59, 130, 246, 0.3);
  border-bottom-color: #3b82f6;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Variables CSS para Card */
@layer base {
  :root {
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
  }

  .dark {
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
  }
}
```

### **FASE 4: Implementar Nuevo Hero** ⏱️ ~15 min

El nuevo `Hero.tsx` tendrá:

- Layout de dos columnas (texto izquierda, 3D derecha)
- Contenido personal mantenido
- Spotlight interactivo con colores de marca
- Responsive: en móviles el 3D se oculta o se muestra más pequeño debajo

**Estructura del nuevo Hero:**

```
┌─────────────────────────────────────────────────────┐
│                    Spotlight (interactivo)          │
├────────────────────────┬────────────────────────────┤
│                        │                            │
│   ¡Hola! 👋 Soy        │      ┌──────────────┐     │
│   JUAN DAVID           │      │              │     │
│   AGUILAR              │      │   Robot 3D   │     │
│                        │      │   Spline     │     │
│   Desarrollador        │      │              │     │
│   Full Stack           │      └──────────────┘     │
│                        │                            │
│   [Contactar] [Ver]    │                            │
│                        │                            │
└────────────────────────┴────────────────────────────┘
│               En móviles: columna única             │
│            (3D oculto o debajo más pequeño)         │
└─────────────────────────────────────────────────────┘
```

### **FASE 5: Mover Foto de Perfil a "Sobre Mí"** ⏱️ ~5 min

Integrar la foto circular animada actual en la sección About:

- Mantener el efecto de glow y rotating border
- Ajustar tamaño para la nueva ubicación
- Mantener animaciones existentes

### **FASE 6: Testing y Optimización** ⏱️ ~10 min

- [ ] Probar en desktop (Chrome, Firefox, Safari)
- [ ] Probar en móviles (iOS Safari, Chrome Android)
- [ ] Verificar rendimiento del 3D
- [ ] Probar interactividad del spotlight
- [ ] Verificar que la foto en About se ve correctamente
- [ ] Comprobar tiempos de carga

---

## ⚠️ Consideraciones de Rendimiento

### Móviles

- La escena 3D puede ser pesada en móviles de gama baja
- **Solución implementada:**
  - Ocultar escena 3D en pantallas < 768px (md breakpoint)
  - Mostrar una imagen estática del robot como fallback
  - O simplemente mostrar solo el contenido textual

### Lazy Loading

- Spline se carga con `lazy()` de React
- El loader se muestra mientras carga
- No bloquea el renderizado inicial

---

## 🎨 Colores de Marca a Usar

| Color         | Valor                    | Uso                   |
| ------------- | ------------------------ | --------------------- |
| Azul primario | `#3b82f6` / `blue-500`   | Spotlight, acentos    |
| Púrpura       | `#8b5cf6` / `purple-500` | Spotlight, gradientes |
| Rosa/Pink     | `#ec4899` / `pink-500`   | Gradientes, acentos   |
| Fondo oscuro  | `#0a0a0a`                | Background del card   |

---

## 📝 Comandos de Ejecución

```bash
# 1. Instalar dependencias
npm install @splinetool/runtime @splinetool/react-spline

# 2. Iniciar desarrollo
npm run dev

# 3. Verificar build
npm run build
```

---

## ✅ Checklist Final

- [ ] Dependencias instaladas
- [ ] Componentes UI creados (splite, spotlight, card)
- [ ] Estilos globales actualizados
- [ ] Hero nuevo implementado
- [ ] Foto movida a About
- [ ] Testing en desktop completado
- [ ] Testing en móviles completado
- [ ] Build de producción exitoso

---

## 🔄 Rollback Plan

Si algo sale mal, el Hero original está en el historial de git:

```bash
# Ver el estado anterior
git log --oneline app/sections/Hero.tsx

# Restaurar si es necesario
git checkout <commit-hash> -- app/sections/Hero.tsx
```

---

## 📞 Siguiente Paso

**¿Listo para comenzar la implementación?**

Confirma y comenzaré con la **FASE 1: Instalar dependencias y crear los componentes UI**.
