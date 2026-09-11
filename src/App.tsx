import { Audiences } from "@/components/sections/audiences"
import { Benefits } from "@/components/sections/benefits"
import { Contact } from "@/components/sections/contact"
import { Faq } from "@/components/sections/faq"
import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Requirements } from "@/components/sections/requirements"
import { SiteFooter } from "@/components/sections/site-footer"
import { SiteHeader } from "@/components/sections/site-header"
import { WhatsappFab } from "@/components/whatsapp-fab"

export default function App() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-brand-foreground"
      >
        Saltar al contenido
      </a>

      <SiteHeader />

      <main id="contenido">
        <Hero />
        <Benefits />
        <Audiences />
        <HowItWorks />
        <Requirements />
        <Faq />
        <Contact />
      </main>

      <SiteFooter />
      <WhatsappFab />
    </>
  )
}
