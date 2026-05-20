import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <About />

      <Portfolio />

      {/* THIS IS THE 4-CARD SECTION */}
      <section id="skills">
        <Skills />
      </section>

      {/* THIS IS THE EXPERIENCE TIMELINE */}
      <Experience />

      <Contact />

      <Footer />
    </>
  )
}

export default App