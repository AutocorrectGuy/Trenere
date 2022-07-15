import React from 'react'
import DefaultButton from './DefaultButton'

const Trash = ({ ul, icon, setOpenOptions }) => {
  return (
    <DefaultButton ul={ul} icon={icon} setOpenOptions={setOpenOptions} />
  )
}

export default Trash