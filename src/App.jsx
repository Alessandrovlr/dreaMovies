import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout/Layout"
import { Filme } from "./pages/Filme"
import { Serie } from "./pages/Serie"
import { Popular } from "./pages/Popular"
import { PageNotFound } from "./pages/PageNotFound"
import { Home } from "./pages/home"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="/filme" element={<Filme />} />
            <Route path="/serie" element={<Serie />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
