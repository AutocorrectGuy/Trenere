import React from "react"
import Footer from "../partials/Footer/Footer"
import Navigation from "../partials/Navigation/Navigation"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


export default function LandingPage() {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  // const bg1 = "bg-[#070513]"
  // const verticalGradient = "bg-gradient-to-b from-[#815C82] to-[#41104E]"
  return (
    <>
      <Navigation />
      <div className={`flex flex-col items-center justify-center font-monsterrat`}>
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
      <Footer />
    </>
  )
}