import { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import flashcardsData from '../data/flashcards.json';

export default function Flashcards() {
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
		<Layout title="Spanish Flashcards">
			<p className={styles.counter}>
				Card {currentCardIndex + 1} of {flashcards.length}
			</p>

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
		</Layout>
	);
}
