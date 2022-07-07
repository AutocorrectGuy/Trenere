import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import axios from "../../../axios/axiosConfig"
import { useState } from "react"

const textClass = "text-white float-left"
export default function DeleteExerciseModal({ _id, name }) {
  const [open, setOpen] = useState(false)

  function Button() {
    return (
      <div
        className="flex items-center px-5 py-4 bg-transparent whitespace-nowrap select-none hover:bg-slate-600 
          text-base cursor-pointer rounded-md"
        onClick={() => setOpen(true)}
      >
        <FontAwesomeIcon icon={faTrash} className={"w-5 h-5 pr-4 text-slate-400"} />
        <div>Dzēst vingrinājumu</div>
      </div>
    )
  }
  function Modal() {

    const [inputValue, setInputValue] = useState("")
    const [validInput, setValidInput] = useState(false)
    const nameSplit = name.split(" ")
    const upperCasedName = name.toUpperCase()

    function handleDeleteSubmit() {
      console.log("delete", _id)
      axios.delete("/api/delete-exercise", { data: {_id} })
        .then(res => window.location.reload())
        .catch(err => console.log(err))
      
    }
    function handleInput(e) {
      setInputValue(() => {
        let upperCasedValue = e.target.value.toUpperCase()
        if (upperCasedValue === upperCasedName && !validInput)
          setValidInput(true)
        else if (upperCasedValue !== upperCasedName && validInput)
          setValidInput(false)
        return e.target.value
      })
    }

    return (
      <>
        <div
          className="fixed bg-black bg-opacity-90 justify-center items-center flex overflow-x-hidden 
          overflow-y-auto inset-0 z-[20] outline-none focus:outline-none"
          onClick={() => { setOpen(false) }}
        />
        <div className="fixed top-0 right-0 bottom-0 left-0 z-[21] h-fit flex flex-col my-auto mx-auto 
      max-w-xl w-full p-5 bg-[#1F2937] rounded-md shadow-sm shadow-slate-900">
          <div className="text-white pb-5 font-bold text-lg">Vingrinājuma dzēšana</div>

          <div className="py-5 border-t border-t-slate-700">

            <div className={textClass}>
              Ja tiešām vēlaties dzēst vingrinājumu&nbsp;
            </div>
            {
              nameSplit.map((word, i) => {
                return (
                  <div key={`delete-item-word-${i}`}>
                    <div className={`${textClass} font-bold`}>{`${word}`}</div>
                    {
                      i !== nameSplit.length - 1
                        ? <div className={textClass}>&nbsp;</div>
                        : <div className={textClass}>,&nbsp;</div>
                    }
                  </div>
                )
              }

              )
            }
            <div className={textClass}>
              tad veiciet apstiprinājumu, ievadot šī vingrinājuma nosaukumu
            </div>
          </div>

          <input
            type="text"
            autoComplete={"off"}
            value={inputValue}
            onChange={(e) => handleInput(e)}
            placeholder="Ievadiet vingrinājuma nosaukumu"
            className="bg-slate-700 px-4 py-2 text-white placeholder:text-slate-400 placeholder:font-semibold
            focus:outline-none rounded-sm overflow-hidden"
          />
          <div className="w-full border-b border-b-slate-700 pt-5"></div>
          <div className="flex ml-auto pt-5">
            <div className="px-4 py-2 bg-slate-700 rounded-sm select-none cursor-pointer hover:bg-slate-600"
              onClick={() => { setOpen(false) }}
            >
              Atcelt
            </div>
            {
              validInput
                ? <div className="ml-2 px-4 py-2 rounded-sm select-none cursor-pointer 
                  bg-red-600 hover:bg-red-500 font-semibold"
                  onClick={() => handleDeleteSubmit()}
                >
                  Dzēst
                </div>
                : <div className="ml-2 px-4 py-2 rounded-sm select-none cursor-not-allowed 
                bg-slate-600  font-semibold">
                  Dzēst
                </div>
            }

          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Button />
      {open && <Modal />}
    </>
  )
}