# Movie App

A modern movie application built with React, TypeScript, and Vite. This app provides an intuitive interface to browse, search, and discover movies using The Movie Database (TMDB) API.

## Features

- Browse trending movies
- Search for movies
- View movie details, cast, and trailers
- Responsive design with dark/light theme support
- Smooth animations with Framer Motion
- Lazy loading images for better performance

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **API**: TMDB API
- **Icons**: React Icons
- **Image Loading**: React Lazy Load Image Component

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rj267/movie-app.git
   cd movie-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your TMDB API key:
   ```
   VITE_TMDB_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build

## Project Structure

```
src/
├── common/          # Reusable components
├── constants/       # App constants
├── context/         # React contexts
├── hooks/           # Custom hooks
├── pages/           # Page components
├── services/        # API services
├── styles/          # Styling utilities
└── utils/           # Helper functions
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private.

## Author

Rijin Johnson