import React from 'react'
import { Link } from 'react-router-dom'
import './BlogCard.css'

function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <div className="blog-card-header">
        <span className="category-badge">{post.category}</span>
        <span className="read-time">{post.readTime}</span>
      </div>
      
      <h2 className="blog-card-title">
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h2>
      
      <p className="blog-card-excerpt">{post.excerpt}</p>
      
      <div className="blog-card-footer">
        <div className="tags">
          {post.tags.map((tag, index) => (
            <span key={index} className="tag">#{tag}</span>
          ))}
        </div>
        <time className="date">{new Date(post.date).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</time>
      </div>
      
      <Link to={`/post/${post.id}`} className="read-more">
        Read Article
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </article>
  )
}

export default BlogCard


