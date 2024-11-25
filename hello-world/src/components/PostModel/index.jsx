import "./PostModel.css"

const PostModel = ({titulo, children}) =>{
    return (
        <article>
            <div>
                <img src="" alt="foto-capa"></img>
            </div>
            <h2>
                {titulo}
            </h2>
            <div>
                {children}
            </div>
        </article>
    )
}

export default PostModel