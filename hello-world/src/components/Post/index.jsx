import "./Post.css"

const Post = ({post}) => {
    return(
        <div>
            <img src="" alt="foto do post"/>
            <h3>{post.titulo}</h3>
            <button>Saiba mais</button>
        </div>
    )
}

export default Post