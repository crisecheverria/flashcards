import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import flashcardsData from '../data/flashcards.json';

export default function Home() {
	// Import flashcard data from the JSON file
	const { flashcards } = flashcardsData;

	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [showTranslation, setShowTranslation] = useState(false);

	// Go to next card
	const nextCard = () => {
		setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
		setShowTranslation(false);
	};

	// Go to previous card
	const prevCard = () => {
		setCurrentCardIndex((prevIndex) =>
			prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
		);
		setShowTranslation(false);
	};

	// Toggle translation visibility
	const toggleTranslation = () => {
		setShowTranslation(!showTranslation);
	};

	const currentCard = flashcards[currentCardIndex];

	return (
		<div className={styles.container}>
			<Head>
				<title>Visual Flashcards</title>
				<meta name="description" content="Spanish flashcards with English and Swedish translations" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className={styles.header}>
				<h1 className={styles.title}>Visual Flashcards</h1>
				<p className={styles.counter}>
					Card {currentCardIndex + 1} of {flashcards.length}
				</p>
			</header>

			<main className={styles.main}>
				<div
					className={styles.card}
					onClick={toggleTranslation}
				>
					<div className={styles.imageContainer}>
						<Image
							src={currentCard.imageUrl}
							alt={currentCard.altText}
							width={200}
							height={200}
							className={styles.cardImage}
							priority
						/>
					</div>
					<h2 className={styles.spanishText}>{currentCard.spanish}</h2>

					{showTranslation ? (
						<div className={styles.translationContainer}>
							<p className={styles.translationText}>
								<span className={styles.translationLabel}>English: </span>
								{currentCard.english}
							</p>
							<p className={styles.translationText}>
								<span className={styles.translationLabel}>Swedish: </span>
								{currentCard.swedish}
							</p>
						</div>
					) : (
						<p className={styles.tapInstruction}>Tap to see translations</p>
					)}
				</div>

				<div className={styles.navigationButtons}>
					<button className={styles.navButton} onClick={prevCard}>
						Previous
					</button>
					<button className={styles.navButton} onClick={nextCard}>
						Next
					</button>
				</div>
			</main>

			<footer className={styles.footer}>
				<p>Created for learning Spanish with English and Swedish translations</p>
			</footer>
		</div>
	);
}
