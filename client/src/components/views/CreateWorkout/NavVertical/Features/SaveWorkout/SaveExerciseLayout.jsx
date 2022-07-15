import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SaveExerciseModal from "./SaveExerciseModal";

const SaveExerciseLayout = ({ selectedState, inputFieldRefs }) => {
  const [open, setOpen] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setOpen(true)
  }

  const Button = () => (
    <button className="text-white uppercase font-bold px-6 py-3 rounded-md 
    bg-pink-500 hover:bg-pink-400 cursor-pointer"
      onClick={(e) => handleClick(e)}
    >
      <div className="flex items-center">
        <FontAwesomeIcon icon={faFeatherAlt} className={"w-5 h-5"} />
        <div className="whitespace-nowrap pl-2">
          Saglabāt treniņu
        </div>
      </div>
    </button>
  )

  return (
    <div className="flex w-full h-full bg-white items-center justify-center
    border-l-2 border border-neutral-200">
      <Button />
      {
        open &&
        <SaveExerciseModal
          selectedState={selectedState}
          inputFieldRefs={inputFieldRefs}
          openState={[open, setOpen]}
        />
      }
    </div>
  )
}

export default SaveExerciseLayout