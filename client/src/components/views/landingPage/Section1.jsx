import bgImage from "../../../assets/base64/yoga_1.png"
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faCalculator, faDumbbell, faHandshake } from "@fortawesome/free-solid-svg-icons"

const BOTTOM_ITEMS = [
  {
    p: "Algoritmizēta treniņu programma",
    icon: faCalculator
  },
  {
    p: "Personalizēta treniņu programma",
    icon: faBook
  },
  {
    p: "Privātie fitnesa treniņi",
    icon: faDumbbell
  },
  {
    p: "Sadarbība",
    icon: faHandshake
  }



]

export default function Section1() {

  const TypewriterHook = () => {
    const { text } = useTypewriter({
      words: ["Atlētiskākai", "Veselīgākai", "Spēcīgākai", "Skaistākai", "Mundrākai"],
      loop: 0, //infinet loop
      typeSpeed: 50,
      deleteSpeed: 30,
      delaySpeed: 5000
    })

    return (
      <div className="flex h-20 items-center">
        <div className="text-3xl sm:text-5xl text-white uppercase font-extrabold ">{text}</div>
      </div>
    )
  }

  function BottomNav() {
    function Button({ p, icon }) {
      
      const [mouseEnter, setMouseEnter] = useState(false)

      return (
        <div
          className={`${mouseEnter ? "bg-neutral-900" : "  bg-gradient-to-b from-pink-600 to-purple-600"} cursor-pointer
           flex flex-col items-center w-[200px] h-full p-5 mx-1 first:ml-0 last:mr-0`}
          onMouseEnter={() => { setMouseEnter(true) }}
          onMouseLeave={() => { setMouseEnter(false) }}
        >
          <div className="flex h-1/2 items-center">
            <FontAwesomeIcon
              icon={icon}
              className={`${mouseEnter
                ? "text-pink-600"
                : "text-white"} 
              w-12 h-12 pb-3`} />
          </div>
          <div className={`${mouseEnter
            ? "text-pink-600"
            : "text-white"} 
              h-1/2 text-white text-center pt-3 select-none`}>
            {p}
          </div>
        </div>
      )
    }

    return (
      <div
        className="z-[2] absolute bottom-0 h-[180px] translate-y-[50%]"
      >
        <div className="z-[2] flex items-center rounded-lg text-white overflow-hidden h-full"
          data-aos="fade-up"
        >
        {
          BOTTOM_ITEMS.map(({ p, icon }, i) =>
          <Button key={`sec1-bottom-item-${i}`} p={p} icon={icon} />
          )
        }
        </div>
      </div>
    )
  }
  return (
    <>
      <div className="relative flex items-center w-full h-screen">
        <div className="z-1 absolute left-0 top-0 right-0 bottom-0 w-full bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="z-1 absolute left-0 top-0 right-0 bottom-0 w-full bg-[#080108] bg-opacity-80"
        />
        <div className={"flex flex-col items-center justify-center max-w-[1400px] w-full mx-auto"}
            data-aos="fade-in"
          >
          <div className="z-[2] flex flex-col items-center text-neutral-200 border border-pink-500 rounded-md 
        bg-black bg-opacity-30 py-10 shadow-md shadow-[#472147] px-5 mx-5">
            <div className="uppercase font-bold text-2xl py-2">Es palīdzēšu tev kļūt</div>
            <TypewriterHook />
            {/* <div className="uppercase font-extrabold text-5xl py-5">Spēcīgāks</div> */}
            <div className="justify-center max-w-[600px] text-center text-xl px-5 select-none">
              <p className="inline-block">Aizpildi anketu, lai savā īpašumā&nbsp;</p>
              <p className="inline-block bg-pink-500 rounded-md px-[4px]">par brīvu</p>
              <p className="inline-block">&nbsp;iegūtu priekš taviem mērķiem optimizētu treniņu plānu</p>
            </div>
            <button className="text-white border border-pink-500 rounded-md mt-10 px-16 py-6 text-2xl font-medium
          bg-pink-600  hover:bg-pink-500 shadow-md shadow-[#db277873]
          transition-colors duration-200 active:translate-y-[2px] active:shadow-none
          ">
              Sāc tagad
            </button>
          </div>
          <div className="z-[2] text-white mt-14 max-w-[800px]">
            Algoritmu izstrādājuši Latvijas Sporta pedagoģijas akadēmijas absolventi.
            Pilnīgi visa treniņu plānā sniegtā informācija balstīta uz sertificētu vecāko treneru praksi un pieredzi,
            kas pamatota ar norādītām literatūras avotu atsaucēm no Latvijas un ārzemju zinātnisko literatūru.
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  )
}