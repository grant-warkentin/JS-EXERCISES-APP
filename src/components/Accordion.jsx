import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { ExercisesContext } from "../utils/ExercisesProvider"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"
import { answers, stringifyAnswer } from "../utils/answers"
import "./accordion.css"

function Accordion() {
  const { wkId } = useParams("wkId")
  const { exercises } = useContext(ExercisesContext)
  const [expandedIndex, setExpandedIndex] = useState(-1)

  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1)
    } else {
      setExpandedIndex(nextIndex)
    }
  }

  const prompts = (() => {
    if (exercises?.data) {
      return exercises.data[`wk${wkId}`]?.exercises
    } else {
      return []
    }
  })()

  const renderedPrompts = prompts.map((prompt, index) => {
    const isExpanded = index === expandedIndex
    const icon = (
      <span className="text-xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    )

    const ansNo = `ans${prompt.id.slice(-2)}`
    const ansImport = answers[`exWk${wkId}`][ansNo]
    const ansType = typeof ansImport
    const answer = stringifyAnswer(ansImport, ansType, ansNo)
    window[ansNo] = ansImport // adding to the global scope for debugging

    return (
      <div className="" key={prompt.id}>
        <div
          className="justify-between flex p-3 bg-gray-100 border-b items-center cursor-pointer font-semibold"
          onClick={() => handleClick(index)}
        >
          🎯 {prompt.label}
          {icon}
        </div>
        {isExpanded && (
          <div className="border-b p-5">
            <div
              className="mb-2"
              dangerouslySetInnerHTML={{ __html: prompt.instructions }}
            ></div>
            <hr className="mb-2" />
            <p
              className="mb-2"
              dangerouslySetInnerHTML={{
                __html: `Your <code>${ansNo}</code> ${ansType} result:`,
              }}
            ></p>
            <div className="bg-gray-800 p-4 rounded-md text-white text-sm whitespace-pre-wrap font-mono">
              {answer}
            </div>
          </div>
        )}
      </div>
    )
  })

  return <div className="border-x border-b">{renderedPrompts}</div>
}

export default Accordion
