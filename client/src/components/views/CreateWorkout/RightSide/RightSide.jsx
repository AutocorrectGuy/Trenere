import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import UtilityToolbar from "./UtilityToolbar";

export default function RightSide({ allExercises, selectedState }) {

  // all exercises will be selected in utilityToolbar component by filtering
  const [filteredExercises, setFilteredExercises] = useState([])
  const [selectedExercises, setSelectedExercises] = selectedState

  return (
    <div className="w-full h-full border border-neutral-800 rounded-lg">
      <UtilityToolbar
        filteredExercisesState={[filteredExercises, setFilteredExercises]}
        allExercises={allExercises}
      />
      <div className="grid grid-cols-2 content-start w-full h-fit p-1">
        {
          filteredExercises.map(({ _id, ul }, i) => {
            let isSelected = selectedExercises.map(item => item._id).includes(_id)
            return (
              <div key={`exercise-right-${i}`}
                className="flex h-fit text-white items-center justify-between px-2 
                  py-2 bg-neutral-800 hover:bg-neutral-700 rounded-md m-2 select-none">
                <div>{ul}</div>
                <FontAwesomeIcon
                  icon={faPlusSquare}
                  className={`w-7 h-7 cursor-pointer 
                  ${isSelected 
                      ? "text-green-500 hover:text-green-600" 
                      : "text-neutral-600"}`}
                  onClick={() => {
                    setSelectedExercises(() => {

                      let temp = [...selectedExercises]
                      // const ids = temp.length > 0 && 

                      temp.map(item => item._id).includes(_id)
                        ? temp = temp.filter(item => item._id !== _id)
                        : temp.push({_id, data: {}})
                      return temp
                    })
                  }}
                />
              </div>
            )
          }

          )
        }
      </div>

    </div>
  )
}