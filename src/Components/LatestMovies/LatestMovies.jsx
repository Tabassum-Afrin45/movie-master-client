import { use } from "react";
import Movie from "../../Movie/Movie";

const LatestMovies=({latestMoviesPromise})=>{
    const movies=use(latestMoviesPromise)
    console.log(movies)
    return(
        <div>
            <h2 className="text-3xl text-green-700 font-semibold text-center pb-4">Latest Movies</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                movies.map(movie=><Movie
                    key={movie._id} movie={movie}
                />)
            }
            </div>
        </div>
    )
}
export default LatestMovies;