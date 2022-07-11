import React from "react";
import {
  sortableContainer
} from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";
import SortableItem from "./SortableItem";
import { useEffect } from "react";

const tableWidths = {
  "exerciseNameField": "40%",
  "intensityVolumeField": "20%",
  "notesField": "40%"
}
const headers = ["Vingrinājuma nosaukums", "Slodzes dozējums", "Metodiskie norādījumi"]

export default function SortableExercises({ selectedState, allExercises, inputFieldRefs }) {
  const [selectedExercises, setSelectedExercises] = selectedState

  const SortableContainer = sortableContainer(({ children }) => (
    <div className={`bg-neutral-600 bg-opacity-10 rounded-md ${selectedExercises.length > 0 && "py-[1px] px-2"}`}>
      {children}
    </div>
  ))
  const HeaderRow = () => (
    <div className="flex">
      {
        Object.keys(tableWidths).map((key, i) =>
          <div
            key={`selected-exercises-header-${i}`}
            style={{ width: tableWidths[key] }}
            className={`flex items-center h-[30px] text-white
            font-bold select-none ${i === 1 && "pl-1"}`}
          >
            {headers[i]}
          </div>
        )
      }
    </div>
  )
  const onSortStart = () => document.body.style.cursor = 'grabbing'

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setSelectedExercises(() => {
      // let temp = bindRefsToStates()
      let temp = selectedExercises
      return arrayMoveImmutable(temp, oldIndex, newIndex)
    })
    document.body.style.cursor = 'default'
  }

  function bindRefsToStates() {
    let temp = [...selectedExercises]
    temp.forEach(exercise => {
      inputFieldRefs.current.forEach(ref => {
        if (exercise._id === Object.keys(ref)[0]) {
          exercise.data.load = ref.load
        }
      })
    })
    return temp
  }

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
            selectedState={selectedState}
            allExercises={allExercises}
            tableWidths={tableWidths}
            inputFieldRefs={inputFieldRefs}
          />
        ))}
      </SortableContainer>
    </>
  )
}
