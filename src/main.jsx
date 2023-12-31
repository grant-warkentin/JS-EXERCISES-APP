import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./Root"
import ErrorPage from "./pages/error-page"
import "./index.css"
import Accordion from "./components/accordion"
import { ExercisesProvider } from "./utils/ExercisesProvider"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: `exercises/:wkId`,
        element: <Accordion />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <ExercisesProvider>
    <RouterProvider router={router} />
  </ExercisesProvider>
)
