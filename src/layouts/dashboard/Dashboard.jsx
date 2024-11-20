import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

function Dashboard() {
  return (
    <div className="grid grid-cols-12">
        <div className="col-span-2"><Sidebar/></div>
        <div className="col-span-10">
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard