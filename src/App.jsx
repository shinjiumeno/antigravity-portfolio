import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <main>
        <Hero />
        <Profile />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}

export default App
