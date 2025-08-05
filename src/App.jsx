import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import ChatWidget from './components/ChatWidget'
import Navbar from './components/Navbar';

function App() {


  return (
    <>
       <Navbar />

      {/* Home Section */}
      <section id="home" className="pt-10 scroll-mt-20">
        <Hero />
      </section>

      {/* Features Section */}
      <section id="features" className="scroll-mt-20">
        <Features />
      </section>

      {/* How It Works Section */}
      <section id="howitworks" className="scroll-mt-20">
        <HowItWorks />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <ContactForm />
      </section>
<Testimonials/>
<ChatWidget/>
    </>
  )
}

export default App
