import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">
            <p>&copy; 2025 AWS Solutions Architect Learning Hub. Built for educational purposes.</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App


