import { useRef, useState, useEffect} from "react";
import { Link, useNavigate} from "react-router-dom";
import { LinksNavigator } from "./LinksNavigator";
import { InputFiltro } from "../filter/InputFiltro";
import { useSearch } from "../../contexts/SearchContext";
import { buscarTodosOsFilmes } from "../../services/api";

export const Menu = () => {
    const [filmes, setFilmes] = useState([]);
    
      useEffect(() => {
        async function carregarFilmes() {
          const lista = await buscarTodosOsFilmes();
          setFilmes(lista);
        }
    
        carregarFilmes();
      }, []);


    const { setSearchResults } = useSearch();
    const navigate = useNavigate();
    const mobileMenuRef = useRef(null);

    function toggleMobileMenu() {
        if (mobileMenuRef.current) {
            mobileMenuRef.current.classList.toggle('hidden');
        }
    }
    
    function handleSearch(query) {
        const results = filmes.filter(movie =>
          movie.title.toLowerCase().includes(query.toLowerCase())
        );
        console.log(results)
        setSearchResults(results);
        navigate("/resultados");
      }

    return (
        <nav className="bg-gray-800 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center flex-wrap">
                
                <i className="fas fa-film text-purple-400 text-3xl"></i>
                <div className="flex space-x-2">
                    <Link to="/" className="text-white text-xl font-bold">DreaMovies</Link>
                </div>

                <div className="hidden md:flex space-x-6">
                    <LinksNavigator className="text-white hover:text-purple-400"/>
                </div>

                <div className="w-full md:w-1/3 mt-2 md:mt-0">
                    <InputFiltro onSearch={handleSearch} />
                </div>

                <div className="md:hidden mt-2 md:mt-0">
                    <button className="text-white" onClick={toggleMobileMenu}>
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>

            <div ref={mobileMenuRef} className="hidden md:hidden bg-gray-800 px-4 pb-4">
                <LinksNavigator />
            </div>
        </nav>
    );
};