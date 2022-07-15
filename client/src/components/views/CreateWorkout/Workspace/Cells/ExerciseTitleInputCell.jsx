import React, { useState } from "react"

const ExerciseTitleInputCell = ({inputFieldRefs, selectedExercise}) => {
  const target = React.useRef(null)
  const ref = inputFieldRefs.current.filter(
    ({selected_id}) => selected_id === selectedExercise.selected_id)[0]
  const [value, setValue] = useState(ref.ul)

  function handleChange(e) {
    if (e.target.value.toString().length >= 100) return
    setValue(e.target.value)
    ref.ul = e.target.value
  }

  return (
    <div className="relative min-h-[50px] h-full flex grow items-center px-2 cursor-text"
      onClick={() => target.current.focus()}
    >
      <input
        ref={target}
        spellCheck={"false"}
        className={`py-2 px-1 my-auto w-full outline-none text-base caret-neutral-700`}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default ExerciseTitleInputCell