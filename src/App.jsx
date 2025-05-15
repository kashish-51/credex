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

function App() {


  return (
    <>
<Hero/>
<HowItWorks/>
<Features/>
<Testimonials/>
<ContactForm/>
<ChatWidget/>
    </>
  )
}

export default App
