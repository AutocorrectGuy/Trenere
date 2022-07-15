import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const SearchExercisesBtn = ({ icon, searchOpenState, continueOpenState}) => {
  const [continueOpen, setContinueOpen] = continueOpenState
  const [serchOpen, setSerchOpen] = searchOpenState

  const handleClick = (e) => {
    e.preventDefault()
    if(continueOpen) setContinueOpen(false)
    setSerchOpen(!serchOpen)
  }
  return (
    <button
      className={`${serchOpen
        ? "bg-indigo-300 text-white"
        : "bg-white hover:bg-neutral-100  text-neutral-700 translate-y-px shadow-none"}
          flex items-center justify-center w-[45px] h-[45px] rounded-md`}
      onClick={(e) => handleClick(e)}
    >
      <FontAwesomeIcon icon={icon} className={"w-5 h-5"} />
    </button>
  )
}

export default SearchExercisesBtn