import React from 'react'
import { OptionsCell } from './OptionsCell';
import { ExerciseTitleCell } from './ExerciseTitleCell';
import { LoadCell } from './LoadCell';
import { NotesCell } from './NotesCell';

export const Cell = ({
  inputFieldRefs, // ref to all selected item data
  cellName,       // string for switch
  itemData,       // db data for selected exercise
  selectedExercise, // selected_id and other states data
  index }) => {
  // database item data
  const { ul } = itemData

  switch (cellName) {
    case "exerciseName": return <ExerciseTitleCell ul={ul} />
    case "load": return <LoadCell inputFieldRefs={inputFieldRefs} selectedExercise={selectedExercise} index={index}/>
    case "notes": return <NotesCell inputFieldRefs={inputFieldRefs} selectedExercise={selectedExercise} />
    case "options": return <OptionsCell exerciseData={itemData} />
    default: return <div>No cell type has been selected</div>
  }
}

