import React, { useState, useEffect } from 'react'
import BlogCard from '../components/BlogCard'
import './HomePage.css'

function HomePage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchPosts()
    fetchCategories()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts')
      if (!response.ok) throw new Error('Failed to fetch posts')
      const data = await response.json()
      setPosts(data)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories')
      if (!response.ok) throw new Error('Failed to fetch categories')
      const data = await response.json()
      setCategories(data)
    } catch (err) {
      console.error('Error fetching categories:', err)
    }
  }

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading AWS learning content...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error">
        <h2>⚠️ Error Loading Posts</h2>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Master AWS Solutions Architecture</h1>
          <p className="hero-subtitle">
            Comprehensive guides and tutorials to help you become a certified AWS Solutions Architect
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">{posts.length}</span>
              <span className="stat-label">Articles</span>
            </div>
            <div className="stat">
              <span className="stat-number">{categories.length}</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Free</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="category-filter" id="categories">
          <button
            className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Articles
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="posts-grid">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="no-posts">
            <p>No articles found in this category.</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default HomePage


