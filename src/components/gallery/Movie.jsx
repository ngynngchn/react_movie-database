import "./Movie.css";

const Movie = (props) => {
	return (
		<section className="Movie">
			<h2>{props.title}</h2>
			<p>{props.year}</p>
			<p>{props.director}</p>
			<p>{props.duration}</p>
			<p>{props.genre}</p>
			<p>{props.rate}</p>
		</section>
	);
};

export default Movie;
