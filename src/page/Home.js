import Feature from "../components/Feature"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Process from "../components/Process"
import Services from "../components/Services"
import Testimonial from "../components/Testimonial"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <Services />
      <Process />
      <Testimonial />
      <Footer />
    </>
  )
}
