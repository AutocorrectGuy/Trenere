import React from "react"
import { useState } from "react"
import UtilityToolbar from "./UtilityToolbar"
import FilteredList from "./FilteredList";
import SaveExercise from "./SaveExercise";
export default function Layout({ allExercises, selectedState, inputFieldRefs }) {

  // all exercises will be selected in utilityToolbar component by filtering
  const [filteredExercises, setFilteredExercises] = useState([])

  return (
    <div className="flex flex-col w-full h-full border border-neutral-800 rounded-lg">
      <UtilityToolbar
        filteredExercisesState={[filteredExercises, setFilteredExercises]}
        allExercises={allExercises}
      />
      <FilteredList
        selectedState={selectedState}
        inputFieldRefs={inputFieldRefs}
        filteredExercises={filteredExercises}
      />
      <SaveExercise
        selectedState={selectedState}
        inputFieldRefs={inputFieldRefs}
      />
    </div>
  )
}