import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "../components/layout/Layout"
import { Home } from "../pages/Home"
import { Filme } from "../pages/Filme"
import { Serie } from "../pages/Serie"
import { Popular } from "../pages/Popular"
import { FilmeEscolhido } from "../pages/FilmeEscolhido"
import { Resultado } from "../pages/Resultado"
import { PageNotFound } from "../pages/PageNotFound"
import { SerieEscolhido } from "../pages/SerieEscolhido"
import { ResultadosFilme } from "../pages/ResultadosFilme"
import { ResultadosSerie } from "../pages/ResultadosSerie"


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
                    <Route path="/filmeEscolhido/:id" element={<FilmeEscolhido/>}/>
                    <Route path="/serieEscolhido/:id" element={<SerieEscolhido/>}/>
                    <Route path="/resultado" element={<Resultado />} />
                    <Route path="/resultadosfilme" element={<ResultadosFilme/>} />
                    <Route path="/resultadosserie" element={<ResultadosSerie/>} />
                    <Route path="/*" element={<PageNotFound />} />
                  </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}