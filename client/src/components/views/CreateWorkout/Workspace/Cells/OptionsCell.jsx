import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import OPTIONS from "../Options/DefaultOptions";


export const OptionsCell = ({ exerciseData }) => {
  const [open, setOpen] = useState(false)

  const DropdownMenu = () => {
    return (
      <>
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-transparent"
          onClick={() => setOpen(false)}
        />
        <div className="z-20 absolute top-[44px] right-0 flex flex-col border border-neutral-300
          text-neutral-700 bg-white rounded-md shadow-md shadow-neutral-300 overflow-hidden"
        >
          {
            OPTIONS.map(({ Div, ul, icon }, i) =>
              <div key={`exercise-options-dropdown-li-${i}`}>
                <Div ul={ul} icon={icon} setOpenOptions={setOpen} />
              </div>
            )
          }
        </div>
      </>
    )
  }
  return (
    <div className="relative">
      <div className="flex h-[50px] items-center justify-center cursor-pointer">
        <FontAwesomeIcon
          icon={faEllipsisV}
          className={"text-neutral-600 w-6 h-6"}
          onClick={() => setOpen(true)}
        />
      </div>
      {open && <DropdownMenu />}
    </div>
  )
}
