import { Link } from "react-router-dom";

export const LinksNavigator = () =>{
    return(
        <>
            <Link className="block text-white py-2 hover:text-purple-400" to="/filme">Filmes</Link>
            <Link className="block text-white py-2 hover:text-purple-400" to="/serie">Séries</Link>
            <Link className="block text-white py-2 hover:text-purple-400" to="/popular">Popular</Link>
        </>
    )
}