import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState, memo, useRef } from "react"
import Navigation from "../partials/Navigation/Navigation"
import testResponse from "./db/testResponse.json"
import LeftSide from "./LeftSide/LeftSide"
import NavBarVertical from "./NavVertical/NavVertical"
import RightSide from "./RightSide/Search/Layout"

const CreateWorkout = () => {
  const [allExercises] = useState(testResponse.data)
  // save only selected exercise ID
  const [selectedExercises, setSelectedExercises] = useState([])
  const inputFieldRefs = useRef([])
  const [rightOpen, setRightOpen] = useState(true)



  return (
    <>
      <Navigation />
      <div className="flex w-full h-screen bg-neutral-900">
        <div className="flex w-full h-full pt-[60px] p-2">
          <NavBarVertical rightOpenState={[rightOpen, setRightOpen]} />
          {
            rightOpen &&
            <div className="w-5/12">
              <RightSide
                allExercises={allExercises}
                selectedState={[selectedExercises, setSelectedExercises]}
                inputFieldRefs={inputFieldRefs}
              />
            </div>
          }
          <div className={`${rightOpen ? "w-7/12" : "w-full"}`}>
            <LeftSide
              allExercises={allExercises}
              selectedState={[selectedExercises, setSelectedExercises]}
              inputFieldRefs={inputFieldRefs}
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default memo(CreateWorkout)