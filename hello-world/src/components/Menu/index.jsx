import { Link, useLocation } from "react-router-dom"
import './Menu.css'
import MenuLink from "../MenuLink";

const Menu = () => {

    return(
        <header>
            <nav className="navigation">
                <MenuLink to="/">Inicio</MenuLink>
                <MenuLink to="/sobremim">Sobre Mim</MenuLink>
            </nav>
        </header>
    )
}

export default Menu