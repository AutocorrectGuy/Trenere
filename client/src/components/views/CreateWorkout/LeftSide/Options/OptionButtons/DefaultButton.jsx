import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DefaultButton = ({ ul, icon, setOpenOptions }) => {
  return (
    <div
      className="flex items-center pl-4 pr-6 py-2 hover:bg-neutral-700 select-none cursor-pointer"
      onClick={() => {
        setOpenOptions(false)
      }}
    >
      <FontAwesomeIcon icon={icon} className="w-5 h-5" />
      <div className="pl-4 whitespace-nowrap">{ul}</div>
    </div>
  )
}

export default DefaultButton