import React, { useState } from 'react'

const inputStyle = `bg-neutral-700 h-full text-right text-white px-1
rounded-md outline-none text-base caret-neutral-200 font-bold`

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
    <div className="flex w-fit h-[30px] mr-2 pr-1 bg-neutral-700 rounded-md">
      <input
        name="setsCount"
        key={`dnd-exericse-input-sets-${index}`}
        className={inputStyle}
        style={{ width: `${ref.load.setsCount.toString().length + 1}ch` }}
        value={ref.load.setsCount}
        onChange={handleChange}
      />
      <div className="mt-auto pb-[2px] text-neutral-400 font-medium text-sm select-none pr-1">x</div>
      <input
        name="repsCount"
        key={`dnd-exericse-input-reps-${index}`}
        className={inputStyle}
        style={{ width: `${ref.load.repsCount.toString().length + 1}ch` }}
        value={ref.load.repsCount}
        onChange={handleChange}
      />
      <div className="mt-auto pb-[2px] text-neutral-400 font-medium text-sm select-none pr-1">reizes</div>
    </div>
  )
}