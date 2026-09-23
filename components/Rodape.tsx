import Link from "next/link";
import { negocio, fotografo } from "@/content/negocio";

export default function Rodape() {
  const e = negocio.endereco;
  return (
    <footer className="border-t border-linha bg-azul text-areia">
      <div className="mx-auto max-w-[86rem] px-5 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/simbolo-espiga-areia.svg" alt="" width={22} height={32} className="h-9 w-auto" />
            <p className="mt-6 titulo text-t2 leading-tight">
              DÉLI
              <span className="mt-1 block text-t3 text-areia/70">
                By Chef Júlia Andrade
              </span>
            </p>
            <p className="espacado mt-6 text-etiqueta text-dourado-claro">
              {negocio.assinatura}
            </p>
          </div>

          <div>
            <h2 className="espacado text-etiqueta text-areia/60">Onde estamos</h2>
            <address className="mt-4 not-italic leading-relaxed text-areia/90">
              {e.logradouro}
              <br />
              {e.complemento}
              <br />
              {e.referencia}
              <br />
              {e.bairro}, {e.cidade}, {e.uf}
              <br />
              CEP {e.cep}
            </address>
          </div>

          <div>
            <h2 className="espacado text-etiqueta text-areia/60">Navegação</h2>
            <ul className="mt-4 space-y-2">
              {[
                { r: "Delivery", h: "/delivery" },
                { r: "Cardápio", h: "/menu" },
                { r: "Déli", h: "/a-deli" },
                { r: "Eventos", h: "/eventos" },
                { r: "Chef", h: "/chef-julia-andrade" },
              ].map((i) => (
                <li key={i.h}>
                  <Link href={i.h} className="text-areia/90 underline-offset-4 hover:underline">
                    {i.r}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-areia/20 pt-6 text-nota text-areia/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {negocio.nomeCompleto}. No Rio de Janeiro desde {negocio.historia.inicio}.
          </p>
          <p>Fotografia dos produtos: {fotografo}.</p>
        </div>
      </div>
    </footer>
  );
}
