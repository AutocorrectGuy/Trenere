import React from "react"
import ContinueBtn from "./ContinueBtn"
import SearchExercisesBtn from "./SearchExercisesBtn"
import { faAngleDoubleRight, faSearch } from "@fortawesome/free-solid-svg-icons"

const NavBarVertical = ({ searchOpenState, continueOpenState }) => {
  return (
    <div className="flex flex-col justify-between items-center h-full bg-white p-3
    border-t border-t-neutral-200">
      <div className="flex flex-col">
        <SearchExercisesBtn
          icon={faSearch}
          searchOpenState={searchOpenState}
          continueOpenState={continueOpenState}
        />
      </div>
      <ContinueBtn
        icon={faAngleDoubleRight}
        searchOpenState={searchOpenState}
        continueOpenState={continueOpenState}
      />
    </div>
  )
}
export default NavBarVertical