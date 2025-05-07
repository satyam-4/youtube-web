import { createRoot } from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import { AuthRoutes } from "./routes/AuthRoutes.jsx"
import { DefaultRoutes } from "./routes/DefaultRoutes.jsx"
import store from "./app/store.js"
import "./index.css"

const router = createBrowserRouter([
  DefaultRoutes,
  AuthRoutes
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
