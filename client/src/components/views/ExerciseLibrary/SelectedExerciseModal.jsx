import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ExercisesKeys from "./db/ExercisesKeys.json"
import ExerciseOptionsModal from "./ExerciseOptionsModal";

export default function SelectedExerciseModal({ data, setData }) {

  const [editvalues, setEditValues] = useState(false)
  // atšifrējumi:
  let _ = ExercisesKeys
  Object.keys(ExercisesKeys).forEach(key =>
    _[key].data = data.data.original[ExercisesKeys[key].dbLabel]
  )
  const h1 = data.data.original.ul

  function DbEntry({ data }) {
    const [mouseEnter, setMouseEnter] = useState(false)

    function RegularEntry() {
      return (
        <div className="flex items-end w-full h-[50px] bg-[#1F2937] border-b 
        border-b-[#111827] text-slate-400 opacity-75 font-bold">
          <div className={`${mouseEnter && "bg-slate-700"} py-1 px-2 rounded-md`}>
            {Array.isArray(data) ? data.map((item, i) => !i ? item : `, ${item}`) : data}
          </div>
        </div>
      )
    }

    /**
     * TODO: created editable entry. But first, need db of dropdown item data
     * + there will be checkboxes (to select an array of items)
     */
    // function EditableEntry() {
    //   return (
    //     <div className="flex items-end w-full h-[50px] bg-[#1F2937] border-b 
    //   border-b-[#111827] text-slate-400 opacity-75 font-bold"
    //       onMouseEnter={() => setMouseEnter(true)}
    //       onMouseLeave={() => setMouseEnter(false)}
    //     >
    //       <div
    //         className={`${mouseEnter && "bg-slate-700"} py-1 px-2 rounded-md`}
    //       >
    //         {Array.isArray(data) ? data.map((item, i) => !i ? item : `, ${item}`) : data
    //         }
    //       </div>
    //       <FontAwesomeIcon
    //         icon={faEdit}
    //         className={`${mouseEnter ? "visible" : "hidden"} pb-2 pl-2 w-4 h-4`}
    //       />
    //     </div>
    //   )
    // }

    return (
      <>
        {
          !editvalues && <RegularEntry />
        }
      </>
    )
  }

  return (

    <>
      <div
        className="bg-black bg-opacity-90 justify-center items-center flex overflow-x-hidden 
          overflow-y-auto fixed inset-0 z-[20] outline-none focus:outline-none"
        onClick={() => setData({ isOpen: false, data: "" })}
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 z-[21] h-fit  flex flex-col my-auto mx-auto 
      max-w-2xl w-full p-5 bg-[#1F2937] rounded-md shadow-sm shadow-slate-900">
        {/*content*/}
        <div className="rounded-lg flex flex-col w-full outline-none focus:outline-none">
          {/*header*/}
          <div className="flex justify-between bg-slate-700 items-center w-full min-h-[60px] p-0 border-b border-solid border-b-[#111827] rounded-t">
            <div className="ml-4 pt-1 my-auto">
              <ExerciseOptionsModal data={data.data.original} />
            </div>
            <h3 className="text-xl font-bold text-center uppercase">
              {h1}
            </h3>
            <FontAwesomeIcon icon={faTimes} className={"mr-4 my-auto text-slate-300 w-7 h-7 hover:text-slate-500 cursor-pointer"}
              onClick={() => setData({ isOpen: false, data: "" })}
            />
          </div>
          {/*body*/}
          <div className="flex w-full justify-end py-2 pr-3">

          </div>
          <div className="flex bg-[#1F2937] pb-10 px-2">

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
    </>
  )
}