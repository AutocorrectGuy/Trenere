import React, { useState } from "react"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function SearchBarDropdown({ setCurrentDropdownItem, dropdownOptions }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className="relative h-full">
      <button
        className="flex items-center text-neutral-300 font-medium h-full px-2"
        onClick={(e) => {
          e.preventDefault()
          setDropdownOpen(true)
        }}
      >
        <FontAwesomeIcon icon={faChevronDown} className={"w-4 h-4 px-2"} />
      </button>
      {
        dropdownOpen &&
        <>
          <div className="fixed top-0 right-0 bottom-0 left-0 bg-transparent"
            onClick={() => {
              setDropdownOpen(false)
            }}
          />
          <div className="absolute top-[40px] right-0 flex flex-col bg-neutral-700
              shadow-md shadow-neutral-900">
            {
              dropdownOptions.map(({ label }, i) =>
                <div
                  key={`dropdown-search-${i}`}
                  className="px-4 py-2 hover:bg-neutral-600 cursor-pointer whitespace-nowrap"
                  onClick={() => {
                    setDropdownOpen(false)
                    setCurrentDropdownItem(dropdownOptions.filter(item => item.label === label)[0])
                  }}
                >
                  {label}
                </div>
              )
            }
          </div>
        </>
      }
    </div>
  )
}