import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App.jsx"
import store from "./app/store.js"
import { Provider } from 'react-redux'
import Home from './pages/youtube/Home'
import Login from './pages/youtube/Login'
import Register from './pages/youtube/Register'
import Subscriptions from './pages/youtube/Subscriptions'
import You from './pages/youtube/You.jsx'
import History from './pages/youtube/History.jsx'
import Playlists from './pages/youtube/Playlists.jsx'
import WatchLater from './pages/youtube/WatchLater.jsx'
import LikedVideos from './pages/youtube/LikedVideos.jsx'
import Settings from './pages/youtube/Settings.jsx'
import Account from './pages/youtube/Account.jsx'
import Notifications from "./pages/youtube/Notifications.jsx"
import Downloads from "./pages/youtube/Downloads.jsx"
import AdvancedSettings from "./pages/youtube/AdvancedSettings.jsx"
import Privacy from "./pages/youtube/Privacy.jsx"
import Dashboard from './pages/studio/Dashboard.jsx'
import Content from './pages/studio/Content.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: 
    [
      {
        path: "/",    
        element: <Home/>
      },
      {
        path: "/subscriptions",
        element: <Subscriptions/>
      },
      {
        path: "/you",
        element: <You/>
      },
      {
        path: "/history",
        element: <History/>
      },
      {
        path: "/playlists",
        element: <Playlists/>
      },
      {
        path: "/watch-later",
        element: <WatchLater/>
      },
      {
        path: "/liked-videos",
        element: <LikedVideos/>
      },
      {
        path: "/settings",
        element: <Settings/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/account",
        element: <Account />,
        children: [
          { path: "notifications", element: <Notifications /> },
          { path: "downloads", element: <Downloads /> },
          { path: "privacy", element: <Privacy /> },
          { path: "advanced", element: <AdvancedSettings /> }
        ]
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/content",
        element: <Content />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
