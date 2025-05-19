import { lazy, Suspense } from "react"
import AuthLayout from "../components/layout/shared/AuthLayout.jsx"
import { paths } from "../config/paths.js"

const Login = lazy(() => import("../pages/auth/Login.jsx"))
const Register = lazy(() => import("../pages/auth/Register.jsx"))

export const AuthRoutes = {
    path: "/auth",
    element: <AuthLayout />,
    children: [
        {
            path: paths.auth.register.path.split("/").pop(),
            element: (
                <Suspense fallback={<> </>}>
                    <Register />
                </Suspense>
            )
        },
        {
            path: paths.auth.login.path.split("/").pop(),
            element: (
                <Suspense fallback={<> </>}>
                    <Login />
                </Suspense>
            )
        }
    ]
}