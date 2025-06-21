import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
        {/* Add more sections as needed */}
      </main>
    </>
  )
}
export default App