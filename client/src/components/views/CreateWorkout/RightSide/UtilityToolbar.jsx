import React from "react";
import SearchBar from "./SearchBar/SearchBar";

export default function UtilityToolbar({ filteredExercisesState, allExercises }) {
  return (
    <div className="flex justify-center w-full py-10">
      <SearchBar
        filteredExercisesState={filteredExercisesState}
        allExercises={allExercises}
      />
    </div>
  )
}