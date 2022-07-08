import React, { useEffect, useRef, useState } from "react";
import { faFeatherAlt, faFileImport, faPlus, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExercisesKeys from "../ExerciseLibrary/db/ExercisesKeys.json"
import axios from "../../../axios/axiosConfig"
import AddExerciseInput from "./AddExerciseInput";

export default function AddExercise() {

  // ul, group, main_mm, secondary_mm, equipment, phys_a
  const [open, setOpen] = useState(false)
  const [templates, setTemplates] = useState(() => {
    const list = []
    Object.keys(ExercisesKeys).forEach(key => {
      list.push({
        dbLabel: ExercisesKeys[key].dbLabel,
        label: ExercisesKeys[key].label,
        label_ak: ExercisesKeys[key].label_ak,
      })
    })
    return list
  })

  function ModalForm() {
    const allInputValues = useRef({})
    useEffect(() => {
      let newObj = {}
      Object.keys(ExercisesKeys).forEach(key =>
        newObj[ExercisesKeys[key].dbLabel] = "")
      allInputValues.current = newObj;
    }, [])

    function handleSubmit() {
      console.log(allInputValues.current)
      axios.post("/api/upload-exercise", allInputValues.current)
        .then(res => { window.location.reload() })
        .catch(err => console.log(err))
    }

    return (
      <form className="flex flex-col bg-[#1F2937] py-10 px-2">
        <div className="flex flex-col w-full">
          {
            templates.map(({ label, dbLabel, label_ak }, i) =>
              <div className="flex min-h-[50px] items-center w-full">
                <div key={`exercise-lib-modal-label-${i}`}
                  className="flex items-end py-1 pr-10 bg-[#1F2937] border-b max-w-[210px] w-full
                  border-b-transparent text-white font-bold whitespace-nowrap select-none"
                >
                  {label}
                </div>
                <AddExerciseInput
                  key={`exercise-lib-modal-data${i}`}
                  label={label}
                  dbLabel={dbLabel}
                  label_ak={label_ak}
                  allInputValues={allInputValues}
                />
              </div>
            )
          }
        </div>
        <button className="flex items-center bg-blue-600 hover:bg-blue-500 
          text-white font-semibold px-4 py-2 rounded-md active:translate-y-[2px] 
          shadow-md shadow-[#1e293ba5] active:shadow-none mt-10 mx-auto"
          onClick={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
        >
          <FontAwesomeIcon icon={faFeatherAlt} className={"w-4 h-4"} />
          <div className="pl-2">Pievienot datubāzei</div>
        </button>
      </form>
    )
  }

  function AddExerciseModal() {
    return (
      <>
        <div
          className="bg-black bg-opacity-50 justify-center items-center flex overflow-x-hidden 
            overflow-y-auto fixed inset-0 z-[20] outline-none focus:outline-none"
          onClick={() => setOpen(false)}
        />
        <div className="absolute top-0 right-0 left-0 bottom-0 z-[21] my-auto h-fit  flex flex-col mx-auto max-w-2xl 
            w-full p-5 bg-[#1F2937] rounded-md shadow-sm shadow-slate-900"
        >
          {/*content*/}
          <div className="rounded-lg relative flex flex-col w-full outline-none focus:outline-none">
            {/*header*/}
            <div className="relative flex bg-slate-700 items-center justify-center w-full min-h-[60px] p-0 border-b border-solid border-b-[#111827] rounded-t">
              <h3 className="text-xl font-bold text-center uppercase">
                Jauns vingrinājums
              </h3>
              <button className="absolute right-0 top-0 m-3"
                onClick={() => setOpen(false)}
              >
                <FontAwesomeIcon
                  icon={faWindowClose}
                  className={"text-white w-8 h-8 hover:text-slate-500"}

                />
              </button>
            </div>
            {/*body*/}
            <ModalForm />
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="flex justify-between pb-5">
      <div className="text-neutral-200 font-bold text-xl uppercase pl-1">
        Vingrinājumi
      </div>
      <button className="flex items-center bg-blue-600 hover:bg-blue-500 text-white font-semibold 
          px-4 py-2 rounded-md active:translate-y-[2px] shadow-md shadow-[#1e293ba5] active:shadow-none"
        onClick={() => setOpen(true)}
      >
        <FontAwesomeIcon icon={faPlus} />
        <div className="pl-2">
          Pievienot vingrinājumu
        </div>
      </button>
      {
        open &&
        <AddExerciseModal />
      }
    </div>
  )
}