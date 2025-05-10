🎬 Movie Search App with TMDB API

React
Vite
Tailwind CSS
Vercel

A responsive movie search application that connects to The Movie Database (TMDB) API, featuring trending movies and search functionality.
✨ Features

    🔍 Search movies by title

    🎬 Browse trending daily movies

    ⚡ Fast loading with React suspense

    🌙 Dark/light mode ready (via Tailwind)

    🔒 Secure API calls through Vercel proxy

🚀 Live Demo

Vercel Deployment
🛠️ Tech Stack

    Frontend: React + Vite

    Styling: Tailwind CSS

    API: TMDB API

    Deployment: Vercel

    Routing: React Router

    State Management: React Hooks

📦 Project Structure

movie-search-app/
├── api/
│   └── tmdb/
│       └── route.js       # Vercel serverless function
├── src/
│   ├── components/        # React components
│   ├── services/         # API service layer
│   ├── App.jsx           # Main application
│   └── main.jsx          # Entry point
├── public/               # Static assets
├── vite.config.js        # Vite configuration
└── package.json

🏁 Getting Started
Prerequisites

    Node.js (v16+ recommended)

    TMDB API bearer token

Installation

    Clone the repository

bash

git clone https://github.com/your-username/movie-search-app.git
cd movie-search-app

    Install dependencies

bash

npm install

    Create environment file

bash

echo "VITE_TMDB_ACCESS_TOKEN=your_tmdb_token_here" > .env.local

    Run development server

bash

npm run dev

🔧 Configuration
Environment Variables
Variable Name	Description
VITE_TMDB_ACCESS_TOKEN	TMDB API bearer token (frontend)
TMDB_ACCESS_TOKEN	TMDB API bearer token (serverless function)
Deploying to Vercel

    Push your code to GitHub

    Import the repository in Vercel

    Add environment variables in Vercel dashboard

    Deploy!

🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.
📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

Made from a guy too lazy to make a readme by Micah | GitHub
