import {createBrowserRouter} from "react-router-dom";
import Main from './../layouts/Main';
import Login from "../pages/Authentication/Login";
import Home from "../../src/pages/Home"
import Registration from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJob";
import Update from './../pages/Update.jsx';
import AllJobs from "../Components/Alljobs.jsx";
import BookedService from "../pages/BookedService.jsx";
import BookedServiceDetails from "../pages/BookedServiceDetails.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import PrivateRoute from './PrivateRoute.jsx';
import ProductMainPage from "../pages/productPage/productMainPage.jsx";
import Dashboard from "../layouts/dashboard/Dashboard.jsx";
import AddProductPage from "../layouts/dashboard/seller/addProduct/addProductPage.jsx";
import ViewProductPage from "../layouts/dashboard/seller/viewProductPage/ViewProductPage.jsx";
import EditProductPage from "../layouts/dashboard/seller/editProductPage/editProductPage.jsx";
import SeeAllUser from "../layouts/dashboard/admin/seeAllUser/SeeAllUser.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
    
      children: [
        {
          index:true,
          element:<Home />,
          loader:()=>fetch(`${import.meta.env.VITE_API_URL}/job`),
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Registration></Registration>
        },
        {
          path:'/job/:id',
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader : ({params}) =>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
        },
        {
          path:'/update/:id',
          element:<Update></Update>,
          loader : ({params}) =>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
        },
        {
          path:'/add_job',
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path:'/my_posted_jobs',
          element:<MyPostedJobs></MyPostedJobs>
        },
        {
          path: "/jobs",
          element:<AllJobs></AllJobs>
        },
        {
          path:'/booked_section',
          element:<PrivateRoute><BookedService></BookedService></PrivateRoute>,
        },
        {
          path : "/booked/:id",
          element: <PrivateRoute><BookedServiceDetails></BookedServiceDetails></PrivateRoute>,
          loader : ({params}) =>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
        },
        {
          path: "/productPage",
          element:<ProductMainPage></ProductMainPage>,
          loader: () => fetch('http://localhost:5000/products'),
          
        },
      ]
    },
    {
      path:'/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      loader : ({params}) =>fetch(`http://localhost:5000/users/${params.email}`),
      children:[
        {
          path:'/dashboard/addProduct',
          element:<AddProductPage/>
        },
        {
          path:'/dashboard/listedProduct',
          element:<ViewProductPage></ViewProductPage>,
          loader : ({params}) =>fetch(`http://localhost:5000/products/${params.email}`),
        },
        {
          path:'/dashboard/editProduct',
          element:<EditProductPage></EditProductPage>
        },
        {
          path:'/dashboard/viewalluser',
          element:<SeeAllUser/>,
          loader: () => fetch('http://localhost:5000/users'),
        },
      ]

    }
  ]);
  export default router