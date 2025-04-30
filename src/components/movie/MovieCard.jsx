export const MovieCard = ({ movie }) => {
    const posterUrl = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "https://via.placeholder.com/500x750?text=No+Poster";
  
    return (
      <div
        className="movie-card bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition"
        onClick={() => console.log("Detalhes de:", movie.id)}
      >
        <div className="relative pb-150">
          <img
            src={posterUrl}
            alt={movie.title}
            className="absolute h-full w-full object-cover"
            onError={(e) =>
              (e.target.src = "https://via.placeholder.com/500x750?text=Poster+Not+Available")
            }
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1 truncate">{movie.title}</h3>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>{movie.release_date?.split("-")[0] || "N/A"}</span>
            <span className="flex items-center">
              <i className="fas fa-star text-yellow-400 mr-1"></i>
              {movie.vote_average > 0 ? movie.vote_average.toFixed(1) : "N/A"}
            </span>
          </div>
        </div>
      </div>
    );
  };
  