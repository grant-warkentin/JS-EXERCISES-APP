import { Outlet, NavLink, useParams } from "react-router-dom"
import { useContext, useState } from "react"
import { ExercisesContext } from "./utils/ExercisesProvider"
import StarterModal from "./components/StarterModal"
export default function Root() {
  const { wkId } = useParams("wkId")
  const { exercises } = useContext(ExercisesContext)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">CS122 | JavaScript Essentials</h1>
          <h2 className="mt-2">Prof. Montoya, Spring 2024</h2>
          <hr className="my-4" />
          {exercises.loading && <p>Loading...</p>}
          {exercises.error && <p>{exercises.error}</p>}
          {exercises.data && (
            <nav className="mt-4">
              <div className="container mx-auto">
                <ul className="flex">
                  {Object.keys(exercises.data).map((wk) => (
                    <li key={wk} className="mr-4">
                      <NavLink
                        to={`/exercises/${wk.slice(-2)}`}
                        className={({ isActive }) =>
                          "btn-link" + (isActive ? " activated" : "")
                        }
                      >
                        {`W${wk.slice(1)}`}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          )}
          <hr className="my-4" />
          {wkId && (
            <>
              <button
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-blue float-right"
                onClick={openModal}
              >
                Get Starter Code
              </button>
              <h2 className="text-2xl font-semibold mb-4">
                Week {wkId} Exercises
              </h2>
              <StarterModal isOpen={isModalOpen} onClose={closeModal} />
              <div className="mt-4 max-w-2xl" id="exercises">
                <Outlet />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
