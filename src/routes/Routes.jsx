import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import DashboardLayout from '../layouts/DashboardLayout'
import Statistics from '../pages/Dashboard/Common/Statistics'
import Profile from '../pages/Dashboard/Common/Profile'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import AddContest from '../pages/Dashboard/Host/AddContest'
import MyCreatedContest from '../pages/Dashboard/Host/MyCreatedContest'
import ManageContestPage from '../pages/Dashboard/Admin/ManageContestPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contest/:id',
        element: <RoomDetails />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path:'/dashboard',
    element:<DashboardLayout></DashboardLayout>,
    children:[
      {
        index:'true',
        element:<Statistics></Statistics>
      },
      {
       path:'add-contest',
        element:<AddContest></AddContest>
      },
      {
       path:'my-created',
        element:<MyCreatedContest></MyCreatedContest>
      },
      {
       path:'profile',
        element:<Profile></Profile>
      },
      {
       path:'manage-users',
        element:<ManageUsers></ManageUsers>
      },
      {
       path:'manage-contest',
        element:<ManageContestPage></ManageContestPage>
      },
    ]
  }
])
