import { useState } from "react";

export const InputFiltro = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    function debounce(func, wait) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    }

    const debouncedSearch = debounce(onSearch, 500); // 500ms de delay

    function handleInputChange(event) {
        const value = event.target.value;
        setSearchQuery(value);
        debouncedSearch(value);
    }

    return (
        <div className="relative w-1/3">
            <input
                type="text"
                id="search-input"
                placeholder="Procurar..."
                className="w-full bg-gray-700 rounded-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchQuery}
                onChange={handleInputChange}
            />
            <i className="fas fa-search absolute right-3 top-2.5 text-gray-400"></i>
        </div>
    );
};
