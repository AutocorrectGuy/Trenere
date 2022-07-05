import { faEdit, faTimes, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function SelectedExerciseModal({ data, setData }) {

  // destructuring by hand
  const {
    ul,
    group,
    main_mm,
    secondary_mm,
    equipment,
    phys_a
  } = data.data.original

  // atšifrējumi:
  const _ = {
    exerciseName: { label: "Exercise name", data: ul },
    muscleGroup: { label: "Muscle group", data: group },
    mainMuscles: { label: "Main muscles", data: main_mm },
    secondaryMuscles: { label: "Secondary muscles", data: secondary_mm },
    equipment: { label: "Equipment", data: equipment },
    physicalAbility: { label: "Physical ability", data: phys_a },
  }

  function DbEntry({ data }) {
    const [mouseEnter, setMouseEnter] = useState(false)
    const [editable, setEditable] = useState(false)

    return (
      <div className="flex items-end w-full h-[50px] bg-[#1F2937] border-b 
      border-b-[#111827] text-slate-400 opacity-75 font-bold"
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
      >
        <div
          className={`${mouseEnter && "bg-slate-700"} py-1 px-2 rounded-md`}
          onClick={() => { setEditable(true) }}
        >
          {Array.isArray(data)
            ? data.map((item, i) => !i ? item : `, ${item}`)
            : data
          }
        </div>
        {
          editable
            ? <FontAwesomeIcon
              icon={faTimes}
              className={`pb-1 w-5 h-5 text-red-600 pl-1`}
            />
            : <FontAwesomeIcon
              icon={faEdit}
              className={`${mouseEnter ? "visible" : "hidden"} pb-2 pl-2 w-4 h-4`}
            />
        }
      </div>
    )
  }

  return (

    <>
      <div
        className="bg-black bg-opacity-50 justify-center items-center flex overflow-x-hidden 
            overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative flex flex-col my-6 mx-auto max-w-2xl w-full p-5 bg-[#1F2937] rounded-md shadow-sm shadow-slate-900">
          {/*content*/}
          <div className="rounded-lg relative flex flex-col w-full outline-none focus:outline-none">
            {/*header*/}
            <div className="relative flex bg-slate-700 items-center justify-center w-full min-h-[120px] p-0 border-b border-solid border-b-[#111827] rounded-t">
              <h3 className="text-xl font-bold text-center uppercase">
                {ul}
              </h3>
              <button className="absolute right-0 top-0 m-3"
                onClick={() => setData({ isOpen: false, data: "" })}
              >
                <FontAwesomeIcon icon={faWindowClose} className={"text-white w-8 h-8 hover:text-slate-500"} />
              </button>
            </div>
            {/*body*/}
            <div className="flex bg-[#1F2937] py-10 px-2">

              <div className="flex flex-col">
                {
                  Object.keys(_).map((key, i) =>
                    <div key={`exercise-lib-modal-label-${i}`}
                      className="flex items-end py-1 pr-10 h-[50px] bg-[#1F2937] border-b 
                      border-b-transparent text-white font-bold whitespace-nowrap select-none ">
                      {_[key].label}
                    </div>
                  )
                }
              </div>
              <div className="flex flex-col w-full">
                {
                  Object.keys(_).map((key, i) =>
                    <DbEntry key={`exercise-lib-modal-data${i}`} data={_[key].data} />
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}