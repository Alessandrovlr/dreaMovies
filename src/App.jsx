import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projeto" element={<Projeto />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
