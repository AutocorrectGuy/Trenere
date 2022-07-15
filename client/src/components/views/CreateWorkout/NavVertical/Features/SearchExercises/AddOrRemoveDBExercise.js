import DEFAULTS from "../../../db/Defaults.json"

export const addExercise = (_id, exState, setExState, exRef) => {
  setExState(() => {
    let temp = [...exState]
    // create custom id for this exercise
    const selected_id = new Date().getTime()
    // upadte refs
    exRef.current.push({ selected_id, _id, ...DEFAULTS })
    // update states
    temp.push({ _id, selected_id })
    return temp
  })
}
export const removeExercise = (_id, exState, setExState, exRef) => {
  setExState(() => {
    // update refs
    const lastRefIndex = exRef.current.reduce(
      (p, n, i) => n._id !== _id ? p : i, -1)
    exRef.current.splice(lastRefIndex, 1)
    // update states
    const temp = [...exState]
    const lastStateIndex = temp.reduce((p, n, i) => n._id !== _id ? p : i, -1)
    temp.splice(lastStateIndex, 1)
    return temp
  })
}