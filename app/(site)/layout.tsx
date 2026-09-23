import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";

export default function LayoutDoSite({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Cabecalho />
      <main id="conteudo">{children}</main>
      <Rodape />
    </>
  );
}
