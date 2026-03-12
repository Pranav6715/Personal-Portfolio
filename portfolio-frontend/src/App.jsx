import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'

function App() {
    return (
        <Router>
            <div className="App overflow-x-hidden min-h-screen transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-[#0a192f] dark:text-white selection:bg-[#ff7b00] selection:text-white">
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <main>
                            <Hero />
                            <About />
                            <Skills />
                            <Education />
                            <Projects />
                            <Experience />
                            <Contact />
                        </main>
                    } />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
