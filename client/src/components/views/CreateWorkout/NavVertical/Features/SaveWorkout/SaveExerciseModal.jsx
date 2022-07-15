import React, { useState } from "react"
import { Portal } from 'react-portal';

const SaveExerciseModal = ({ openState, selectedState, inputFieldRefs }) => {
  const [open, setOpen] = openState
  const [selectedExercises] = selectedState
  const [merged] = useState(() => (merge(inputFieldRefs.current, selectedExercises)))
  const Modal = () => (
    <Portal>
      <div
        key={`save-exercise-modal-open-${open}`}
        className="z-[21] fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-90"
        onClick={() => setOpen(false)}
      />
      <div className="z-[21] fixed top-0 right-0 bottom-0 left-0 max-w-4xl w-full
        h-fit bg-neutral-800 mx-auto my-auto rounded-md text-neutral-200"
      >
        <div>Outputs veidosies no:</div>
        <div className="p-4">{JSON.stringify(merged)}</div>
      </div>
    </Portal>
  )

  return (
    <>
      { merged !== undefined && <Modal />}
    </>
  )
}

export default SaveExerciseModal

const merge = (a1, a2) => (
  a1.reduce((p, n) => [...p, { ...n, ...a2.filter(
    ({ selected_id }) => selected_id === n.selected_id)[0] }], [])
)