import Banner from "../../components/Banner"
import Post from "../../components/Post"
import posts from "../../json/posts.json"

const HomePage = () => {
    return(
        <ul>
            {posts.map(post => 
                <li key={post.id}>
                    <Post post={post}/>
                </li>
            )}
        </ul>
    )
}

export default HomePage