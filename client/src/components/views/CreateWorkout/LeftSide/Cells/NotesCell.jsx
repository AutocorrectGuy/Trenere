import React, { useState } from 'react'

export const NotesCell = ({inputFieldRefs, selectedExercise }) => {
  const ref = inputFieldRefs.current.filter(
    ({selected_id}) => selected_id === selectedExercise.selected_id)[0]
  const [value, setValue] = useState(ref.notes)
  
  // dynamically change textare size
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

  function handleChange(e) {
    if (e.target.value.toString().length >= 1000) return
    handleKeyDown(e)
    setValue(e.target.value)
    ref.notes = e.target.value
  }
  return (
    <div className="min-h-[30px] flex grow items-center p-1 bg-neutral-700 rounded-md">
      <textarea
        className={`w-full bg-neutral-700 text-white px-2 overflow-hidden
        rounded-md outline-none text-base caret-neutral-200 font-semibold`}
        value={value}
        rows={1}
        onChange={handleChange}
      />
    </div>
  )
}