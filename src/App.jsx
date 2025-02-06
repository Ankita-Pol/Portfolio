import './App.css'
import { ThemeProvider } from './common/ThemeContext'
import Contact from './sections/Contact/Contact'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Footer from './sections/Footer/Footer'


function App() {
 

  return (
    <ThemeProvider>
         <Hero/>
         <Projects/>
         <Skills/>
         <Contact/>
         <Footer/>
    </ThemeProvider>
     

  )
}

export default App
