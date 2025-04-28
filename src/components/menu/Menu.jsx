import { useRef } from "react";
import { Link } from "react-router-dom";
import { LinksNavigator } from "./LinksNavigator";

export const Menu = () => {
    const mobileMenuRef = useRef(null);

    function toggleMobileMenu() {
        if (mobileMenuRef.current) {
            mobileMenuRef.current.classList.toggle('hidden');
        }
    }

    function debounceSearch(event) {
        console.log('Procurando:', event.target.value);
    }

    return (
        <nav className="bg-gray-800 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                
                <div className="flex items-center space-x-2">
                    <Link to="/" className="text-white text-xl font-bold">DreaMovies</Link>
                </div>

                <div className="hidden md:flex space-x-6">
                    <LinksNavigator className="text-white hover:text-purple-400"/>
                </div>

                <div className="relative w-1/3">
                    <input
                        type="text"
                        id="search-input"
                        placeholder="Procurar..."
                        className="w-full bg-gray-700 rounded-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        onKeyUp={debounceSearch}
                    />
                    <i className="fas fa-search absolute right-3 top-2.5 text-gray-400"></i>
                </div>

                <button className="md:hidden text-white" onClick={toggleMobileMenu}>
                    <i className="fas fa-bars text-2xl"></i>
                </button>
            </div>

            <div ref={mobileMenuRef} className="hidden md:hidden bg-gray-800 px-4 pb-4">
                <LinksNavigator/>
            </div>
        </nav>
    );
};