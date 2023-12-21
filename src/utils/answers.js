import * as exWk01 from "../exercises/exWk01"
import * as exWk02 from "../exercises/exWk02"
import * as exWk03 from "../exercises/exWk03"
import * as exWk04 from "../exercises/exWk04"
import * as exWk05 from "../exercises/exWk05"
import * as exWk06 from "../exercises/exWk06"
import * as exWk07 from "../exercises/exWk07"
import * as exWk08 from "../exercises/exWk08"
import * as exWk09 from "../exercises/exWk09"
import * as exWk10 from "../exercises/exWk10"
import * as exWk11 from "../exercises/exWk11"
import * as exWk12 from "../exercises/exWk12"
import * as exWk13 from "../exercises/exWk13"
import * as exWk14 from "../exercises/exWk14"
import * as exWk15 from "../exercises/exWk15"
import * as exWk16 from "../exercises/exWk16"

const answers = {
  exWk01,
  exWk02,
  exWk03,
  exWk04,
  exWk05,
  exWk06,
  exWk07,
  exWk08,
  exWk09,
  exWk10,
  exWk11,
  exWk12,
  exWk13,
  exWk14,
  exWk15,
  exWk16,
}

function stringifyAnswer(ansImport, ansType, ansNo) {
  const ansResult =
    ansType === "function"
      ? ansImport()
      : ansType === "undefined"
      ? `export function ${ansNo} not found!`
      : `ERROR! ${ansNo} is not a function.`
  const answer =
    typeof ansResult === "string"
      ? ansResult
      : typeof ansResult === "number"
      ? ansResult.toString()
      : Array.isArray(ansResult) === true
      ? `[${ansResult.join(", ")}]`
      : typeof ansResult === "object"
      ? JSON.stringify(ansResult, null, 2)
      : typeof ansResult === "boolean"
      ? ansResult.toString()
      : typeof ansResult === "function"
      ? ansResult.toString()
      : typeof ansResult === "symbol"
      ? ansResult.toString()
      : ansResult === undefined
      ? "undefined"
      : ansResult === null
      ? "null"
      : typeof ansResult === "bigint"
      ? ansResult.toString()
      : ansResult
  return answer
}

export { answers, stringifyAnswer }
