import React, { useState, memo, useRef } from "react"
import Navigation from "../partials/Navigation/Navigation"
import testResponse from "./db/testResponse.json"
import NavBarVertical from "./NavVertical/NavBar/NavVertical"
import SaveExerciseLayout from "./NavVertical/Features/SaveWorkout/SaveExerciseLayout"
import SearchExerciseLayout from "./NavVertical/Features/SearchExercises/SearchExerciseLayout"
import WorkSpace from "./Workspace/WorkSpace"

const widths = { workSpace: "65%", feature: "35%" }
const defaultStyles = {
  boxShadow: "10px 0 5px -2px #f6f2fc",
  zIndex: "0"
}

const CreateWorkout = () => {
  const [allExercises] = useState(testResponse.data)
  // save only selected exercise ID
  const [selectedExercises, setSelectedExercises] = useState([])
  const inputFieldRefs = useRef([])

  // feature states. Are switched in vertical navbr
  const [searchOpen, setSarchOpen] = useState(false)
  const [continueOpen, setContinueOpen] = useState(false)

  return (
    <>
      <Navigation />
      <div className="flex w-full h-screen">
        <div className="flex w-full h-full pt-[70px]">
          {/* Navbar */}
          <NavBarVertical
            searchOpenState={[searchOpen, setSarchOpen]}
            continueOpenState={[continueOpen, setContinueOpen]}
          />

          {/* Features */}
          { /** Search exercise container*/
            searchOpen &&
            <div
              style={{ ...defaultStyles, width: widths.feature }}
            >
              <SearchExerciseLayout
                allExercises={allExercises}
                selectedState={[selectedExercises, setSelectedExercises]}
                inputFieldRefs={inputFieldRefs}
              />
            </div>
          }
          { /** `Continue >>` container*/
            continueOpen &&
            <div style={{ ...defaultStyles, width: widths.feature }}>
              <SaveExerciseLayout
                selectedState={[selectedExercises, setSelectedExercises]}
                inputFieldRefs={inputFieldRefs}
              />
            </div>
          }

          {/* Main workspace*/}
          <div style={{
            width: `${(searchOpen || continueOpen) ? widths.workSpace : "100%"}`,
            overflowY: "scroll",
            overflowX: "hidden"
          }}
          >
            <WorkSpace
              allExercises={allExercises}
              selectedState={[selectedExercises, setSelectedExercises]}
              inputFieldRefs={inputFieldRefs}
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default memo(CreateWorkout)