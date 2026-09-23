import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import BotaoWhatsApp from "@/components/BotaoWhatsApp";
import Rastreamento from "@/components/Rastreamento";
import { negocio } from "@/content/negocio";
import { JsonLd, localBusiness, organizacao } from "@/lib/dados-estruturados";
import { SITE } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "DÉLI By Chef Júlia Andrade: entradas, kits e mesa posta na Barra da Tijuca",
    template: "%s | DÉLI By Chef Júlia Andrade",
  },
  description:
    "Delicatessen e café da Chef Júlia Andrade na Barra da Tijuca. Entradas, focaccias, terrines e kits prontos para receber, com entrega no Rio de Janeiro.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "DÉLI By Chef Júlia Andrade",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body>
        {/* GTM. O container carrega depois da hidratacao para nao competir com o LCP. */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${negocio.rastreamento.gtmId}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${negocio.rastreamento.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        <a
          href="#conteudo"
          className="espacado sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-azul focus:px-4 focus:py-2 focus:text-etiqueta focus:text-areia"
        >
          Ir para o conteúdo
        </a>
        {/* Cabecalho e rodape ficam em app/(site)/layout.tsx. A tela de entrada
            nao tem menu: nela so existem as duas portas. */}
        {children}
        <BotaoWhatsApp />
        <Rastreamento />
        <JsonLd dados={localBusiness()} />
        <JsonLd dados={organizacao()} />
      </body>
    </html>
  );
}
