import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import { AuthContext } from "./../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img className="h-7 w-auto" src={logo} alt="Logo" />
          <span className="font-bold text-gray-800 text-lg">Seba Corner</span>
        </Link>

        {/* Hamburger Menu (Mobile Only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex items-center gap-8 ${
            menuOpen ? "block" : "hidden"
          } lg:block absolute lg:relative top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:static lg:p-0 p-4`}
        >
          {/* Active Route Styling */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 lg:py-0 hover:text-blue-500 transition ${
                  isActive ? "text-blue-500 font-semibold" : "text-gray-700"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/productPage"
              className={({ isActive }) =>
                `block py-2 lg:py-0 hover:text-blue-500 transition ${
                  isActive ? "text-blue-500 font-semibold" : "text-gray-700"
                }`
              }
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block py-2 lg:py-0 hover:text-blue-500 transition ${
                  isActive ? "text-blue-500 font-semibold" : "text-gray-700"
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>

          {!user ? (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `block py-2 lg:py-0 hover:text-blue-500 transition ${
                    isActive ? "text-blue-500 font-semibold" : "text-gray-700"
                  }`
                }
              >
                Login
              </NavLink>
            </li>
          ) : (
            <li className="relative">
              <div className="flex items-center gap-4">
                <div className="dropdown relative">
                  <button
                    className="flex items-center gap-2"
                    role="button"
                    tabIndex={0}
                  >
                    <span className="text-gray-800 font-medium">Menu</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    className="dropdown-menu absolute mt-2 bg-white shadow-lg rounded-lg w-40 text-sm text-gray-700 hidden"
                    role="menu"
                  >
                    <li>
                      <NavLink
                        to="add_job"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Add Service
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="my_posted_jobs"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Manage Service
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="booked_section"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Booked Service
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/productPage"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Product
                      </NavLink>
                    </li>
                  </ul>
                </div>

                {/* User Profile */}
                <img
                  src={user?.photoURL}
                  alt="User Profile"
                  className="w-8 h-8 rounded-full border"
                  title={user?.displayName}
                />
                <button
                  onClick={logOut}
                  className="text-red-500 text-sm hover:underline"
                >
                  Logout
                </button>
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
