import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"

const NAVIGATIONS = ["Home", "About", "Classes", "Gallery", "Contanct"]

export default function Navigation() {
  
  const prevY = useRef(window.scrollY)
  const navHeight = useRef(70)
  const [scrolledDown, setScrolledDown] = useState(prevY.current > navHeight.current)

  useEffect(() => {
    function handleScroll() {
      if(window.scrollY >= navHeight.current && !scrolledDown) {
        setScrolledDown(true)
      } else if (window.scrollY < navHeight.current && scrolledDown) {
        setScrolledDown(false)
      }
      prevY.current = window.scrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledDown])
  
  
  return (
    <div className={`${scrolledDown 
      ? "bg-[#150416] shadow-md shadow-[#200e207d]" 
      : "bg-transparent"}
      z-10 fixed flex justify-between w-full text-white transition-colors duration-300`}
      style={{height: `${navHeight.current}px`}}
    >
      <div className="flex items-center px-20 text-xl uppercase font-extrabold">
        TRENERE
      </div>
      <div className="flex items-center uppercase font-light px-20">
        {
          NAVIGATIONS.map((item, i) =>
            <div
              key={`nav-item-${i}`}
              className="flex items-center px-4 first:pl-0 last:pr-0 hover:text-purple-400 h-full cursor-pointer">
              {item}
            </div>
          )
        }
      </div>

    </div>
  )
}