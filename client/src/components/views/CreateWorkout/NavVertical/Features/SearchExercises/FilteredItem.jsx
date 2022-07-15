import React from "react"
import { addExercise, removeExercise } from "./AddOrRemoveDBExercise"
import { faChevronCircleRight, faPenAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FilteredItem = ({ selectedState, inputFieldRefs, filteredExerciseData }) => {
  const [selectedExercises, setSelectedExercises] = selectedState
  const { _id, ul } = filteredExerciseData

  let isSelected = selectedExercises.map(item => item._id).includes(_id)
  return (
    <div className={`bg-transparent flex text-neutral-700 
        items-center justify-between pl-14 pr-2 hover:bg-indigo-50 hover:bg-opacity-25 select-none
        h-[44px]`}
    >
      <div className="mt-auto overflow-hidden whitespace-nowrap overflow-ellipsis pr-4">{ul}</div>
      <div className={`flex mt-auto
      ${isSelected ? "mr-0" : "mr-7"}`}>
        <FontAwesomeIcon
          icon={faPenAlt}
          className={`w-6 h-6 cursor-pointer text-indigo-100 hover:text-indigo-200 pb-1`}
          onClick={() => addExercise(_id, selectedExercises, setSelectedExercises, inputFieldRefs)}
        />
        {
          isSelected &&
          <FontAwesomeIcon
            icon={faTrashAlt}
            className={`w-6 h-6 cursor-pointer text-indigo-100 hover:text-indigo-200 ml-1 pb-1`}
            onClick={() => removeExercise(_id, selectedExercises, setSelectedExercises, inputFieldRefs)}
          />
        }

      </div>
    </div>
  )
}

export default FilteredItem