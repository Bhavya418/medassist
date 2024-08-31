
import './App.css'
import Top from './components/Top'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Hero from './components/Hero';
import Facts from './components/Facts'
import Platforms from './components/Platforms'

function App() {


  return (
    <>
    <div className="w-full flex flex-col items-center justify-center mt-6 py-8">

      <Top/>
      <Navbar/>
      <Carousel/>
      <Hero/>
      <Facts/>
      <Platforms/>
      </div>  
    </>
  )
}

export default App
