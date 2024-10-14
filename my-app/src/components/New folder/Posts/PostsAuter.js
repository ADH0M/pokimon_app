import React from 'react';

function PostsAuter({post}){
    return (
        <>
            <span>by {post.authorName || "Anonymous"}</span>;
        </>
    )
}

export default PostsAuter