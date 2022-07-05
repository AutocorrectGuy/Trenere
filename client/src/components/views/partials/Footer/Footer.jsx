import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"


const footerData = [
  {
    "ul": "About us",
    "li": ["Welcome yo my fitness page. This is a fitness page. A placeholer text it is. Yes. Yes, yes, Yes!"]
  },
  {
    "ul": "Navigations",
    "li": ["Home", "About", "Classes", "Gallery", "Contanct"]
  },
  {
    "ul": "Contact information",
    "li": ["Brīvības gatve 351, Rīga, Latvija", "+371 29202010", "fitness@gmail.com", "fitness@gmail.com"]
  },
  {
    "ul": "We are open",
    "li": ["Mon-Thu: 9:30-21:00", "Fri: 6:00-21:00", "Sat: 10:00-15:00"]
  }
]

export default function Footer() {
  return (
    <div className="w-full bg-[#150416]">
      <div className="grid max-w-[1400px] mx-auto pt-10 pb-24"
        style={{ gridTemplateColumns: `repeat(${footerData.length}, minmax(0, 1fr))` }}
      >
        {
          footerData.map(({ ul, li }, i) =>
            <div key={`footer-ul-${i}`} className="flex flex-col p-4">
              <div className="text-pink-600 font-bold pb-6 uppercase">{ul}</div>
              {
                li.map((item, j) =>
                  <div
                    key={`footer-li-${i}-${j}`}
                    className="text-neutral-200 font-light">
                    {item}
                  </div>
                )
              }
            </div>
          )
        }
      </div>
      <div className="flex bg-[#150416] justify-center uppercase py-4 font-medium">
        <FontAwesomeIcon icon={faFacebook} className="text-neutral-400 cursor-pointer hover:text-white active:translate-y-[2px] transition-colors duration-200 w-10 h-10 mx-2"/>
        <FontAwesomeIcon icon={faInstagram} className="text-neutral-400 cursor-pointer hover:text-white active:translate-y-[2px] transition-colors duration-200 w-10 h-10 mx-2"/>
        <FontAwesomeIcon icon={faDiscord} className="text-neutral-400 cursor-pointer hover:text-white active:translate-y-[2px] transition-colors duration-200 w-10 h-10 mx-2"/>
        <FontAwesomeIcon icon={faTiktok} className="text-neutral-400 cursor-pointer hover:text-white active:translate-y-[2px] transition-colors duration-200 w-10 h-10 mx-2"/>
      </div>
      <div className="flex bg-black justify-center text-neutral-300 uppercase py-4 font-medium select-none">
        © Autortiesības 2022 Trenere
      </div>
    </div>
  )
}