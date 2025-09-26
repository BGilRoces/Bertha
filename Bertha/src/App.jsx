import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import AboutBertha from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Gallery />
      <Menu />
  <AboutBertha />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
