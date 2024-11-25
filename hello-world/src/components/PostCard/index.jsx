import { Link } from "react-router-dom"
import "./Post.css"
import Button from "../Button"

const PostCard = ({post}) => {
    return(
        <Link to={`/posts/${post.id}`}>
            <div>
                <img src="" alt="foto do post"/>
                <h3>{post.titulo}</h3>
                <Button children="Saiba mais"/>
            </div>
        </Link>

    )
}

export default PostCard