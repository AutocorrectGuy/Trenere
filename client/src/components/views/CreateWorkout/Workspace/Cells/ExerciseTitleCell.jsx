import React from "react"

export const ExerciseTitleCell = ({ ul }) => {
  return (
    <div className="flex min-h-[50px] items-center px-[10px]">
      <div className="select-none">
        {ul}
      </div>
    </div>
  )
}
