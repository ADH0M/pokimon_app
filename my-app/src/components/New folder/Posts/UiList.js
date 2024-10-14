import { useSelector } from "react-redux";
import PostsAuter from "./PostsAuter";

function UiList() {
    const posts = useSelector((state) => state.posts);



    return (
        <section>
            <h2>Posts</h2>
            {posts.map((post) => (
                <article key={post.id}>
                    <h3>{post.title}</h3>
                    <div className="post-content">
                        <p>{post.content}</p>
                        <button >
                            X
                        </button>
                    </div>
                    <PostsAuter post={post} />
                </article>
            ))}
        </section>
    );
}

export default UiList;


