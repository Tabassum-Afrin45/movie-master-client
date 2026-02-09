import { use } from "react";

const LatestMovies=({latestMoviesPromise})=>{
    const movies=use(latestMoviesPromise)
    console.log(movies)
    return(
        <div>
        </div>
    )
}
export default LatestMovies;