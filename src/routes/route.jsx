import AuthLayout from "@/components/layouts/AuthLayout";
import MainLayout from "@/components/layouts/MainLayout";
import Loadable from "@/components/shared/Loadable";
import RegisterPage from "@/pages/Auth/RegisterPage";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const LoginPage = Loadable(lazy(() => import("@/pages/Auth/LoginPage")));
const HomePage = Loadable(lazy(() => import("@/pages/HomePage")));

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
        ],
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <RegisterPage />,
            },
        ],
    },
]);

export default router;
