import React from 'react'
import { OptionsCell } from './OptionsCell';
import { ExerciseTitleCell } from './ExerciseTitleCell';
import { LoadCell } from './LoadCell';
import { NotesCell } from './NotesCell';
import GrabHandleCell from './GrabHandleCell';
import RestCell from './RestCell';
import ExerciseTitleInputCell from './ExerciseTitleInputCell';

export const Cell = ({
  inputFieldRefs, // ref to all selected item data
  cellName,       // string for switch
  itemData,       // db data for selected exercise
  selectedExercise, // selected_id and other states data
  index,
  textAreaState 
}) => {
  // database item data
  const { ul } = itemData || {}

  switch (cellName) {
    case "grabHandle": return <GrabHandleCell ul={ul} />
    case "exerciseName": {
      return ul === undefined
        ? <ExerciseTitleInputCell inputFieldRefs={inputFieldRefs} selectedExercise={selectedExercise} />
        : <ExerciseTitleCell ul={ul} />
    }
    case "load": return <LoadCell inputFieldRefs={inputFieldRefs} selectedExercise={selectedExercise} index={index}/>
    case "rest": return <RestCell inputFieldRefs={inputFieldRefs} selectedExercise={selectedExercise}/>
    case "notes": return <NotesCell inputFieldRefs={inputFieldRefs} selectedExercise={selectedExercise} textAreaState={textAreaState}/>
    case "options": return <OptionsCell exerciseData={itemData} />
    default: return <div>No cell type has been selected</div>
  }
}

