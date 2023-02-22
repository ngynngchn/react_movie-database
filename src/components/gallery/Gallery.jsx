// import data from data file
import movies from "./data.js";

//import Movie Card Component
import Movie from "./Movie.jsx";

// import unqique key
import { v4 as uuidv4 } from "uuid";
// import styles

import "./Gallery.css";

const Gallery = () => {
	console.log(movies);
	console.log("movies", movies);
	return (
		<main className="Gallery">
			{movies.map((movie) => {
				let updatedMovie = { ...movie, genre: movie.genre.join(" ") };
				movie.genre.map((genre) => {
					console.log(genre);
				});
				return <Movie {...updatedMovie} key={uuidv4()} />;
			})}
			<h1>Hallo</h1>
		</main>
	);
};

export default Gallery;
