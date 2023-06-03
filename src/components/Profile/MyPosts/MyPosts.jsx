import React from "react";
import styles from '../MyPosts/MyPosts.module.css'
import Post from "./Post/Post";


function MyPosts() {
    return (      
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={styles.posts}>
          <Post message='Hi, how are you?' likesCounts='0'/>
          <Post message='It`s my first post' likesCounts='23'/>

        </div>
      </div>
    
    )
}


export default MyPosts;