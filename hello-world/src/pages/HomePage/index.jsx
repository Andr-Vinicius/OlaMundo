import Banner from "../../components/Banner"
import PostCard from "../../components/PostCard"
import posts from "../../json/posts.json"

const HomePage = () => {
    return(
        <ul>
            {posts.map(post => 
                <li key={post.id}>
                    <PostCard post={post}/>
                </li>
            )}
        </ul>
    )
}

export default HomePage