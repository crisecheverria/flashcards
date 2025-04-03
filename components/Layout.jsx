import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Layout.module.css';

export default function Layout({ children, title = 'Learning App' }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Learning app with flashcards and visual stories" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className={styles.header}>
				<h1 className={styles.title}>{title}</h1>
				<nav className={styles.nav}>
					<Link href="/" className={styles.navLink}>
						Home
					</Link>
					<Link href="/flashcards" className={styles.navLink}>
						Flashcards
					</Link>
					<Link href="/stories" className={styles.navLink}>
						Visual Stories
					</Link>
				</nav>
			</header>

			<main className={styles.main}>
				{children}
			</main>

			<footer className={styles.footer}>
				<p>Created for multilingual children's learning</p>
			</footer>
		</div>
	);
}
