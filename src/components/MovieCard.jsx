import { Link } from "react-router";

const MovieCard = ({movie}) => {
    const {_id, title, genre, posterUrl } =movie
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="p-4">
                <img
                    src={posterUrl}
                    alt="Movies"
                    className="rounded-xl h-110 w-full" />
            </figure>
            <div className="card-body text-center">
                <div className="flex items-center gap-30 mx-auto"><h2 className="card-title">{title}</h2>
                <h4>{genre}</h4></div>
                <div className="card-actions">
                    <Link to={`/movieDetails/${_id}`} className="btn btn-primary bg-green-700 w-full mt-2">View Details</Link>
                </div>
            </div>
        </div>
    )
}
export default MovieCard;