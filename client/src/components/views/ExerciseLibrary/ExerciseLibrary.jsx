import React, { useEffect } from "react";
import { useState } from "react";
import PaginatedTable from "../Accessories/PaginatedTable";
import ReactVirtualizedTable from "../Accessories/VirtualizedTable";
import Navigation from "../partials/Navigation/Navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

import axios from "../../../axios/axiosConfig"

export default function ExerciseLibrary() {

  const [tableStyle] = useState("paginated-list")
  const [data, setData] = useState(undefined)

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("api/get-all-exercises")
      setData(res.data)
    }
    fetchData()
  }, [])

  function TableWithTools() {
    function SearchBar() {
      return (
        <form className="flex items-center my-5 h-[40px] bg-slate-800 rounded-md">
          <button className="flex h-full items-center bg-transparent">
            <FontAwesomeIcon icon={faSearch} className={"w-4 h-4 text-slate-500 px-3"} />
          </button>
          <input type="text" className="w-full h-full outline-none bg-transparent
          placeholder:text-slate-500 text-white font-semibold placeholder:font-semibold"
            placeholder="Search exercises by name or keywords"
          ></input>


        </form >
      )
    }

    function AddExercise() {
      return (
        <div className="flex justify-between pb-5">
          <div className="text-neutral-200 font-bold text-xl">
            Vingrinājumi
          </div>
          <button className="flex items-center bg-blue-600 hover:bg-blue-500 text-white font-semibold 
              px-4 py-2 rounded-md active:translate-y-[2px] shadow-md shadow-[#1e293ba5] active:shadow-none">
            <FontAwesomeIcon icon={faPlus} />
            <div className="pl-2">Pievienot vingrinājumu</div>
          </button>
        </div>
      )
    }

    return (
      <div className="flex flex-col w-full rounded-sm  p-10 bg-slate-700 bg-opacity-75 mt-[100px]">
        <div className="flex flex-col">
          <AddExercise />
          <SearchBar />
        </div>

        {
          data !== undefined &&
          (
            tableStyle === "virtualized-list"
              ? <ReactVirtualizedTable data={data} setData={setData} />
              : <PaginatedTable data={data} setData={setData} itemsPerPage={10} />
          )

        }
      </div>
    )
  }

  return (
    <>
      <Navigation />
      <div className="bg-gradient-to-b from-slate-800 to-[#010012f7] min-h-screen">
        <div className="flex flex-col text-neutral-200 max-w-[1400px] mx-auto">
          <TableWithTools />
        </div>
      </div>
    </>
  )
}