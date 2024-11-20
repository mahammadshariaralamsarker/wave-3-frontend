import React from 'react'
import { NavLink } from 'react-router-dom'

function SellerNav() {
  return (
    <div>
        <ul className="flex flex-col gap-5 mb-8 mt-10 ">
          <li>
            <NavLink className="btn  w-full" to="/dashboard/addProduct">
              Add New product
            </NavLink>
          </li>
          <li>
            <NavLink className="btn  w-full" to="/dashboard/listedProduct">
              listed Product
            </NavLink>
          </li>
        </ul>
    </div>
  )
}

export default SellerNav