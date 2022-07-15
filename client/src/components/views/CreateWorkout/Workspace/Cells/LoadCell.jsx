import React, { useState } from 'react'

const inputStyle = `bg-transparent h-full text-right text-neutral-700 px-1
outline-none text-base caret-neutral-700 font-bold`

export const LoadCell = ({ inputFieldRefs, selectedExercise, index }) => {
  const ref = inputFieldRefs.current.filter(
    ({selected_id}) => selected_id === selectedExercise.selected_id)[0]
  const [value, setValue] = useState(ref.load)

  function handleChange(e) {
    if (e.target.value.toString().length >= 4) return
    // rerender input element only
    setValue({ ...value, [e.target.name]: e.target.value })
    // save input value to ref
    ref.load = {...value, [e.target.name]: e.target.value}
  }

  return (
    <div className="flex items-center w-full h-[50px] pl-1">
      <input
        name="setsCount"
        key={`dnd-exericse-input-sets-${index}`}
        className={inputStyle}
        style={{ width: `${ref.load.setsCount.toString().length + 1}ch` }}
        value={ref.load.setsCount}
        onChange={handleChange}
      />
      <div className="text-neutral-700 font-medium text-sm select-none pr-1 pt-1">x</div>
      <input
        name="repsCount"
        key={`dnd-exericse-input-reps-${index}`}
        className={inputStyle}
        style={{ width: `${ref.load.repsCount.toString().length + 1}ch` }}
        value={ref.load.repsCount}
        onChange={handleChange}
      />
      <div className="text-neutral-700 font-medium text-sm select-none pr-1 pt-1">reizes</div>
    </div>
  )
}