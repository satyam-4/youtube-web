import { createRoot } from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import { AuthRoutes } from "./routes/AuthRoutes.jsx"
import { DefaultRoutes } from "./routes/DefaultRoutes.jsx"
import { NotFoundRoutes } from "./routes/NotFoundRoutes.jsx"
import store from "./app/store.js"
import "./index.css"
import { ThemeProvider } from "@contexts/ThemeContext.jsx"

const router = createBrowserRouter([
  DefaultRoutes,
  AuthRoutes,
  NotFoundRoutes
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
)
