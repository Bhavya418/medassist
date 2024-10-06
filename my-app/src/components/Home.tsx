import Carousel from './Carousel'
import Hero from './Hero';
import Facts from './Facts'
// import Platforms from './components/Platforms'
import Footer from './Footer'
import Testimonials from './Testimonials';
import Navbar from './Navbar';
import Top from './Top';

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-6">
      <Top/>
      <Navbar/>
      <Carousel/>
      <Hero/>
      <Facts/>
      <Testimonials/>
      <Footer/> 
    </div>
  )
}

export default Home
