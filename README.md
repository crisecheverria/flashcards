# Visual Flashcards App

A simple, interactive flashcard web application for learning Spanish words with English and Swedish translations. Designed with accessibility in mind for children with autism and intellectual disabilities.

## Features

- Visual cards with images for each Spanish word
- English and Swedish translations
- Simple, kid-friendly interface
- Touch/click to reveal translations
- Navigation between cards
- Progress tracking
- Responsive design that works on all devices

## Project Structure

```
spanish-flashcards/
├── data/
│   └── flashcards.json
├── pages/
│   ├── _app.js
│   └── index.js
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── hello.png
│       ├── thankyou.png
│       ├── apple.png
│       ├── dog.png
│       ├── cat.png
│       ├── water.png
│       ├── sun.png
│       ├── moon.png
│       ├── book.png
│       └── happy.png
├── styles/
│   ├── globals.css
│   └── Home.module.css
├── package.json
├── netlify.toml
└── README.md
```

## Setup and Development

1. **Clone the repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment to Netlify

1. **Push your code to GitHub**

2. **Connect to Netlify**
   - Log in to Netlify (https://www.netlify.com/)
   - Click "New site from Git"
   - Select your GitHub repository
   - Use the following build settings:
     - Build command: `npm run build && npm run export`
     - Publish directory: `out`
   - Click "Deploy site"

3. **Set up custom domain**
   - In Netlify dashboard, go to "Domain settings"
   - Click "Add custom domain"
   - Enter "flashcard.cristianecheverria.com"
   - Follow the instructions to configure DNS settings

## Adding or Modifying Flashcards

To add or modify flashcards, edit the `flashcards` array in `data/flashcards.json`. Each flashcard requires:

- `id`: Unique identifier
- `spanish`: Spanish word
- `english`: English translation
- `swedish`: Swedish translation
- `imageUrl`: Path to image (place images in `/public/images/`)
- `altText`: Alternative text for accessibility

This separation of data makes it easier to update your flashcard collection without modifying application code.

## Customization

- Change colors in `styles/Home.module.css`
- Modify layout and responsive behavior in CSS
- Change fonts for better accessibility if needed

## License

This project is open source and available for personal or educational use.
