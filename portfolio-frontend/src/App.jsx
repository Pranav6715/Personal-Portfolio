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
import { useTheme } from './context/ThemeContext'

function App() {
    const { isDarkMode } = useTheme();

    return (
        <Router>
            <div className={`App overflow-x-hidden min-h-screen transition-colors duration-500 bg-[#f8fafc] dark:bg-[#030014] text-slate-800 dark:text-slate-200 selection:bg-[#ff7b00] selection:text-white relative ${isDarkMode ? 'dark' : ''}`}>
                {/* Global Background Glows */}
                <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#ff7b00]/10 blur-[120px]"></div>
                    <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#00c3ff]/10 blur-[100px]"></div>
                    <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-[#2506ad]/10 blur-[150px]"></div>
                </div>

                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <main className="relative z-10">
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
