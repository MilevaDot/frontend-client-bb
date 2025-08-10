import type { ReactElement } from "react"
import Navbar from "../components/navbar/Navbar"

const ErpLayout = ({children}: {
    children: ReactElement
}) => {
    return (
        <>
            <Navbar />
            { children }
        </>
    )
}

export default ErpLayout