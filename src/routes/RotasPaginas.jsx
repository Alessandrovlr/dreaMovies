import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "../components/layout/Layout"
import { Home } from "../pages/Home"
import { Filme } from "../pages/Filme"
import { Serie } from "../pages/Serie"
import { Popular } from "../pages/Popular"
import { FilmeEscolhido } from "../pages/FilmeEscolhido"
import { Resultado } from "../pages/Resultado"
import { PageNotFound } from "../pages/PageNotFound"


export const RotasPaginas = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home/>} />
                    <Route path="/filme" element={<Filme/>} />
                    <Route path="/serie" element={<Serie/>} />
                    <Route path="/popular" element={<Popular />} />
                    <Route path="/filmeEscolhido/:id" element={<FilmeEscolhido />} />
                    <Route path="/resultados" element={<Resultado />} />
                    <Route path="/*" element={<PageNotFound />} />
                  </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}