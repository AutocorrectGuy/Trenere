import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DEFAULTS from "../db/Defaults.json"

const AddRow = ({selectedState, inputFieldRefs}) => {

  const [selectedExercises, setSelectedExercises] = selectedState

  const addNewRow = () => {
    setSelectedExercises(() => {
      let temp = [...selectedExercises]
      // create custom id for this exercise
      const selected_id = `CUSTOM-EX-${new Date().getTime()}`
      // upadte refs
      inputFieldRefs.current.push({ selected_id, ...DEFAULTS })
      // update states
      temp.push({ selected_id })
      return temp
    })
  }

  return (
    <div className="flex w-full bg-[#FAF8FE] py-2 rounded-b-md select-none
      border-b border-b-neutral-300 border-x border-x-neutral-300 cursor-pointer
      hover:bg-white"
        onClick={() => addNewRow()}
        >
      <div className="flex items-center mx-auto font-semibold">
        <FontAwesomeIcon icon={faPlus} />
        <div className="pl-2">Pievienot jaunu rindu</div>
      </div>
    </div>
  )
}

export default AddRow