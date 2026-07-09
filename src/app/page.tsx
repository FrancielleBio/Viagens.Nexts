import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section>
      <div className={styles.hero}>
        <h1>Descubra destinos incríveis para sua próxima viagem</h1>
        <p>
          Explore uma seleção de destinos turísticos com informações simples,
          imagens e páginas individuais feitas com rotas dinâmicas do Next.js.
        </p>
        <Link className={styles.button} href="/destinos">
          Ver destinos
        </Link>
      </div>

      <div className={styles.infoGrid}>
        <article className={styles.infoCard}>
          <h2>Rotas automáticas</h2>
          <p>As páginas foram criadas usando a estrutura de pastas do Next.js.</p>
        </article>

        <article className={styles.infoCard}>
          <h2>CSS Modules</h2>
          <p>Os estilos ficam organizados e separados por componente.</p>
        </article>

        <article className={styles.infoCard}>
          <h2>TypeScript</h2>
          <p>Os dados dos destinos usam tipagem para deixar o projeto mais seguro.</p>
        </article>
      </div>
    </section>
  );
}
