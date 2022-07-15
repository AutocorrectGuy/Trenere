import React from "react"
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sortableHandle } from "react-sortable-hoc";

const GrabHandleCell = sortableHandle(() =>
  <div className="flex h-[50px] items-center select-none px-4 cursor-grab translate-y-px">
    <FontAwesomeIcon
      icon={faGripHorizontal}
      className={"text-neutral-600 w-5 h-5"}
    />
  </div>
)

export default GrabHandleCell