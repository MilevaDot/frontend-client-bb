import { Outlet } from "react-router-dom"
import WebsiteLayout from "../../shared/layouts/WebsiteLayout"

const WebsiteOutlet = () => {
    return (
        <WebsiteLayout>
            <Outlet />
        </WebsiteLayout>
    )
}

export default WebsiteOutlet