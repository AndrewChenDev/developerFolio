import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog }) {
  function openUrlInNewTab(url) {
    if(url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }
  const trimDesc = blog.description.replace(/(<([^>]+)>)/gi, " ");
  return (
    <div>
      <div class="blog-container" onClick={() => openUrlInNewTab(blog.url)}>
        <a class="blog-card" href={blog.url} >
          <h3 className="blog-title">{blog.title}</h3>
          <p class="small" dangerouslySetInnerHTML={{__html: trimDesc}}></p>
          <div class="go-corner" >
            <div class="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
