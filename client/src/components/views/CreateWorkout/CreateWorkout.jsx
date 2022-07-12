import React, { useState, memo, useRef } from "react"
import Navigation from "../partials/Navigation/Navigation"
import testResponse from "./db/testResponse.json"
import LeftSide from "./LeftSide/LeftSide"
import RightSide from "./RightSide/Search/Layout"

const CreateWorkout = () => {
  const [allExercises] = useState(testResponse.data)
  // save only selected exercise ID
  const [selectedExercises, setSelectedExercises] = useState([])
  const inputFieldRefs = useRef([])

  return (
    <>
      <Navigation />
      <div className="flex w-full h-screen bg-neutral-900">
        <div className="flex w-full h-full pt-[60px] p-2">
          <div className="w-7/12">
            <LeftSide
              allExercises={allExercises}
              selectedState={[selectedExercises, setSelectedExercises]}
              inputFieldRefs={inputFieldRefs}
            />
          </div>
          <div className="w-5/12">
            <RightSide
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