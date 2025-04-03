import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
	const router = useRouter();

	const navigateTo = (path) => {
		router.push(path);
	};

	return (
		<Layout title="Learning App">
			<div className={styles.welcomeContainer}>
				<h1 className={styles.welcomeTitle}>Welcome to the Learning App!</h1>
				<p className={styles.welcomeText}>
					This app helps children learn through visual content in multiple languages.
					Choose from the options below:
				</p>
			</div>

			<div className={styles.optionsContainer}>
				<div
					className={styles.optionCard}
					onClick={() => navigateTo('/flashcards')}
				>
					<div className={styles.optionImageContainer}>
						<Image
							src="/images/flashcards-icon.png"
							alt="Flashcards icon"
							width={150}
							height={150}
							className={styles.optionImage}
						/>
					</div>
					<h2 className={styles.optionTitle}>Flashcards</h2>
					<p className={styles.optionDescription}>
						Learn Spanish words with English and Swedish translations through interactive flashcards.
					</p>
				</div>

				<div
					className={styles.optionCard}
					onClick={() => navigateTo('/stories')}
				>
					<div className={styles.optionImageContainer}>
						<Image
							src="/images/stories-icon.png"
							alt="Visual Stories icon"
							width={150}
							height={150}
							className={styles.optionImage}
						/>
					</div>
					<h2 className={styles.optionTitle}>Visual Stories</h2>
					<p className={styles.optionDescription}>
						Explore step-by-step visual stories to understand different situations like visiting the dentist.
					</p>
				</div>
			</div>
		</Layout>
	);
}
