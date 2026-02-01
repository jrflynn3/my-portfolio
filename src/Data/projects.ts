import movieImage from "../Assets/Images/movie-app.png";
import realEstateImage from "../Assets/Images/real-estate-app.png";
import fastFoodImage from "../Assets/Images/fast-food.png";

export const projects = [
  {
    name: "Real Estate",
    description: "Search for real estate in this minimal cross-platform app",
    features: ["React Native", "Google Auth", "Appwrite", "Tailwind"],
    link: "https://github.com/jrflynn3/real-estate",
    src: realEstateImage,
  },
  {
    name: "Movie Discovery",
    description: "Discover new and trending movies from the Movie Database",
    features: ["React Native", "3rd Party API", "Appwrite", "Tailwind"],
    link: "https://github.com/jrflynn3/movies",
    src: movieImage,
  },
  {
    name: "Food Ordering",
    description: "Order your favorite entrees in this simple food ordering app",
    features: ["React Native", "Appwrite", "Tailwind"],
    link: "https://github.com/jrflynn3/fast-food",
    src: fastFoodImage,
  },
];
