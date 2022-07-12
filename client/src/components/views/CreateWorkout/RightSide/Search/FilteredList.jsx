import { faInfoCircle, faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { memo } from "react"
import { useState } from "react"
import DEFAULTS from "../../db/Defaults.json"


const FilteredList = ({ selectedState, inputFieldRefs, filteredExercises }) => {
  const [selectedExercises, setSelectedExercises] = selectedState
  const [mouseEnter, setMouseEnter] = useState(false)

  return (
    <div className="grid grid-cols-2 content-start w-full h-fit p-1">
      {
        filteredExercises.map(({ _id, ul }, i) => {
          let isSelected = selectedExercises.map(item => item._id).includes(_id)
          return (
            <div key={`exercise-right-${i}`}
              className={`${isSelected
                ? "bg-neutral-700 shadow-none translate-y-px"
                : "bg-neutral-800 shadow-[#00000052]"} 
                shadow-md
                flex h-fit text-white items-center justify-between px-2 
                py-2 hover:bg-neutral-700 rounded-md m-2 select-none`}
            >
              <FontAwesomeIcon
                icon={faInfoCircle}
                className={`w-7 h-7 cursor-pointer text-neutral-700 hover:text-neutral-500`}
                onClick={() => {alert("info modals nav pievienots")}}
              />
              <div>{ul}</div>
              <div>
                {
                  isSelected &&
                  <FontAwesomeIcon
                  icon={faMinusSquare}
                  className={`w-7 h-7 cursor-pointer text-neutral-500`}
                  onClick={() => {
                    setSelectedExercises(() => {
                      // update refs
                      const lastRefIndex = inputFieldRefs.current.reduce(
                        (p, n, i) => n._id !== _id ? p : i, -1)
                      inputFieldRefs.current.splice(lastRefIndex, 1)
                      // update states
                      const temp = [...selectedExercises]
                      const lastStateIndex = temp.reduce((p, n, i) => n._id !== _id ? p : i, -1)
                      temp.splice(lastStateIndex, 1)
                      return temp
                    })
                  }}
                />
                }
                
                <FontAwesomeIcon
                  icon={faPlusSquare}
                  className={`w-7 h-7 cursor-pointer 
              ${isSelected
                      ? `text-neutral-500 hover:text-neutral-200`
                      : "text-neutral-700 hover:text-neutral-500"}`}
                  onClick={() => {
                    setSelectedExercises(() => {
                      let temp = [...selectedExercises]
                      // create custom id for this exercise
                      const selected_id = new Date().getTime()
                      // upadte refs
                      inputFieldRefs.current.push({ selected_id, _id, ...DEFAULTS })
                      // update states
                      temp.push({ _id, selected_id })
                      return temp
                    })
                  }}
                />
              </div>
            </div>
          )
        }
        )
      }
    </div>
  )
}

export default memo(FilteredList)