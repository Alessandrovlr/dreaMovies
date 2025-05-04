import { Link } from "react-router-dom"

export const SerieCard = ({ seriesVisiveis }) =>{
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {seriesVisiveis.map((serie) => (
          <Link to={`/serieEscolhido/${serie.id}`} key={serie.id}>
            <div className="bg-gray-800 text-white rounded-lg shadow-md p-4 transition hover:scale-105 hover:bg-purple-700">
              <h2 className="text-xl font-bold mb-2">{serie.name || serie.title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.name || serie.title}
                className="w-full h-auto rounded mb-2"
              />
              <p><span className="font-bold">Data:</span> {serie.first_air_date}</p>
              <p><span className="font-bold">Nota:</span> {serie.vote_average.toFixed(1)} <i className="fa fa-star text-yellow-500"></i></p>
            </div>
          </Link>
        ))}
      </div>
    )
}