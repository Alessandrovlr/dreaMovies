import { Outlet } from "react-router-dom";
import { Menu } from "../menu/Menu";

export const Layout = () => {
  return (
    <div className="h-[100dvh]">
      <Menu />
      <main className="flex flex-col items-center h-[87%]">
        <Outlet />
      </main>
      <footer class="bg-gray-800 text-gray-400 py-8">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="mb-4 md:mb-0">
                        <h3 class="text-xl font-bold text-white mb-2">DreaMovies</h3>
                        <p>Seu catálogo de filmes dos Sonhos</p>
                    </div>
                    <div class="flex space-x-6">
                        <a href="#" class="hover:text-white transition"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="hover:text-white transition"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="hover:text-white transition"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="hover:text-white transition"><i class="fab fa-github"></i></a>
                    </div>
                </div>
                <div class="mt-8 text-center text-sm">
                    <p>&copy; 2025 DreaMovies. Todos os direitos reservados. Dados obtidos de <a href="https://www.themoviedb.org/">TMDB API</a>.</p>
                </div>
            </div>
        </footer>
    </div>
  );
};