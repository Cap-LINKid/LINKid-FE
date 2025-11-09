import { createBrowserRouter } from "react-router-dom";
import PlainLayout from "../components/layout/PlainLayout";
import Layout from "../components/layout/Layout";
import LoginPage from "../pages/Auth/LoginPage";
import SignupPage from "../pages/Auth/SignupPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
    {
        element: <PlainLayout />,
        children: [
            { path: "/", element: <LoginPage /> },
            { path: "/signup", element: <SignupPage /> },
        ],
    },
    {
        element: <Layout />,
        children: [
            { path: "/dashboard", element: <DashboardPage /> },
        ],
    },
]);