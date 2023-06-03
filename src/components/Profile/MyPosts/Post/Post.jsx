import React from "react";
import styles from '../Post/Post.module.css'


function Post(props) {
    return (      
      <div className={styles.item}>
            <img src='https://thumbs.gfycat.com/DefiantBriefHarpyeagle-size_restricted.gif' />
            {props.message}

        <div>
          <span>like</span> {props.likesCounts}
        </div>
        

      </div>
    )
}


export default Post;