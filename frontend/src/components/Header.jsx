import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="logo-text">
              <h1>AWS Solutions Architect</h1>
              <p>Learning Hub</p>
            </div>
          </Link>
          
          <nav className="nav">
            <Link to="/" className="nav-link">Articles</Link>
            <a href="#categories" className="nav-link">Categories</a>
            <a href="https://aws.amazon.com/certification/certified-solutions-architect-associate/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="nav-link">Certification</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header


