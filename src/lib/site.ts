/**
 * Contenido y datos de contacto del sitio.
 *
 * Todo el texto de la landing vive acá: para cambiar una frase, un teléfono
 * o una pregunta frecuente no hace falta tocar los componentes.
 *
 * Los datos provienen del material gráfico de CrediSold.
 * Ojo: el WhatsApp y el teléfono de línea son números DISTINTOS.
 */

/** Celular con WhatsApp: 11 6407-9125 (el 9 va porque es móvil). */
const WHATSAPP_E164 = "5491164079125"
/** Teléfono de línea: 11 7705-4394. */
const PHONE_E164 = "541177054394"

/** Arma un enlace de WhatsApp con un mensaje ya escrito. */
export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(message)}`
}

export const site = {
  name: "CrediSold",
  tagline: "Préstamos en efectivo",
  slogan: "Tu necesidad es nuestra prioridad",
  description:
    "Préstamos en efectivo en Guillermo E. Hudson y zona sur. Rápidos, fáciles y sin vueltas: para empleados, jubilados y planes sociales.",
  url: "https://credisold.com.ar",

  contact: {
    phoneLabel: "11 7705-4394",
    phoneHref: `tel:+${PHONE_E164}`,
    whatsappLabel: "11 6407-9125",
    whatsapp: waLink("¡Hola CrediSold! Quiero consultar por un préstamo."),
    email: "perezsoldano@gmail.com",
    address: "Barrio Marítimo, Calle 131 N° 5261",
    addressExtra: "Galería La Rosa",
    city: "Guillermo E. Hudson, Buenos Aires",
    // ⚠️ Horario de ejemplo: confirmar el real antes de publicar.
    hours: "Lunes a viernes de 9 a 18 h · Sábados de 9 a 13 h",
    facebook: "https://www.facebook.com/WWW.CREDISOLD.COM.AR/",
  },

  nav: [
    { label: "Simulador", href: "#simulador" },
    { label: "Quiénes pueden", href: "#para-quien" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Requisitos", href: "#requisitos" },
    { label: "Preguntas", href: "#preguntas" },
  ],

  hero: {
    eyebrow: "Préstamos en efectivo en Hudson y zona sur",
    title: "Préstamos en efectivo,",
    titleAccent: "rápidos y sin vueltas.",
    subtitle:
      "Te damos el préstamo que necesitás con trato personal y requisitos simples. Traés el DNI y el recibo, y salís con la plata en la mano.",
    highlights: ["Atención cara a cara", "Requisitos mínimos", "Respuesta el mismo día"],
  },

  /** A quiénes les presta CrediSold. */
  audiences: [
    { icon: "Landmark", title: "Empleados públicos y privados" },
    { icon: "UserRound", title: "Jubilados nacionales y provinciales" },
    { icon: "Users", title: "Plan Jefes y Jefas" },
    { icon: "HeartHandshake", title: "Planes sociales" },
  ],

  benefits: [
    {
      icon: "Banknote",
      title: "Efectivo en el día",
      body: "Si aprobamos tu crédito a la mañana, te llevás la plata a la tarde. Sin esperar acreditaciones.",
    },
    {
      icon: "ClipboardCheck",
      title: "Requisitos simples",
      body: "DNI, recibo de sueldo y una boleta de servicio. Nada de carpetas interminables ni garantes.",
    },
    {
      icon: "Handshake",
      title: "Trato de persona a persona",
      body: "Te atiende alguien del barrio que escucha tu caso, no un formulario ni un bot.",
    },
    {
      icon: "CalendarRange",
      title: "Cuotas a tu medida",
      body: "Armamos un plan que entre en tu presupuesto, con cuotas fijas que sabés de antemano.",
    },
    {
      icon: "ShieldCheck",
      title: "Condiciones claras",
      body: "Te decimos el total a devolver y el valor de cada cuota antes de que firmes nada.",
    },
    {
      icon: "MapPin",
      title: "Cerca tuyo",
      body: "Estamos en la Galería La Rosa, Barrio Marítimo. Vení al local o escribinos por WhatsApp.",
    },
  ],

  steps: [
    {
      title: "Contanos qué necesitás",
      body: "Escribinos por WhatsApp o acercate al local y decinos el monto que buscás.",
    },
    {
      title: "Evaluamos tu caso",
      body: "Revisamos tu situación y te ofrecemos un plan de cuotas que puedas pagar tranquilo.",
    },
    {
      title: "Cobrás tu efectivo",
      body: "Firmás, te llevás la plata y te vas con el cronograma de pagos en la mano.",
    },
  ],

  requirements: ["DNI", "Último recibo de sueldo", "Boletas de gas, luz o teléfono"],

  faqs: [
    {
      q: "¿Cuánto tardan en darme una respuesta?",
      a: "En la mayoría de los casos te respondemos el mismo día. Si venís con la documentación completa, podés salir del local con el efectivo.",
    },
    {
      q: "¿Trabajan con jubilados y planes sociales?",
      a: "Sí. Damos préstamos a empleados públicos y privados, jubilados nacionales y provinciales, Plan Jefes y Jefas y planes sociales.",
    },
    {
      q: "¿Qué documentación tengo que llevar?",
      a: "El DNI, tu último recibo de sueldo (o comprobante de jubilación o del plan que cobrás) y una boleta de gas, luz o teléfono.",
    },
    {
      q: "¿Cómo pago las cuotas?",
      a: "Podés abonar en el local o por transferencia. Al firmar te entregamos el cronograma con las fechas y el monto exacto de cada cuota.",
    },
    {
      q: "¿Qué pasa si me atraso con una cuota?",
      a: "Avisanos antes del vencimiento. Preferimos reacomodar el plan a tiempo antes de que se te complique, así que hablalo con nosotros apenas veas que no llegás.",
    },
    {
      q: "¿Atienden fuera de Hudson?",
      a: "Sí, trabajamos con toda la zona sur del Gran Buenos Aires. Escribinos por WhatsApp y coordinamos.",
    },
  ],
} as const

/**
 * Parámetros del simulador.
 *
 * ⚠️ IMPORTANTE: `monthlyRate` es una tasa mensual de EJEMPLO, usada sólo para
 *    mostrar un número orientativo en pantalla. Reemplazala por la tasa real
 *    antes de publicar. La landing aclara en todo momento que el cálculo
 *    es estimativo y que no constituye una oferta de crédito.
 */
export const simulator = {
  minAmount: 50_000,
  maxAmount: 1_500_000,
  stepAmount: 10_000,
  defaultAmount: 400_000,
  terms: [3, 6, 9, 12, 18] as const,
  defaultTerm: 12,
  monthlyRate: 0.09,
}
