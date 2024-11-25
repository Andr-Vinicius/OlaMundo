import { Link } from "react-router-dom"
import "./Post.css"

const PostCard = ({post}) => {
    return(
        <Link to={`/posts/${post.id}`}>
            <div>
                <img src="" alt="foto do post"/>
                <h3>{post.titulo}</h3>
                <button>Saiba mais</button>
            </div>
        </Link>

    )
}

export default PostCard