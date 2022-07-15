import React from "react";
import SearchBar from "./SearchBar/SearchBar";

export default function UtilityToolbar({ filteredExercisesState, allExercises }) {
  return (
    <div className="flex justify-center w-full py-10 z-[2] max-w-[365px] mx-auto">
      <SearchBar
        filteredExercisesState={filteredExercisesState}
        allExercises={allExercises}
      />
    </div>
  )
}