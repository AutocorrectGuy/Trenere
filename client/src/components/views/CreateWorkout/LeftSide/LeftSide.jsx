import React, { useRef } from "react";
import SortableExercises from "./SortableExercises";

export default function LeftSide({ selectedState, allExercises }) {
  const inputFieldRefs = useRef([])

  return (
    <div className="w-full h-full border-2 border-dashed border-neutral-700 rounded-lg mr-2 p-5">
      {/* <div className="flex w-full items-center justify-center text-lg uppercase 
        text-neutral-400 h-[70px] font-semibold"
      >
        Treniņa nosaukums
      </div> */}
      <SortableExercises
        selectedState={selectedState}
        allExercises={allExercises}
        inputFieldRefs={inputFieldRefs}
      />
    </div>
  )
}