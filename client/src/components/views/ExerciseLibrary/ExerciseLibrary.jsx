import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PaginatedTable from "./PaginatedTable";
import ReactVirtualizedTable from "./VirtualizedTable";
import Navigation from "../partials/Navigation/Navigation";
import AddExercise from "./AddExercise";

export default function ExerciseLibrary() {

  const [tableStyle] = useState("paginated-list")
  const [data, setData] = useState(undefined)

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
          />
        </form >
      )
    }

    return (
      <div className="flex flex-col w-full rounded-sm  p-10 bg-slate-700 bg-opacity-75 mt-[100px]">
        <div className="flex flex-col">
          <AddExercise />
          <SearchBar />
        </div>
        {
          tableStyle === "virtualized-list"
            ? <ReactVirtualizedTable data={data} setData={setData} />
            : <PaginatedTable data={data} setData={setData} itemsPerPage={10} />
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