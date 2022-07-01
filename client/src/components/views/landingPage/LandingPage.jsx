import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"

export default function LandingPage() {

  const bg1 = "bg-[#070513]"
  const verticalGradient = "bg-gradient-to-b from-[#815C82] to-[#41104E]"
  return (
    <div className={`flex flex-col items-center justify-center ${verticalGradient} font-monsterrat`}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  )
}