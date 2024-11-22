import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import AboutMe from './pages/AboutMe'
import Menu from "./components/Menu"




function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobremim" element={<AboutMe />} />
        <Route path="*" element={<p style={{color: 'red'}}>Página Não Encontrada</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
