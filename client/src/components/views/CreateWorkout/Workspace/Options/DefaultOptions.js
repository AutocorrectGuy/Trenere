import { faEdit, faTrash, faEye, faAngleDoubleUp, faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import CopyAbove from "./OptionButtons/CopyAbove";
import CopyBelow from "./OptionButtons/CopyBelow";
import Edit from "./OptionButtons/Edit";
import Trash from "./OptionButtons/Trash";
import View from "./OptionButtons/View";

/**
 * Div is exported without <></>, but used in program as <Div ul={ul} icon={icon} />
 */
const OPTIONS = [
  {
    ul: "Apskatīt sīkāk",
    icon: faEye,
    Div: View
  },
  {
    ul: "Rediģēt",
    icon: faEdit,
    Div: Edit
  },
  {
    ul: "Kopēt virs",
    icon: faAngleDoubleUp,
    Div: CopyAbove
  },
  {
    ul: "Kopēt zem",
    icon: faAngleDoubleDown,
    Div: CopyBelow
  },
  {
    ul: "Dzēst",
    icon: faTrash,
    Div: Trash
  }
]

export default OPTIONS