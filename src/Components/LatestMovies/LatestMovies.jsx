import { useEffect, useState } from "react";
import Movie from "../../Movie/Movie";

const LatestMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/latest-movies")
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {movies.map(movie => <Movie key={movie._id} movie={movie} />)}
    </div>
  );
};

export default LatestMovies;
