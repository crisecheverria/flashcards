import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Stories.module.css';

export default function Stories() {
	const router = useRouter();

	const stories = [
		{
			id: 'dentist-visit',
			title: 'Visiting the Dentist',
			description: 'Learn about what happens during a dental visit, from making an appointment to going home.',
			imageUrl: '/images/stories/dentist-preview.png',
			stepsCount: 10
		},
		// You can add more stories here in the future
	];

	const navigateToStory = (storyId) => {
		router.push(`/stories/${storyId}`);
	};

	return (
		<Layout title="Visual Stories">
			<div className={styles.storiesContainer}>
				<h1 className={styles.pageTitle}>Visual Stories</h1>
				<p className={styles.pageDescription}>
					These visual stories help children understand what to expect in different situations.
					Each story breaks down the experience into simple, sequential steps with pictures.
				</p>

				<div className={styles.storiesList}>
					{stories.map(story => (
						<div
							key={story.id}
							className={styles.storyCard}
							onClick={() => navigateToStory(story.id)}
						>
							<div className={styles.storyImageContainer}>
								<Image
									src={story.imageUrl}
									alt={`Preview of ${story.title}`}
									width={200}
									height={150}
									className={styles.storyImage}
								/>
							</div>
							<h2 className={styles.storyTitle}>{story.title}</h2>
							<p className={styles.storyDescription}>{story.description}</p>
							<p className={styles.storySteps}>{story.stepsCount} steps</p>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}
