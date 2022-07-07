import { faCog, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import DeleteExerciseModal from "./DeleteExerciseModal"


export default function ExerciseOptionsModal({ data }) {
  const [open, setOpen] = useState(false)

  function Dropdown() {
    function EditButton() {
      return (
        <div
          className="flex items-center px-5 py-4 bg-transparent whitespace-nowrap select-none hover:bg-slate-600 
            text-base cursor-pointer rounded-md">
          <FontAwesomeIcon icon={faEdit} className={"w-5 h-5 pr-4 text-slate-400"} />
          <div>Rediģēt ierakstus</div>
        </div>
      )
    }

    function OptionsList() {
      return (
        <div className="flex flex-col bg-slate-700 shadow-xl shadow-[#121821a8] text-slate-200 text-bold
        rounded-md border border-slate-800">
          <EditButton />
          <DeleteExerciseModal name={data.ul} _id={data._id}/>
        </div>
      )
    }

    return (
      <>
        <div
          className="fixed top-0 right-0 bottom-0 left-0 bg-transparent justify-center 
          items-center flex overflow-x-hidden 
          overflow-y-auto inset-0 z-[30] outline-none focus:outline-none"
          onClick={() => {
            setOpen(!open)
          }}
        />
        <div className="absolute top-[48px] right-0 bottom-0 -left-4 z-[31] w-fit"
        >
          <OptionsList />
        </div>
      </>
    )
  }
  return (
    <div className="relative">
      <FontAwesomeIcon
        icon={faCog}
        className={`${open ? "rotate-180" : "rotate-0"} 
        w-7 h-7 transition-transform ease-out text-slate-400 duration-500
        hover:text-slate-500 cursor-pointer`}
        onClick={() => { setOpen(!open) }}
      />
      {
        open &&
        <Dropdown />
      }

    </div>
  )
}