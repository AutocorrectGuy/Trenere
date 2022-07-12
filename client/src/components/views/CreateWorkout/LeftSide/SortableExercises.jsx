import React from "react"
import {
  sortableContainer
} from "react-sortable-hoc"
import { arrayMoveImmutable } from "array-move"
import SortableItem from "./SortableItem"
import { memo } from "react"

const tableWidths = [
  { cellName: "exerciseName", width: "40%" },
  { cellName: "load", width: "20%" },
  { cellName: "notes", width: "40%" },
  { cellName: "options", width: "40px" },
]

const headers = ["Vingrinājuma nosaukums", "Slodzes dozējums", "Metodiskie norādījumi"]

const SortableExercises = ({ selectedState, allExercises, inputFieldRefs }) => {
  const [selectedExercises, setSelectedExercises] = selectedState

  const SortableContainer = sortableContainer(({ children }) => (
    <div className={`bg-neutral-600 bg-opacity-10 rounded-md ${selectedExercises.length > 0 && "py-[1px] px-2"}`}>
      {children}
    </div>
  ))
  const onSortStart = () => document.body.style.cursor = 'grabbing'
  const onSortEnd = ({ oldIndex, newIndex }) => {
    // update refs
    inputFieldRefs.current = arrayMoveImmutable(inputFieldRefs.current, oldIndex, newIndex)
    // update states
    setSelectedExercises(() => arrayMoveImmutable(selectedExercises, oldIndex, newIndex))
    document.body.style.cursor = 'default'
  }
  const HeaderRow = () => (
    <div className="flex">
      {
        tableWidths.map(({ width }, i) =>
          <div
            key={`selected-exercises-header-${i}`}
            style={{ width: width }}
            className={`flex items-center h-[30px] text-white
            font-bold select-none ${i === 1 && "pl-1"}`}
          >
            {headers[i]}
          </div>
        )
      }
    </div>
  )

  return (
    <>
      <HeaderRow />
      <SortableContainer
        useDragHandle
        lockAxis={"y"}
        onSortStart={onSortStart}
        onSortEnd={onSortEnd}
        helperClass={"whitespace-nowrap"}
      >
        {selectedExercises.map((selectedExercise, i) => (
          <SortableItem
            key={`item-${i}`}
            index={i}
            selectedExercise={selectedExercise}
            allExercises={allExercises}
            tableWidths={tableWidths}
            inputFieldRefs={inputFieldRefs}
          />
        ))}
      </SortableContainer>
    </>
  )
}

export default memo(SortableExercises)