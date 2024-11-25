import { Outlet } from "react-router-dom"
import Banner from "../Banner"

const DefaultPage = () =>{
    return(
        <div>
            <Banner/>
            <Outlet/>
        </div>
    )
}

export default DefaultPage