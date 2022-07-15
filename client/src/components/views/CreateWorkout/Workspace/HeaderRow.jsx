import React from 'react'
import cellStyles from "./Cells/CellStyles.json"

const headers = ["", "Exercise", "Sets/reps", "Rest", "Description", ""]

const HeaderRow = () => {
  return (
    <div className="flex border border-neutral-300 rounded-t-md">
      {
        cellStyles.map(({ styles }, i) =>
          <div
            key={`selected-exercises-header-${i}`}
            style={{ ...styles }}
            className={`
                ${i === 0 && "rounded-tl-md"} 
                ${i === cellStyles.length - 1 && "rounded-tr-md"} 
                bg-white flex items-center text-neutral-600 py-4
                font-bold select-none px-3`}
          >
            {headers[i]}
          </div>
        )
      }
    </div>
  )
}

export default HeaderRow