import React, { memo } from "react"
import FilteredItem from "./FilteredItem"

const FilteredList = ({ selectedState, inputFieldRefs, filteredExercises }) => {

  const Headers = () => {
    return (
      <div className="flex w-full py-2">
        <div className="flex grow pl-14">Vingrinājums</div>
        <div className="w-[70px] text-right pr-3"></div>
      </div>
    )
  }

  return (
    <div className="relative flex flex-col content-start w-full h-full"
      style={{
        backgroundImage: "linear-gradient(to bottom, steelblue 1px, transparent 1px)",
        backgroundSize: "100% 44px",
        backgroundPositionY: "-4px",
        backgroundRepeat: "repeat-y"
      }}>
      <div className="absolute h-full w-[2px] bg-[#FF9999] right-[70px] top-0" />
      <Headers />
      {
        filteredExercises.map((filteredExerciseData, i) =>
          <FilteredItem
            key={`filtered-exercise-from-search-${i}`}
            selectedState={selectedState}
            inputFieldRefs={inputFieldRefs}
            filteredExerciseData={filteredExerciseData}
          />
        )
      }
    </div>
  )
}

export default memo(FilteredList)