import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../../components/Layout';
import styles from '../../styles/Stories.module.css';

export default function StoryViewer() {
	const router = useRouter();
	const { id } = router.query;

	const [storyData, setStoryData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	const [language, setLanguage] = useState('english'); // Default language

	useEffect(() => {
		// Only load data when id is available (after hydration)
		if (!id) return;

		// Load the appropriate story data
		const loadStoryData = async () => {
			try {
				// Dynamic import based on story ID
				const data = await import(`../../data/${id}.json`);
				setStoryData(data.default);
				setLoading(false);
			} catch (error) {
				console.error('Error loading story data:', error);
				// Redirect to stories page if story not found
				router.push('/stories');
			}
		};

		loadStoryData();
	}, [id, router]);

	// Navigation functions
	const nextStep = () => {
		if (!storyData) return;
		setCurrentStepIndex((prevIndex) => (prevIndex + 1) % storyData.steps.length);
	};

	const prevStep = () => {
		if (!storyData) return;
		setCurrentStepIndex((prevIndex) =>
			prevIndex === 0 ? storyData.steps.length - 1 : prevIndex - 1
		);
	};

	// Change language
	const changeLanguage = (newLanguage) => {
		setLanguage(newLanguage);
	};

	// Show loading state if data is not yet loaded
	if (loading || !storyData) {
		return (
			<Layout title="Loading Story...">
				<p>Loading story content...</p>
			</Layout>
		);
	}

	const currentStep = storyData.steps[currentStepIndex];

	return (
		<Layout title={storyData.title[language]}>
			<div className={styles.storyViewerContainer}>
				<div className={styles.storyHeader}>
					<h1 className={styles.storyTitle}>{storyData.title[language]}</h1>

					<div className={styles.languageSelector}>
						<button
							onClick={() => changeLanguage('english')}
							className={`${styles.langButton} ${language === 'english' ? styles.activeLang : ''}`}
						>
							English
						</button>
						<button
							onClick={() => changeLanguage('swedish')}
							className={`${styles.langButton} ${language === 'swedish' ? styles.activeLang : ''}`}
						>
							Svenska
						</button>
						<button
							onClick={() => changeLanguage('spanish')}
							className={`${styles.langButton} ${language === 'spanish' ? styles.activeLang : ''}`}
						>
							Español
						</button>
					</div>

					<p className={styles.counter}>
						Step {currentStepIndex + 1} of {storyData.steps.length}
					</p>
				</div>

				<div className={styles.stepCard}>
					<div className={styles.imageContainer}>
						<Image
							src={currentStep.imageUrl}
							alt={currentStep.altText}
							width={400}
							height={300}
							className={styles.stepImage}
							priority
						/>
					</div>
					<h2 className={styles.stepText}>{currentStep[language]}</h2>

					{/* Show all translations */}
					<div className={styles.allTranslations}>
						{Object.keys(currentStep)
							.filter(key => ['english', 'swedish', 'spanish'].includes(key) && key !== language)
							.map(lang => (
								<p key={lang} className={styles.translationText}>
									<span className={styles.translationLabel}>
										{lang.charAt(0).toUpperCase() + lang.slice(1)}:
									</span>
									{' '}{currentStep[lang]}
								</p>
							))
						}
					</div>
				</div>

				<div className={styles.navigationButtons}>
					<button className={styles.navButton} onClick={prevStep}>
						Previous
					</button>
					<button className={styles.navButton} onClick={nextStep}>
						Next
					</button>
				</div>

				{/* Step indicators */}
				<div className={styles.stepIndicators}>
					{storyData.steps.map((step, index) => (
						<button
							key={step.id}
							className={`${styles.stepDot} ${index === currentStepIndex ? styles.activeStep : ''}`}
							onClick={() => setCurrentStepIndex(index)}
							aria-label={`Go to step ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</Layout>
	);
}
