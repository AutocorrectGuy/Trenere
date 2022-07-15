import React, { useState } from 'react'
import useResizeObserver from '@react-hook/resize-observer'
import { useEffect } from 'react'

export const NotesCell = ({inputFieldRefs, selectedExercise, textAreaState }) => {

  const ref = inputFieldRefs.current.filter(
    ({selected_id}) => selected_id === selectedExercise.selected_id)[0]
  const [value, setValue] = useState(ref.notes)
  
  // resize observer for textarea
  const useSize = (target) => {
    const [size, setSize] = React.useState()
    React.useLayoutEffect(() => {
      setSize(target.current.getBoundingClientRect())
    }, [target])
  
    // Where the magic happens
    useResizeObserver(target, (entry) => setSize(entry.contentRect))
    return size
  }
  const target = React.useRef(null)
  const size = useSize(target)
  const [, setTextareaHeight] = textAreaState

  useEffect(() => {
    size !== undefined && setTextareaHeight(size.height)
  }, [size])

  // dynamically change textare size
  const handleKeyDown = (e) => {
    // Reset field height
    // e.target.style.height = 'inherit';
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
    <div className="relative min-h-[50px] h-full flex grow items-center px-2 cursor-text"
      onClick={() => target.current.focus()}
    >
      <textarea
        ref={target}
        spellCheck={"false"}
        className={`absolute top-0 right-2 bottom-0 left-0
        flex items-center px-2 align-middle bg-transparent 
        text-neutral-700 overflow-hidden h-fit leading-5 my-auto
        outline-none text-base caret-neutral-700 font-semibold
        `}
        value={value}
        rows={1}
        onChange={handleChange}
      />
    </div>
  )
}