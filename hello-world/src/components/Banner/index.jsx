import "./Banner.css"

const Banner = () => {
    return(
        <div className="banner">
            <div className="apresentacao">
                <h1>Blog pessoal</h1>
                <p>Bem vindos ao meu blog pessoal, 
                por favor confiram o conteúdo abaixo</p>
            </div>
            <div className="images">
                <img  
                    className="perfil" 
                    src="../../../public/foto_perfil.jpg" 
                    alt="Foto de perfil"      
                />
            </div>
        </div>
    )
}

export default Banner