import CardDestino from "@/components/CardDestino";
import { destinos } from "@/data/destinos";
import styles from "./destinos.module.css";

export default function DestinosPage() {
  return (
    <section>
      <div className={styles.header}>
        <h1>Destinos turísticos</h1>
        <p>Escolha um destino para visualizar mais informações.</p>
      </div>

      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </section>
  );
}
