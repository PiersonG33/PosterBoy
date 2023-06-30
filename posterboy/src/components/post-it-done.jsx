import React from 'react';
import PostIt from './post-it';


// "content" is the text inside the post-it
function PostItDone({author, content}) {
    return <PostIt body={<div><b>{author}</b> {content}</div>} />;
  }

export default PostItDone