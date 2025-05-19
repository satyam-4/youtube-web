import { lazy } from "react"

const PageNotFound = lazy(() => import("../pages/PageNotFound.jsx"))

export const NotFoundRoutes = {
    path: "*",
    element: <PageNotFound />
}