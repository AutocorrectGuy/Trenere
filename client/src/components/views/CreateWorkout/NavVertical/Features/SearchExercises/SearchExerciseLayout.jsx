import React from "react"
import { useState } from "react"
import UtilityToolbar from "./UtilityToolbar"
import FilteredList from "./FilteredList";
const SearchExerciseLayout = ({ allExercises, selectedState, inputFieldRefs }) => {
  // all exercises will be selected in utilityToolbar component by filtering
  const [filteredExercises, setFilteredExercises] = useState([])

  return (
    <div className="flex flex-col w-full h-full bg-white 
    border-l-2 border border-neutral-200"
    >
      <UtilityToolbar
        filteredExercisesState={[filteredExercises, setFilteredExercises]}
        allExercises={allExercises}
      />
      <FilteredList
        selectedState={selectedState}
        inputFieldRefs={inputFieldRefs}
        filteredExercises={filteredExercises}
      />
    </div>
  )
}

export default SearchExerciseLayout