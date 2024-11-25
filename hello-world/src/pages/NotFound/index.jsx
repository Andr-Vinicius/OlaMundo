import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"

const NotFound = () => {
    const navegate = useNavigate()

    return (
        <div>
            <span>404</span>
            <h1>Ops! Página não encontrada</h1>
            <div onClick={() => navegate("/")}>
                <Button children="Voltar"/>   
            </div>
        </div>
    )
}

export default NotFound