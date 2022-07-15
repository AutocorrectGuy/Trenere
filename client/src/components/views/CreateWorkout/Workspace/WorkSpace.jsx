import React from "react";
import AddRow from "./AddRow";
import HeaderRow from "./HeaderRow";
import SortableExercises from "./SortableExercises";

export default function WorkSpace({ selectedState, allExercises, inputFieldRefs }) {
  return (
    <div className="w-full h-full border-l border-l-neutral-300 mr-2 p-5 bg-[#FAF8FE]">
      <HeaderRow />
      <SortableExercises
        selectedState={selectedState}
        allExercises={allExercises}
        inputFieldRefs={inputFieldRefs}
      />
      <AddRow
        selectedState={selectedState}
        inputFieldRefs={inputFieldRefs}
      />
    </div>
  )
}