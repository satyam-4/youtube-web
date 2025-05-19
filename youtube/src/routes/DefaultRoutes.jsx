import { lazy, Suspense } from "react"
import AppLayout from "../components/layout/app layout/AppLayout.jsx"
import { paths } from "../config/paths.js"

const Home = lazy(() => import("../pages/Home.jsx"))
const Subscriptions = lazy(() => import("../pages/Subscriptions.jsx"))

export const DefaultRoutes = {
    path: "/",
    element: <AppLayout />,
    children: [
        { 
            path: paths.home.path,
            element: (
                <Suspense fallback={<> </>}>
                    <Home />
                </Suspense>
            )
        },
        {
            path: paths.subscriptions.path,
            element: (
                <Suspense fallback={<> </>}>
                    <Subscriptions />
                </Suspense>
            )
        }
    ]
}