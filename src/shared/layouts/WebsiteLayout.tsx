import type { ReactElement } from "react"
// import Navbar from "../components/navbar/Navbar"

const WebsiteLayout = ({children}: {
    children: ReactElement
}) => {
    return (
        <>
            {/* <Navbar /> */}
            { children }
        </>
    )
}

export default WebsiteLayout