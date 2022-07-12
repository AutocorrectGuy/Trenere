import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SaveExerciseModal from "./SaveExerciseModal";

const SaveExercise = ({ selectedState, inputFieldRefs }) => {
  const [open, setOpen] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setOpen(true)
  }

  const Button = () => (
    <div className="flex w-full mt-auto py-4 bg-neutral-900 items-center justify-center">
      <button className="text-white uppercase font-bold px-6 py-3 rounded-md 
    bg-pink-600 hover:bg-pink-500 cursor-pointer"
        onClick={(e) => handleClick(e)}
      >
        <div className="flex items-center">
          <FontAwesomeIcon icon={faFeatherAlt} className={"w-5 h-5"} />
          <div className="whitespace-nowrap pl-2">
            Saglabāt treniņu
          </div>
        </div>
      </button>
    </div>
  )

  return (
    <>
      <Button />
      {
        open &&
        <SaveExerciseModal
          selectedState={selectedState}
          inputFieldRefs={inputFieldRefs}
          openState={[open, setOpen]}
        />
      }
    </>
  )
}

export default SaveExercise