import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex flex-col justify-center w-[100%] h-[100%]">
      <main className="flex flex-col justify-center gap-[10%] items-center mx-auto px-4 py-8">
          <h1 className="text-6xl font-bold mb-4">Bem vindo a DreaMovies</h1>
          <p className="text-2xl text-gray-300 mb-8">
            Descubra, explore e diverta-se no mundo do cinema
          </p>

          <Link to="/filme" className="p-[2.5%] font-bold decoration-0 rounded-2xl bg-[rgb(117,47,163)] text-3xl text-white">
            Buscar Filmes -{">"}
          </Link>

          {/* <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition transform hover:scale-105">
                        Buscar Filmes <i class="fas fa-arrow-right ml-2"></i>
                    </button> */}
      </main>
    </div>
  );
};

// tentando arrumar a merda q eu fiz