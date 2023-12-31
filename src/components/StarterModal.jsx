import PropTypes from "prop-types"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ExercisesContext } from "../utils/ExercisesProvider"
import CopyButton from "./CopyButton"

const StarterModal = ({ isOpen, onClose }) => {
  const { wkId } = useParams("wkId")
  const { exercises } = useContext(ExercisesContext)

  const starterCode = exercises.data?.[`wk${wkId || "02"}`].startercode || []
  return (
    <div
      className={`fixed inset-0 ${
        isOpen ? "" : "hidden"
      } bg-black bg-opacity-50 flex items-center justify-center`}
    >
      <div className="bg-white p-4 rounded shadow-lg w-11/12 max-w-2xl">
        <button
          className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600 focus:outline-none focus:shadow-outline-blue float-right"
          onClick={onClose}
        >
          Close
        </button>
        <CopyButton textToCopy={starterCode.toString()} />
        <div className="my-3">
          Paste code into{" "}
          <code className="font-semibold">/src/exercises/exWk{wkId}.js</code>
        </div>
        <div className="bg-gray-800 p-4 rounded-md text-white text-sm whitespace-pre-wrap font-mono h-60 overflow-y-auto">
          {starterCode}
        </div>
      </div>
    </div>
  )
}

StarterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default StarterModal
