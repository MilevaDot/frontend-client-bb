import { Navigate, Outlet } from "react-router-dom"
import { Paths } from "../routes"

const AuthOutlet = () => {
    const session = localStorage.getItem('token')
    return (
        session ? <Navigate to={Paths.WebsiteHome} /> : <Outlet />
    )
}

export default AuthOutlet