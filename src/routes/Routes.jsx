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
import MyContest from '../pages/Dashboard/User/MyContest'
import MyWinningContest from '../pages/Dashboard/User/MyWinningContest'
import ManageContest from '../pages/Dashboard/Host/ManageContest '
import PrivateRoute from './PrivateRoute'

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
        element: <PrivateRoute><RoomDetails /></PrivateRoute>
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path:'/dashboard',
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        index:'true',
        element:<PrivateRoute><Statistics></Statistics></PrivateRoute>
      },
      {
       path:'add-contest',
        element:<PrivateRoute><AddContest></AddContest></PrivateRoute>
      },
      {
       path:'my-created',
        element:<PrivateRoute><MyCreatedContest></MyCreatedContest></PrivateRoute>
      },
      {
       path:'profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
       path:'manage-users',
        element:<PrivateRoute><ManageUsers></ManageUsers></PrivateRoute>
      },
      {
       path:'manage-contest-admin',
        element:<PrivateRoute><ManageContestPage></ManageContestPage></PrivateRoute>
      },
      {
       path:'my-contest',
        element:<PrivateRoute><MyContest></MyContest></PrivateRoute>
      },
      {
       path:'my-winning',
        element:<PrivateRoute><MyWinningContest></MyWinningContest></PrivateRoute>
      },
      {
       path:'manage-contest',
        element:<PrivateRoute><ManageContest></ManageContest></PrivateRoute>
      },
    ]
  }
])
