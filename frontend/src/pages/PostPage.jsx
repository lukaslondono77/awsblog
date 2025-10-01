import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import './PostPage.css'

function PostPage() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPost()
  }, [id])

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/posts/${id}`)
      if (!response.ok) throw new Error('Post not found')
      const data = await response.json()
      setPost(data)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading article...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error">
        <h2>⚠️ Error Loading Article</h2>
        <p>{error}</p>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="post-page">
      <div className="container">
        <Link to="/" className="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Articles
        </Link>

        <article className="post-content">
          <header className="post-header">
            <div className="post-meta">
              <span className="category-badge">{post.category}</span>
              <span className="read-time">{post.readTime}</span>
            </div>
            
            <h1 className="post-title">{post.title}</h1>
            
            <div className="post-info">
              <time className="post-date">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
              <div className="post-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag">#{tag}</span>
                ))}
              </div>
            </div>
          </header>

          <div className="post-body">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <footer className="post-footer">
            <div className="share-section">
              <h3>Found this helpful?</h3>
              <p>Share this article with others preparing for AWS certification!</p>
            </div>
            <Link to="/" className="back-link-bottom">
              ← Browse More Articles
            </Link>
          </footer>
        </article>
      </div>
    </div>
  )
}

export default PostPage


