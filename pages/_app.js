// pages/_app.js
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Learning app with flashcards and visual stories" />
				<title>Learning App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
