import AdminLayout from "@/components/layouts/AdminLayout";
import AuthLayout from "@/components/layouts/AuthLayout";
import MainLayout from "@/components/layouts/MainLayout";
import Loadable from "@/components/shared/Loadable";
import { USER_ROLES } from "@/constants";
import { authLoader } from "@/routes/loader/auth.loader";
import protectLoader from "@/routes/loader/protect.loader";
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

// Auth Page
const LoginPage = Loadable(lazy(() => import("@/pages/Auth/LoginPage")));
const RegisterPage = Loadable(lazy(() => import("@/pages/Auth/RegisterPage")));

// Client Page
const HomePage = Loadable(lazy(() => import("@/pages/HomePage")));

// Admin Page
const UserPage = Loadable(lazy(() => import("@/pages/admin/UserPage")));

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
        loader: authLoader,
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
    {
        path: "/admin",
        element: <AdminLayout />,
        loader: protectLoader({ roles: [USER_ROLES.ADMIN], to: "/admin/users" }),
        children: [
            { index: true, element: <Navigate to={"/admin/users"} /> },
            {
                path: "users",
                element: <UserPage />,
            },
        ],
    },
]);

export default router;
