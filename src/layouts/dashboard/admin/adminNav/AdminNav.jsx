
import { NavLink } from 'react-router-dom'

function AdminNav() {
  return (
    <div>
          <ul className="flex flex-col gap-5 mb-8 mt-10 ">
          <li>
            <NavLink className="btn  w-full" to="/dashboard/viewalluser">
              View All Users
            </NavLink>
          </li>
        </ul>
    </div>
  )
}

export default AdminNav