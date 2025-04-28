import { Link } from "react-router-dom";
export const Home = () =>{
    return(
        <div id="app">
        
        <main class="container mx-auto px-4 py-8">
            <div id="content" class="fade-in">
            
                <div class="text-center py-12">
                    <h1 class="text-4xl font-bold mb-4">Bem vindo a DreaMovies</h1>
                    <p class="text-xl text-gray-300 mb-8">Descubra, explore e diverta-se no mundo do cinema</p>
                    <Link to="/filme" >Buscar Filmes</Link>
                    {/* <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition transform hover:scale-105">
                        Buscar Filmes <i class="fas fa-arrow-right ml-2"></i>
                    </button> */}
                </div>
            </div>
        </main>
    </div>
    )
}