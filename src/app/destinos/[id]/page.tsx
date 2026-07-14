import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinos } from "@/data/destinos";
import styles from "./detalhes.module.css";

type DestinoDetalheProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return destinos.map((destino) => ({
    id: destino.id,
  }));
}

export default async function DestinoDetalhePage({
  params,
}: DestinoDetalheProps) {
  const { id } = await params;

  const destino = destinos.find((item) => item.id === id);

  if (!destino) {
    notFound();
  }

  return (
    <article className={styles.detail}>
      <Image
        className={styles.image}
        src={destino.imagem}
        alt={destino.nome}
        width={1000}
        height={600}
        priority
      />

      <div className={styles.content}>
        <h1>{destino.nome}</h1>
        <p className={styles.location}>{destino.localizacao}</p>
        <p className={styles.highlight}>{destino.destaque}</p>
        <p className={styles.description}>{destino.descricao}</p>

        <Link className={styles.back} href="/destinos">
          Voltar para destinos
        </Link>
      </div>
    </article>
  );
}
