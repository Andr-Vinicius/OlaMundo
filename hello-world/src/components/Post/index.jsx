import { useParams } from "react-router-dom"
import posts from "../../json/posts.json"
import PostModel from "../PostModel"
import ReactMarkdown from "react-markdown"
import NotFound from "../../pages/NotFound"
import DefaultPage from "../DefaultPage"

const Post = () => {

    const parameters = useParams() 
    const post = posts.find((post) =>{
        return post.id === Number(parameters.id)
    })

    //const recommendedPost = post.filter((post) => post.id !== Number(parameters.id))
        //.sort((a, b) => b.id - a.id)
        //.slice(0, 4)

    // Se for undefined
    if (!post){
        return <NotFound/>
    }

    return (
        <Routes>
            <Route path="*" element={<DefaultPage/>}>
                <Route index element={
                    <PostModel titulo={post.titulo}>
                        <ReactMarkdown>
                            {post.texto}
                        </ReactMarkdown>
                    </PostModel>
                }/>
            </Route>
        </Routes>

    )
}

export default Post