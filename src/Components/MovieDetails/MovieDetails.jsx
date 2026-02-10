import { useLoaderData } from "react-router";

const MovieDetails=()=>{
    const movie= useLoaderData()
    console.log(movie)
    return(
        <div>

        </div>
    )
}
export default MovieDetails;