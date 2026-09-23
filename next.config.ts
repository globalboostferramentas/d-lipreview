import type { NextConfig } from "next";

/**
 * Dois modos de build.
 *
 * Normal: e o que a Vercel roda. Imagem otimizada pelo servidor, rota dinamica
 * disponivel se um dia precisar.
 *
 * PACOTE=1: exporta o site inteiro como arquivo estatico em out/, para mandar
 * a versao de aprovacao ao cliente. A exportacao nao tem servidor de imagem,
 * entao next/image entrega o WebP original, que ja esta dimensionado. O
 * trailingSlash faz cada pagina virar pasta/index.html, que e o que um host
 * estatico e o navegador esperam.
 */
const pacote = process.env.PACOTE === "1";

/**
 * Dominios, briefing de alteracoes de 22/09/2026.
 *
 * chefjuliaandrade.com.br e o site institucional e abre na tela de entrada.
 * chefjuliadelicatessen.com.br vai direto para o delivery, sem passar pela
 * escolha. Ele encaminha para o dominio principal em vez de servir as mesmas
 * paginas, porque dois dominios com o mesmo conteudo competem entre si na
 * busca.
 *
 * Temporario (307) enquanto o site estiver em aprovacao. Trocar para
 * permanente depois do aceite do cliente.
 */
const PRINCIPAL = "https://chefjuliaandrade.com.br";
const hostDelivery = String.raw`(?:www\.)?chefjuliadelicatessen\.com\.br`;

async function redirects() {
  const doDelivery = [{ type: "host" as const, value: hostDelivery }];
  return [
    { source: "/", has: doDelivery, destination: `${PRINCIPAL}/delivery`, permanent: false },
    { source: "/:caminho+", has: doDelivery, destination: `${PRINCIPAL}/:caminho+`, permanent: false },
  ];
}

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 828, 1080, 1280, 1600, 1920, 2560],
    imageSizes: [96, 128, 200, 280, 384, 512],
    unoptimized: pacote,
  },
  poweredByHeader: false,
  // A exportacao estatica do pacote de aprovacao nao tem servidor para redirecionar.
  ...(pacote ? {} : { redirects }),
  ...(pacote ? { output: "export" as const, trailingSlash: true } : {}),
};

export default nextConfig;
