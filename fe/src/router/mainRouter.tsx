import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout";
import HomeScreen from "../pages/HomeScreen";
import PrivateRoute from "./PrivateRouter";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Landing from "../component/Landing";
import FreeMo from "../pages/auth/FreeMo";
import BroMo from "../pages/auth/BroMo";
import PreMo from "../pages/auth/PreMO";
import DashboardLayout from "../pages/Dashboard/DashboadComponent/DashboardLayout";
import DashboardHomeScreen from "../pages/Dashboard/DashboardHomeScreen";
export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        index: true,
        path: "/dark",
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Register/>,
  },
  {
    path: "/sign in",
    element: <Login/>,
  },
  {
    path: "/landing",
    element: <Landing/>,
  },
  {
    path: "/freemo",
    element: <FreeMo/>,
  },
  {
    path: "/bromo",
    element: <BroMo/>,
  },
  {
    path: "/premo",
    element: <PreMo/>,
  },
  {
    path: "/dashboard",
    element: (<PrivateRoute>
      <DashboardLayout/>
    </PrivateRoute>),
    children: [
      {
        index: true,
        element: <DashboardHomeScreen/>
      },
      {
        index: true,
        path: "/dashboardDark",
        element: <DashboardHomeScreen/>
      }
    ]
  }
]);
