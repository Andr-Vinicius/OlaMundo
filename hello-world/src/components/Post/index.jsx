import { useParams } from "react-router-dom"
import posts from "../../json/posts.json"
import PostModel from "../PostModel"
import ReactMarkdown from "react-markdown"

const Post = () => {

    const parameters = useParams() 
    const post = posts.find((post) =>{
        return post.id === Number(parameters.id)
    })

    // Se for undefined
    if (!post){
        return <h1>Post não encontrado...</h1>
    }

    return (
        <PostModel titulo={post.titulo}>
            <ReactMarkdown>
                {post.texto}
            </ReactMarkdown>
        </PostModel>
    )
}

export default Post