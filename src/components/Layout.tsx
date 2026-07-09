import Link from "next/link";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            Portal de Viagens
          </Link>

          <nav className={styles.nav}>
            <Link href="/">Início</Link>
            <Link href="/destinos">Destinos</Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>Projeto Next.js com rotas, componentes e CSS Modules.</p>
      </footer>
    </div>
  );
}
