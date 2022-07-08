import React, { Component, useState } from "react"
import { useEffect } from "react"
import Select  from 'react-select'

// dropdown List sources
import MuscleGroupsList from "./db/MuscleGroupsList.json"
import MusclesList from "./db/MusclesList.json"
import EquipmentList from "./db/EquipmentList.json"
import PhysicalAbilityList from "./db/PhysicalAbilityList.json"

const customStyles = {
  option: (provided) => ({
    ...provided,
    backgroundColor: "#293443",
    color: "#94A3B8",
    border: "none",
    outline: "none",
    "&:hover": {
      backgroundColor: "#334155"
    }
  }),
  container: (provided) => ({
    ...provided,
    width: "100%",
    backgroundColor: "#293443",
    '&:hover': {
      boxShadow: "0 0 0 1px #334155"
    }
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    '&:hover': {
      border: state.isFocused ? 0 : 0
    }
  }),
  input: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    color: "white"
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {
      ...provided,
      opacity,
      transition
    };
  },
  placeholder: (provided) => ({
    ...provided,
    color: "#94A3B8",
    fontWeight: 500
  }),
  menu: (provided) => ({
    ...provided,
    padding: "0px",
    margin: "0px"
  }),
  menuList: (provided) => ({
    ...provided,
    padding: "0px",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#455975",
    borderRadius: "4px",
    overflow: "hidden"
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    backgroundColor: "#transparent",
    color: "#FFFFFF",
    fontWeight: 500
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    backgroundColor: "transparent"
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#94A3B8",
    cursor: "pointer",
    "&:hover": {
      color: "white"
    }
  }),
}

export default function AddExerciseInput({ label, dbLabel, label_ak, allInputValues }) {
  const [dropdownItems, setDropdownItems] = useState(undefined)

  useEffect(() => {
    switch (dbLabel) {
      case "group":
        setDropdownItems(MuscleGroupsList.map(({ lv }) => ({
          value: lv, label: lv
        })))
        break;
      case "main_mm":
        setDropdownItems(MusclesList.map(({ lat, lv }) => ({
          value: lv, label: lv
        })))
        break;
      case "secondary_mm":
        setDropdownItems(MusclesList.map(({ lat, lv }) => ({
          value: lv, label: lv
        })))
        break;
      case "equipment":
        setDropdownItems(EquipmentList.map(({ lv }) => ({
          value: lv, label: lv
        })))
        break;
      case "phys_a":
        setDropdownItems(PhysicalAbilityList.map(({ lv }) => ({
          value: lv, label: lv
        })))
        break;
      default:
        break;
    }
  }, [])

  function SelectMulti() {
    function handleChange(newValue) {
      console.log(newValue)
      allInputValues.current[dbLabel] = newValue.map(({value}) => value)
    }
    return (
      <Select
        isMulti
        isClearable
        promptTextCreator={() => false}
        placeholder={`Izvēlies ${label_ak.toLowerCase()}`}
        styles={customStyles}
        onChange={handleChange}
        options={dropdownItems}
        isValidNewOption={() => true}
        noOptionsMessage={() => null}
      />
    );
  }

  function RegularInput() {
    return(
      <input 
        spellCheck="false"
        className="placeholder:text-[#94A3B8] w-full h-[36px] px-[10px] font-medium
        outline-none"
        style={{ backgroundColor: "#293443" }}
        placeholder={`Ievadi ${label_ak.toLowerCase()}`}
        onChange={(e) => {allInputValues.current[dbLabel] = e.target.value}}
      />
    )
  }
  return (
    <>
      {
        dbLabel === "ul"
          ? <RegularInput />
          : <SelectMulti />
      }
    </>
  )
}


// export default function AddExerciseInput({ label, dbLabel, allInputValues }) {
//   const [value, setValue] = useState("")
//   const [selectedOption, setSelectedOption] = useState(false)
//   const [dropdownItems, setDropdownItems] = useState(undefined)
//   const [suggestionsOpen, setSuggestionsOpen] = useState(false)
//   const max = useRef(10)

//   useEffect(() => {
//     switch (dbLabel) {
//       case "main_mm":
//         setDropdownItems(MusclesList.map(({ lat }) => ({
//           value: lat, label: lat
//         })))
//         break;
//       case "secondary_mm":
//         setDropdownItems(MusclesList.map(({ lat }) => ({
//           value: lat, label: lat
//         })))
//         break;

//       default:
//         break;
//     }
//   }, [])


//   return (
//     <div
//       className="relative flex h-[40px] mt-[10px] border-b-[2px] border-b-slate-900"
//     >
//       {
//         dropdownItems !== undefined
//           ? <Select
//             className={`w-full`}
//             defaultValue={selectedOption}
//             onChange={setSelectedOption}
//             options={dropdownItems}
//           />
//           : <input
//             autoComplete={"off"}
//             className="flex grow h-full px-2 bg-slate-600 bg-opacity-25
//             placeholder:text-slate-400 placeholder:font-semibold outline-none"
//             placeholder={`New ${label.toLowerCase()}`}
//             name={dbLabel}
//             value={value}
//             onChange={(e) => {
//               allInputValues.current[dbLabel] = e.target.value
//               if (e.target.value.length > 0 && !suggestionsOpen)
//                 setSuggestionsOpen(true)
//               else if (e.target.value.length === 0 && suggestionsOpen)
//                 setSuggestionsOpen(false)
//               setValue(e.target.value)
//             }}
//           />
//       }
//     </div>
//   )
// }