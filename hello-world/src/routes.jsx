import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import AboutMe from './pages/AboutMe'
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import DefaultPage from "./components/DefaultPage"




function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        {/* Rotas aninhadas */}
        <Route path="/" element={<DefaultPage/>}>
          <Route index element={<HomePage />} />
          <Route path="sobremim" element={<AboutMe />} />
        </Route>
        <Route path="*" element={<p style={{color: 'red'}}>Página Não Encontrada</p>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes
