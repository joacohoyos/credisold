/**
 * Contenido y datos de contacto del sitio.
 *
 * Todo el texto de la landing vive acá: para cambiar una frase, un teléfono
 * o una pregunta frecuente no hace falta tocar los componentes.
 *
 * ⚠️  Los datos de contacto se tomaron de la web y la página de Facebook
 *     actuales de CrediSold. Confirmalos antes de publicar.
 */

const PHONE_E164 = "5491177054394"

/** Arma un enlace de WhatsApp con un mensaje ya escrito. */
export function waLink(message: string) {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`
}

export const site = {
  name: "CrediSold",
  tagline: "Préstamos en efectivo",
  description:
    "Préstamos personales en efectivo en Guillermo E. Hudson y zona sur. Requisitos simples, trato personal y la plata en el día.",
  url: "https://credisold.com.ar",

  contact: {
    phoneLabel: "+54 11 7705-4394",
    phoneHref: `tel:+${PHONE_E164}`,
    whatsapp: waLink("¡Hola CrediSold! Quiero consultar por un préstamo."),
    email: "perezsoldano@gmail.com",
    address: "Calle 131 N° 5261",
    city: "Guillermo E. Hudson, Buenos Aires",
    // ⚠️ Horario de ejemplo: confirmar el real antes de publicar.
    hours: "Lunes a viernes de 9 a 18 h · Sábados de 9 a 13 h",
    facebook: "https://www.facebook.com/WWW.CREDISOLD.COM.AR/",
  },

  nav: [
    { label: "Simulador", href: "#simulador" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Requisitos", href: "#requisitos" },
    { label: "Preguntas", href: "#preguntas" },
  ],

  hero: {
    eyebrow: "Préstamos en efectivo en Hudson y zona sur",
    title: "Tu crédito, en efectivo y en el día.",
    subtitle:
      "En CrediSold te damos el préstamo que necesitás con trato personal, requisitos simples y la plata en la mano. Sin bancos, sin trámites eternos.",
    highlights: ["Atención cara a cara", "Requisitos mínimos", "Respuesta el mismo día"],
  },

  benefits: [
    {
      icon: "Banknote",
      title: "Efectivo en el día",
      body: "Si aprobamos tu crédito a la mañana, te llevás la plata a la tarde. Sin esperar acreditaciones.",
    },
    {
      icon: "ClipboardCheck",
      title: "Requisitos simples",
      body: "DNI y comprobante de ingresos. Nada de carpetas interminables ni garantes imposibles.",
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
      body: "Estamos en Hudson y atendemos toda la zona sur. Vení al local o escribinos por WhatsApp.",
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

  requirements: [
    "DNI argentino vigente",
    "Ser mayor de 18 años",
    "Comprobante de ingresos (recibo de sueldo, monotributo o jubilación)",
    "Constancia de domicilio o una factura de servicio a tu nombre",
  ],

  faqs: [
    {
      q: "¿Cuánto tardan en darme una respuesta?",
      a: "En la mayoría de los casos te respondemos el mismo día. Si venís con la documentación completa, podés salir del local con el efectivo.",
    },
    {
      q: "¿Necesito recibo de sueldo?",
      a: "Necesitamos algún comprobante de ingresos, pero no tiene que ser un recibo de sueldo en relación de dependencia. Sirve constancia de monotributo, recibo de jubilación u otros ingresos demostrables. Consultanos tu caso.",
    },
    {
      q: "¿Trabajan con monotributistas y jubilados?",
      a: "Sí. Evaluamos cada situación por separado para armar un plan de cuotas que se ajuste a tus ingresos.",
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
 *    antes de publicar, o pedile al desarrollador que la conecte con tu sistema.
 *    La landing aclara en todo momento que el cálculo es estimativo.
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
