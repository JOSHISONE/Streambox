import MovieCard from "../component/MovieCard.jsx"
import MovieList from "../component/MovieList.jsx"

function Movies() {
    return (
    <div className= "min-h-screen bg-gray-800 px-4 py-4">
       <MovieList/>
       <MovieCard/>
    </div>
    );
}

export default Movies;