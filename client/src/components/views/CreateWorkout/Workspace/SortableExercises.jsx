import React, { memo }from "react"
import { sortableContainer } from "react-sortable-hoc"
import { arrayMoveImmutable } from "array-move"
import SortableItem from "./SortableItem"
import cellStyles from "./Cells/CellStyles.json"

const SortableExercises = ({ selectedState, allExercises, inputFieldRefs }) => {
  const [selectedExercises, setSelectedExercises] = selectedState

  const SortableContainer = sortableContainer(({ children }) => (
    <div>{children}</div>
  ))
  const onSortStart = () => document.body.style.cursor = 'grabbing'
  const onSortEnd = ({ oldIndex, newIndex }) => {
    // update refs
    inputFieldRefs.current = arrayMoveImmutable(inputFieldRefs.current, oldIndex, newIndex)
    // update states
    setSelectedExercises(() => arrayMoveImmutable(selectedExercises, oldIndex, newIndex))
    document.body.style.cursor = 'default'
  }

  return (
    <>
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
            cellStyles={cellStyles}
            inputFieldRefs={inputFieldRefs}
          />
        ))}
      </SortableContainer>
    </>
  )
}

export default memo(SortableExercises)