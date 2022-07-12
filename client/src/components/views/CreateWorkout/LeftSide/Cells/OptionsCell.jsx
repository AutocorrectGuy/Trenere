import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import OPTIONS from "../Options/DefaultOptions";


export const OptionsCell = ({ exerciseData }) => {
  const [open, setOpen] = useState(false)

  const DropdownMenu = () => {
    return (
      <>
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-transparent"
          onClick={() => setOpen(false)}
        />
        <div className="z-20 absolute top-[44px] -right-2 flex flex-col border border-neutral-700
          text-neutral-300 bg-[#343434] rounded-md shadow-lg shadow-neutral-900"
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
      <div className="flex h-[30px] items-center justify-center pl-1 pt-[2px] cursor-pointer">
        <FontAwesomeIcon
          icon={faCog}
          className={"text-neutral-600 w-7 h-7"}
          onClick={() => setOpen(true)}
        />
      </div>
      {open && <DropdownMenu />}
    </div>
  )
}
