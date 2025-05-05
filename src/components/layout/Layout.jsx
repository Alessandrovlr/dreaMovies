import { Outlet } from "react-router-dom";
import { Menu } from "../menu/Menu";

export const Layout = () => {
  return (
    <div>
      <Menu />
      <main className="flex flex-col justify-center items-center">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-gray-400 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-white mb-2">DreaMovies</h3>
                        <p>Seu catálogo de filmes dos Sonhos</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-white transition"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-white transition"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:text-white transition"><i className="fab fa-github"></i></a>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm">
                    <p>&copy; 2025 DreaMovies. Todos os direitos reservados. Dados obtidos de <a href="https://www.themoviedb.org/">TMDB API</a>.</p>
                </div>
            </div>
        </footer>
    </div>
  );
};