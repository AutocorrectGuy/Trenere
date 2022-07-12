import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ExerciseKeys from "../../../../ExerciseLibrary/db/ExercisesKeys.json"
import SearchBarDropdown from "./SearchBarDropdown";



export default function SearchBar({ filteredExercisesState, allExercises }) {
  const [inputValue, setInputValue] = useState("")
  const [dropdownOptions] = useState(Object.keys(ExerciseKeys).map(key => ExerciseKeys[key]))
  const [currentDropdownItem, setCurrentDropdownItem] = useState(dropdownOptions[0])
  const [filteredExercises, setFilteredExercises] = filteredExercisesState

  useEffect(() => {
    setFilteredExercises(
      (currentDropdownItem.dbLabel === "ul")
        ? allExercises.filter(exercise =>
          exercise[currentDropdownItem.dbLabel].toUpperCase()
            .includes(inputValue.toUpperCase()))
        : allExercises.filter(exercise =>
          exercise[currentDropdownItem.dbLabel]
            .filter(item => item.toUpperCase()
              .includes(inputValue.toUpperCase())).length > 0)
    )
  }, [inputValue])

  return (
    <div className="flex items-center max-w-lg w-full h-[40px] 
      bg-neutral-700 text-white font-medium rounded-md"
    >
      <FontAwesomeIcon icon={faSearch} className={"text-neutral-400 w-5 h-5 px-2"} />
      <input
        autoComplete="off"
        spellCheck="false"
        className="flex grow h-full bg-transparent outline-none pr-2 placeholder:text-neutral-400"
        placeholder={`Meklēt pēc ${currentDropdownItem.label_ge.toLowerCase()}`}
        value={inputValue}
        onChange={(e) => { setInputValue(e.target.value) }}
      />
      <SearchBarDropdown
        dropdownOptions={dropdownOptions}
        setCurrentDropdownItem={setCurrentDropdownItem}
      />
    </div>
  )
}