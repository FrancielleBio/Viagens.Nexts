import Image from "next/image";
import Link from "next/link";
import type { Destino } from "@/data/destinos";
import styles from "./CardDestino.module.css";

type CardDestinoProps = {
  destino: Destino;
};

export default function CardDestino({ destino }: CardDestinoProps) {
  return (
    <article className={styles.card}>
      <Image
        className={styles.image}
        src={destino.imagem}
        alt={destino.nome}
        width={600}
        height={400}
      />

      <div className={styles.content}>
        <h2>{destino.nome}</h2>
        <p className={styles.location}>{destino.localizacao}</p>
        <p>{destino.destaque}</p>

        <Link className={styles.button} href={`/destinos/${destino.id}`}>
          Ver detalhes
        </Link>
      </div>
    </article>
  );
}