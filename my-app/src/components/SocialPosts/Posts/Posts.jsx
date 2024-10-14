import React from 'react';
import { useSelector } from 'react-redux';

function Posts(){
    const post = useSelector((state)=>{ return state.posts })
    const p = post.map(
        (item)=>{
            return item.content
        }
    )

    console.log(p);
    return (
        <section>
            <h2>Posts</h2>
            {
                post.map((item)=>(
                    <div>

                    <p>{item.title}</p>
                    <p>{item.content}</p>
                    </div>

                ))
            }
        </section>
    );
}
export default Posts