import LatestMovies from "../LatestMovies/LatestMovies";

const latestMoviesPromise=fetch('http://localhost:3000/latest-movies').then(res=>res.json())
const Home=()=>{
    return(
        <div>
          <h3>This is home</h3>
          <LatestMovies latestMoviesPromise={latestMoviesPromise}></LatestMovies>
        </div>
    )
}
export default Home;