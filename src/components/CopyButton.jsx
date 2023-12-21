import { useRef } from "react"
import PropTypes from "prop-types"

const CopyButton = ({ textToCopy }) => {
  const textRef = useRef(null)

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      alert("Text copied to clipboard!")
    } catch (err) {
      console.error("Unable to copy text to clipboard", err)
    }
  }

  return (
    <div>
      <div ref={textRef} className="hidden">
        {textToCopy}
      </div>
      <button
        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        onClick={handleCopyToClipboard}
      >
        {"</>"} Copy
      </button>
    </div>
  )
}

export default CopyButton

CopyButton.propTypes = {
  textToCopy: PropTypes.string.isRequired,
}
