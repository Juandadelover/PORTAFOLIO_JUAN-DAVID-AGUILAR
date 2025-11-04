# Deployment Instructions for Vercel

## Cambios Realizados para Corregir el Error 404

### 1. Configuración de Next.js
- ✅ Eliminado `output: 'export'` (incompatible con rutas dinámicas en Vercel)
- ✅ Consolidado múltiples archivos de configuración en uno solo (`next.config.js`)
- ✅ Configurado `images.unoptimized: true` para mejor compatibilidad

### 2. Rutas Dinámicas
- ✅ Actualizado `params` para ser una Promise (Next.js 15)
- ✅ Configurado `generateStaticParams()` correctamente
- ✅ Añadido `dynamicParams: false` para prevenir rutas no definidas

### 3. Archivos de Configuración
- ✅ Creado `vercel.json` con configuración mínima
- ✅ Creado `.vercelignore` para excluir archivos innecesarios

## Pasos para Deployar en Vercel

1. **Commit y Push de los cambios:**
   ```bash
   git add .
   git commit -m "Fix: Corregir configuración para Vercel deployment"
   git push origin main
   ```

2. **En Vercel Dashboard:**
   - Ve a tu proyecto en Vercel
   - Click en "Redeploy" o espera el auto-deployment
   - Vercel detectará automáticamente Next.js

3. **Verificar el Build:**
   - El build debería completarse sin errores
   - Las rutas dinámicas `/proyectos/[id]` deberían funcionar correctamente

## Rutas Disponibles

- `/` - Página principal
- `/#sobre-mi` - Sección Sobre Mí
- `/#proyectos` - Sección Proyectos
- `/#contacto` - Sección Contacto
- `/proyectos/0` - Detalle del Proyecto 0 (CAFE-FELICIDA)
- `/proyectos/1` - Detalle del Proyecto 1
- `/proyectos/2` - Detalle del Proyecto 2

## Troubleshooting

Si aún ves errores 404:
1. Verifica que todos los cambios estén en el repositorio
2. Limpia el cache de Vercel (Settings > General > Clear Cache)
3. Fuerza un nuevo deployment
4. Verifica los logs de build en Vercel Dashboard

## Notas Importantes

- ❌ NO uses `output: 'export'` con rutas dinámicas
- ✅ Vercel maneja automáticamente el SSR y SSG
- ✅ Las imágenes están configuradas como `unoptimized`
- ✅ TypeScript y ESLint errors están ignorados durante el build (temporal)
