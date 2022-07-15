import React, { useState } from "react";
import { sortableElement } from "react-sortable-hoc";
import { Cell } from "./Cells/Cell";

const SortableItem = sortableElement(({
  selectedExercise, // mapped item from selectedState (selectedExercises). This is NOT full item info from db
  allExercises,     // db data of all exercises
  cellStyles,      // cell widths in percentage
  inputFieldRefs,   // refs for inputField values, so view does not re-render when single input in input field has changed
  index,
}) => {
  // get select items FULL db info
  const [itemData] = useState(allExercises.filter(({ _id }) => _id === selectedExercise._id)[0])
  // textare height is essential for rerendering row every time it is resized
  const [textAreaHeight, setTextareaHeight] = useState(undefined)

  return (
    <div className="flex w-full text-neutral-700 items-start text-base
      min-h-[50px] h-full bg-white border-b border-b-neutral-300"
    >
      {
        cellStyles.map(({ cellName, styles }, i) =>
          <div key={`cell-${cellName}-i`} 
            className={`${i === 0 && "border-x border-x-neutral-200"} 
            border-r border-r-neutral-200 border-b-neutral-200
            `}
            style={{ 
              ...styles,
              height: `${textAreaHeight <= 50 ? "50px" : `${textAreaHeight}px`}`
            }} 
            >
            <Cell
              cellName={cellName}
              inputFieldRefs={inputFieldRefs}
              selectedExercise={selectedExercise}
              itemData={itemData}
              index={index}
              textAreaState={[textAreaHeight, setTextareaHeight]}
            />
          </div>
        )
      }
    </div>
  )
})



export default SortableItem