# CrediSold — Landing

Landing page de CrediSold (préstamos en efectivo en Guillermo E. Hudson y zona sur).

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (plugin oficial de Vite, tokens en `src/index.css`)
- **shadcn/ui** sobre **Base UI** (`@base-ui-components/react`) — los componentes viven
  en `src/components/ui/` y se editan como código propio
- **lucide-react** para los íconos

## Comandos

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # compila a dist/
npm run preview   # sirve el build de producción
npm run lint      # oxlint
```

## Dónde tocar cada cosa

| Qué querés cambiar | Archivo |
| --- | --- |
| Textos, teléfono, email, dirección, FAQ | `src/lib/site.ts` |
| Montos y tasa del simulador | `src/lib/site.ts` → `simulator` |
| Colores, tipografía, radios, animaciones | `src/index.css` |
| Secciones de la página | `src/components/sections/` |
| Componentes de UI (botón, card, acordeón…) | `src/components/ui/` |
| Título, descripción y metadatos para compartir | `index.html` |

## Antes de publicar

Estos valores se tomaron del sitio y la página de Facebook actuales. **Confirmalos**:

- Teléfono / WhatsApp: `+54 11 7705-4394`
- Email: `perezsoldano@gmail.com`
- Dirección: Calle 131 N° 5261, Guillermo E. Hudson
- **Horarios de atención** (`site.contact.hours`) — hoy hay un horario de ejemplo
- **`simulator.monthlyRate`** — hoy es una tasa mensual de ejemplo (9 %) usada sólo
  para mostrar un número orientativo. Reemplazala por la real. La landing aclara en
  el simulador y en el pie que los valores son estimativos y no constituyen una
  oferta de crédito.

## Notas

- El tema oscuro se activa solo según la preferencia del sistema operativo.
- Las animaciones de entrada respetan `prefers-reduced-motion`.
- No se incluyeron testimonios: cuando tengas opiniones reales de clientes se agrega
  una sección con ellas.
