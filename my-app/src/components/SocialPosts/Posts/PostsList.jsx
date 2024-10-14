import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Posts from './Posts';
import {addPosts} from './Page.slice'


export default function PostsList(){
    const dispatch  = useDispatch()    
    const [ title   , setTitle   ] = useState('')
    const [ content , setContent ] = useState('')

    const handlePosts =( )=>{
        if(title.length > 0 && content.length >0 )
        {
            dispatch( addPosts({title , content}))
        }
    }
    return (

        <section>
              <h2>Add a New Post</h2>
          
          <form>
          
            <label htmlFor="postTitle">Post Title</label>
          
            <input type="text" id="postTitle" 
                value={title} onChange={(e)=>{ return setTitle(e.target.value)}}
                name="postTitle" />
    
            <label htmlFor="postAuthor">Author:</label>

            <select id="postAuthor">

              <option value=""></option>
            
            </select>
    
            <label> Content: </label>
            
            <textarea
            
            id="postContent"
              name="postContent"
              value={content} onChange={(e)=>{ return setContent(e.target.value)}}
            />
            
            <button type="button" onClick={()=>{ handlePosts() }}>
              Save Post
            </button>
         
          </form>

          <Posts />
        
        </section>
      );
}
