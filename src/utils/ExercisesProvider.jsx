import { createContext, useState, useEffect } from "react"
import PropTypes from "prop-types"

const ExercisesContext = createContext({})

const ExercisesProvider = ({ children }) => {
  const [exercises, setExercises] = useState({
    data: null,
    error: null,
    loading: true,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mf6rmf-8080.csb.app/api/exercises/"
        ) // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        const data = await response.json()
        setExercises({ data, error: null, loading: false })
      } catch (error) {
        setExercises({
          data: null,
          error: "Error fetching data",
          loading: false,
        })
      }
    }

    fetchData()
  }, [])

  const contextValue = {
    exercises,
  }

  return (
    <ExercisesContext.Provider value={contextValue}>
      {children}
    </ExercisesContext.Provider>
  )
}

export { ExercisesContext, ExercisesProvider }

// Props validation
ExercisesProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
