import { faAngleDoubleRight, faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const NavBarVertical = ({rightOpenState}) => {

  const [rightOpen, setRightOpen] = rightOpenState

  const SearchButton = ({icon}) => {
    const handleClick = (e) => {
      e.preventDefault()
      setRightOpen(!rightOpen)
    }
    return (
      <button
        className={`${rightOpen 
          ? "bg-pink-600 shadow-md shadow-[#1a1a1a8e]" 
          : "bg-neutral-700 hover:bg-neutral-600 translate-y-px shadow-none"}
        flex items-center justify-center w-[45px] h-[45px]
         rounded-md`}
        onClick={(e) => handleClick(e)}
      >
        <FontAwesomeIcon icon={icon} className={"w-5 h-5 text-white"}/>
      </button>
    )
  }
  const ContinueButton = ({icon}) => {
    const handleClick = (e) => {
      e.preventDefault()
    }
    return (
      <button
        className={`${rightOpen 
          ? "bg-pink-600 shadow-md shadow-[#1a1a1a8e]" 
          : "bg-neutral-700 hover:bg-neutral-600 translate-y-px shadow-none"}
        flex items-center justify-center w-[45px] h-[45px]
         rounded-md`}
        onClick={(e) => handleClick(e)}
      >
        <FontAwesomeIcon icon={icon} className={"w-5 h-5 text-white"}/>
      </button>
    )
  }
  return (
    <div className="flex flex-col justify-between items-center h-full bg-neutral-800 p-3 rounded-md">
      <div className="flex flex-col">
        <SearchButton icon={faSearch}/>
      </div>
      <ContinueButton icon={faAngleDoubleRight}/>
    </div>
  )
}
export default NavBarVertical