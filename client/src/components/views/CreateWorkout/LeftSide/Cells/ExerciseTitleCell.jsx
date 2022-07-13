import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { sortableHandle } from "react-sortable-hoc";

const DragHandle = sortableHandle(() =>
  <div className="flex h-full items-center select-none pr-4 cursor-grab translate-y-px">
    <FontAwesomeIcon
      icon={faGripHorizontal}
      className={"text-neutral-600 w-5 h-5"}
    />
  </div>)

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
