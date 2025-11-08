import { createBrowserRouter } from "react-router-dom";
import PlainLayout from "../components/layout/PlainLayout";
import LoginPage from "../pages/Auth/LoginPage";

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
    {
        element: <PlainLayout />,
        children: [
            { path: "/", element: <LoginPage /> },
        ],
    },
]);