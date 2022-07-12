import React, { useState } from "react";
import { useEffect } from "react";
import { sortableElement } from "react-sortable-hoc";
import { Cell } from "./Cells/Cell";

const SortableItem = sortableElement(({
  selectedExercise, // mapped item from selectedState (selectedExercises). This is NOT full item info from db
  allExercises,     // db data of all exercises
  tableWidths,      // cell widths in percentage
  inputFieldRefs,   // refs for inputField values, so view does not re-render when single input in input field has changed
  index
}) => {
  // get select items FULL db info
  const [itemData] = useState(allExercises.filter(({ _id }) => _id === selectedExercise._id)[0])

  return (
    <div className="flex w-full text-white items-start text-base bg-[#343434]
      pl-4 pr-2 py-2 rounded-md min-h-[50px] my-1"
    >
      {
        tableWidths.map(({ cellName, width }, i) =>
          <div key={`cell-${cellName}-i`} style={{ width: width }}>
            <Cell
              cellName={cellName}
              inputFieldRefs={inputFieldRefs}
              selectedExercise={selectedExercise}
              itemData={itemData}
              index={index}
            />
          </div>
        )
      }
    </div>
  )
})



export default SortableItem