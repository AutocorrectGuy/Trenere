import React, { useState } from "react";
import { useEffect } from "react";
import {
  sortableElement,
  sortableHandle
} from "react-sortable-hoc";

const inputStyle = `bg-neutral-700 h-full text-right text-white px-1
rounded-md outline-none text-base caret-neutral-200 font-bold`

const SortableItem = sortableElement(({
  selectedState,    // all selected exercise _id, "dozējums" and "metodiskie norādījumi"
  selectedExercise, // mapped item from selectedState (selectedExercises). This is NOT full item info from db
  allExercises,     // db data of all exercises
  tableWidths,      // cell widths in percentage
  inputFieldRefs,   // refs for inputField values, so view does not re-render when single input in input field has changed
  index
}) => {
  const [selectedExercises, setSelectedExercises] = selectedState

  // get select items FULL db info
  const [itemData] = useState(allExercises.filter(({ _id }) => _id === selectedExercise._id)[0])
  const { _id, ul } = itemData

  const DragHandle = sortableHandle(() => <div className="select-none pr-4 cursor-grab">: : :</div>)
  const ExerciseTitle = () => (
    <div className="flex pr-2 h-[30px] items-center">
      <DragHandle />
      <div className="select-none">{ul}</div>
    </div>
  )
  const IntensityVolumeField = () => {
    const [state, setState] = useState(() => {

      let target = inputFieldRefs.current[itemData._id]
      if( target === undefined) 
        return { setsCount: 3, repsCount: 12 }
      else if (target.load !== undefined)
        return inputFieldRefs.current[itemData._id].load
    })
      
    useEffect(() => {
      inputFieldRefs.current[itemData._id] !== undefined
      && inputFieldRefs.current[itemData._id].load !== undefined
        && console.log(inputFieldRefs.current[itemData._id].load)
    }, [state])

    function handleChange(e) {
      if (e.target.value.toString().length < 4)
        setState({ ...state, [e.target.name]: e.target.value })
      
      if(inputFieldRefs.current[_id] === undefined) {
        inputFieldRefs.current[_id] = {}
        inputFieldRefs.current[_id].load = {}
        
      }
      inputFieldRefs.current[_id].load[e.target.name] = e.target.value
      console.log(inputFieldRefs.current)
    }

    return (
      <div className="flex w-fit h-[30px] mr-2 pr-1 bg-neutral-700 rounded-md">
        <input
          name="setsCount"
          key={`dnd-exericse-input-sets-${index}`}
          className={inputStyle}
          style={{ width: `${state.setsCount.toString().length + 1}ch` }}
          value={state.setsCount}
          onChange={handleChange}
        />
        <div className="mt-auto pb-[2px] text-neutral-400 font-bold text-sm select-none pr-1">x</div>
        <input
          name="repsCount"
          key={`dnd-exericse-input-reps-${index}`}
          className={inputStyle}
          style={{ width: `${state.repsCount.toString().length + 1}ch` }}
          value={state.repsCount}
          onChange={handleChange}
        />
        <div className="mt-auto pb-[2px] text-neutral-400 font-bold text-sm select-none pr-1">reizes</div>
      </div>
    )
  }

  const Notes = () => {
    const [notesValue, setNotesValue] = useState("")
    return (
      <div className="min-h-[30px] flex grow items-center p-1 bg-neutral-700 rounded-md">
        <textarea
          className={`w-full bg-neutral-700 text-white px-2
          rounded-md outline-none text-base caret-neutral-200 font-semibold`}
          value={notesValue}
          rows={1}
          onChange={(e) => {
            handleKeyDown(e)
            setNotesValue(e.target.value)
          }}
        />
      </div>
    )
  }

  return (
    <div className="flex w-full text-white items-start text-base bg-[#343434]
      px-4 py-2 rounded-md min-h-[50px] my-1"
    >
      <div style={{ width: tableWidths.exerciseNameField }}>
        <ExerciseTitle />
      </div>
      <div style={{ width: tableWidths.intensityVolumeField }}>
        <IntensityVolumeField />
      </div>
      <div style={{ width: tableWidths.notesField }}>
        <Notes />
      </div>
    </div>
  )
})

const handleKeyDown = (e) => {
  // Reset field height
  e.target.style.height = 'inherit';

  // Get the computed styles for the element
  const computed = window.getComputedStyle(e.target);

  // Calculate the height
  const height = parseInt(computed.getPropertyValue('border-top-width'), 10)
    + parseInt(computed.getPropertyValue('padding-top'), 10)
    + e.target.scrollHeight
    + parseInt(computed.getPropertyValue('padding-bottom'), 10)
    + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

  e.target.style.height = `${height}px`;
}

export default SortableItem