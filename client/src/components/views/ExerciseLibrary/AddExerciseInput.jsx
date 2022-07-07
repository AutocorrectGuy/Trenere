import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import MusclesList from "./db/MusclesList.json"

export default function AddExerciseInput({ label, dbLabel, allInputValues }) {
  const [value, setValue] = useState("")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [dropdownItems, setDropdownItems] = useState(undefined)
  const [suggestionsOpen, setSuggestionsOpen] = useState(false)
  const max = useRef(10)

  useEffect(() => {
    switch (dbLabel) {
      case "main_mm":
        setDropdownItems(MusclesList.map(({ lat }) => lat))
        break;
      case "secondary_mm":
        setDropdownItems(MusclesList.map(({ lat }) => lat))
        break;

      default:
        break;
    }
  }, [])

  function Dropdown() {
    return (
      <>
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-transparent z-[20]"
          onClick={() => setDropdownOpen(false)}
        />
        <div
          className={`${dropdownItems.length > max.current && "overflow-y-scroll max-h-[400px]"} 
          z-[21] absolute top-[40px] right-0 flex flex-col bg-[#293443] 
        w-full border border-slate-700 rounded-sm shadow-xl shadow-[#171717ce]`}
        >
          {
            dropdownItems.map((item, i) =>
              <div
                key={`add-exercise-drop-${dbLabel}-${i}`}
                className="text-slate-400 px-4 py-2 hover hover:bg-slate-700 
              cursor-pointer font-semibold"
                onClick={() => {
                  setDropdownOpen(false)
                  setValue(item)
                }}
              >
                {item}
              </div>
            )
          }
        </div>
      </>
    )
  }

  function SuggestionsList() {

    const [suggestedArray, setSuggestedArray] = useState(
      dropdownItems.filter(item => item.toUpperCase().includes(value.toUpperCase()))
    )

    function Item({ p }) {
      return (
        <div
          className={`text-slate-400 px-4 py-2 hover hover:bg-slate-700 cursor-pointer 
          font-semibold`}
          onClick={() => {
            setValue(p)
            setSuggestionsOpen(false)
          }}
        >
          {p}
        </div>
      )
    }

    return (
      // need full-screen overlay
      <>
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-transparent z-[20]"
          onClick={() => setSuggestionsOpen(false)}
        />
        {
          suggestedArray.length > 0 &&
          <div
            className={`${suggestedArray.length > max.current
              && "overflow-y-scroll max-h-[400px]"} 
              z-[20] absolute top-[40px] right-0 flex flex-col bg-[#293443] 
              w-full border border-slate-700 rounded-sm shadow-xl
              shadow-[#171717ce]`}
          >
            {
              suggestedArray.map((item, i) =>
                <Item key={`suggestion-${dbLabel}-${i}`} p={item} />)
            }
          </div>
        }
      </>

    )
  }

  return (
    <div
      className="relative flex h-[40px] mt-[10px] border-b-[2px] border-b-slate-900"
    >
      <input
        autoComplete={"off"}
        className="flex grow h-full px-2 bg-slate-600 bg-opacity-25
        placeholder:text-slate-400 placeholder:font-semibold outline-none"
        placeholder={`New ${label.toLowerCase()}`}
        name={dbLabel}
        value={value}
        onChange={(e) => {
          allInputValues.current[dbLabel] = e.target.value
          if (e.target.value.length > 0 && !suggestionsOpen)
            setSuggestionsOpen(true)
          else if (e.target.value.length === 0 && suggestionsOpen)
            setSuggestionsOpen(false)
          setValue(e.target.value)
        }}
      />
      {
        dropdownItems !== undefined &&
        <div
          className="flex h-full items-center cursor-pointer bg-slate-600 bg-opacity-25"
          onClick={() => {
            setDropdownOpen(!dropdownOpen)
            setSuggestionsOpen(false)
          }}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className={"w-5 h-5 px-2 text-slate-200"}
          />
        </div>
      }
      {
        value.length > 0 && suggestionsOpen && dropdownItems &&
        < SuggestionsList />
      }
      {
        dropdownOpen && dropdownItems !== undefined &&
        <Dropdown />
      }
    </div>
  )
}