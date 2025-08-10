import { Navigate, Outlet } from "react-router-dom"
import ErpLayout from "../../shared/layouts/ErpLayout"
import { Paths } from "../routes"

const ErpOutlet = () => {
    const token = localStorage.getItem('token')
    return token ? (
        <ErpLayout>
            <Outlet />
        </ErpLayout>
    ) : (
        <>
            <Navigate to={Paths.WebsiteHome} />
        </>
        
    )
}

export default ErpOutlet