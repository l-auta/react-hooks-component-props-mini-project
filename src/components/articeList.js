import React from "react";
import Article from "./article";

function ArticleList({posts}){
    return(
    <main>
    {posts.map(post => (
      <Article
        key={post.id} // Unique key for each post
        title={post.title}
        date={post.date}
        preview={post.preview}
      />
    ))}
  </main>
  )
}

export default ArticleList