import { Link, useLocation } from "react-router-dom"
import "./MenuLink.css"

const MenuLink = ({children, to}) => {
    const location = useLocation();
    return (
        <Link 
            to={to} 
            className={location.pathname === to ? "link-selected": ""}>
            {children}
        </Link>
    )
}

export default MenuLink