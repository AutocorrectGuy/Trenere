import React from 'react'
import { sortableHandle } from "react-sortable-hoc";

const DragHandle = sortableHandle(() => <div className="select-none pr-4 cursor-grab">: : :</div>)

export const ExerciseTitleCell = ({ ul }) => {
  return (
    <div className="flex pr-2 h-[30px] items-center">
      <DragHandle />
      <div className="select-none">
        {ul}
      </div>
    </div>
  )
}
