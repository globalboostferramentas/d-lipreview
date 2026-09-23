# DÉLI By Chef Júlia Andrade

Site institucional da Chef Júlia Andrade e da DÉLI, delicatessen e café na Barra da Tijuca, Rio de Janeiro.

Next.js 15 (App Router), TypeScript e Tailwind CSS 4. Deploy na Vercel.

## Rodar no computador

Precisa de Node.js 18.18 ou mais novo.

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

Para ver exatamente a versão que vai ao ar:

```bash
npm run build
npm start
```

## Publicar na Vercel

1. Importar este repositório na Vercel. O framework é detectado sozinho como Next.js, sem configuração extra.
2. Em Environment Variables, definir `NEXT_PUBLIC_SITE_URL` com o endereço final, sem barra no fim. Sem ela, o site usa `https://chefjuliaandrade.com.br` nos links canônicos e no dado estruturado.
3. Enquanto o site estiver em aprovação, usar o link de preview. Nada vai para o domínio de produção antes do aceite do cliente.

Domínios, quando for a hora: `chefjuliaandrade.com.br` aponta para este projeto e abre na tela de entrada. `chefjuliadelicatessen.com.br` também aponta para cá e é encaminhado para `/delivery` pelo `next.config.ts`.

## Versão de aprovação sem servidor

```bash
npm run pacote
```

Gera `pacote-cliente/`, que abre por duplo clique no `index.html`, e `DELI-site-aprovacao.zip` para mandar ao cliente. Os dois ficam fora do Git.

## Onde está cada coisa

| Pasta | O que tem |
|---|---|
| `app/(entrada)` | Tela de entrada, com as opções Delivery e Presencial |
| `app/(site)` | Delivery, Déli, Eventos, Chef, cardápio, categorias, produtos e vinhos |
| `content/` | Todo o conteúdo: negócio e operação (`negocio.ts`), produtos e preços (`catalogo.ts`), a Chef e a loja (`julia.ts`), fotos e perguntas frequentes |
| `components/` | Cabeçalho, rodapé, botão de WhatsApp, carrossel, vídeos |
| `lib/` | Links de WhatsApp e cardápio com UTM, dados estruturados, endereço do site |
| `public/` | Fotos (WebP), vídeos, fontes e os vetores oficiais da marca |

Texto, preço, horário e contato mudam em `content/`, não nas páginas. Todo link de WhatsApp é montado por `lib/links.ts`, que acrescenta a UTM de origem.

Fotografia dos produtos: Rodrigo Azevedo.
