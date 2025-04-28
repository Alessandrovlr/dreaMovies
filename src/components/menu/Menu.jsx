import { Link } from "react-router-dom";

// export const Menu = () => {
//   return (
//     <nav>
//       <div className="flex gap-[70px]">
//         <Link to="/" >
//           Home
//         </Link>
//         <Link to="/filme" >
//           Filmes
//         </Link>
//         <Link to="/serie" >
//           Series
//         </Link>
//         <Link to="/popular" >
//           Populares
//         </Link>
//       </div>
//     </nav>
//   );
// };


export const Menu = () =>{
    return(
        <nav class="bg-gray-800 shadow-lg sticky top-0 z-50">
            <div class="container mx-auto px-4 py-3 flex justify-between items-center">
                <div class="flex items-center space-x-2">
                {/* <i class="fas fa-film text-purple-500 text-2xl"></i> */}
                    <Link to="/" >DreaMovies</Link>
                </div>
                <div class="hidden md:flex space-x-6">
                    <Link to="/filme" >Filmes</Link>
                    <Link to="/serie" >Séries</Link>
                    <Link to="/popular" >Popular</Link>
                </div>
                <div class="relative w-1/3">
                    <input
                        type="text" 
                        id="search-input" 
                        placeholder="Procurar..." 
                        class="w-full bg-gray-700 rounded-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        onkeyup="debounceSearch(event)"
                    />
                    <i class="fas fa-search absolute right-3 top-2.5 text-gray-400"></i>
                </div>
                <button class="md:hidden text-white" onclick="toggleMobileMenu()">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>
           
            {/* <div id="mobile-menu" class="hidden md:hidden bg-gray-800 px-4 pb-4">
                <Link to="/filme" >Filmes</Link>
                <Link to="/serie" >Séries</Link>
                <Link to="/popular" >Popular</Link>
            </div> */}
        </nav>
    )
}