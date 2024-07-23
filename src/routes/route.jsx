import AdminLayout from "@/components/layouts/AdminLayout";
import AuthLayout from "@/components/layouts/AuthLayout";
import MainLayout from "@/components/layouts/MainLayout";
import Loadable from "@/components/shared/Loadable";
import { USER_ROLES } from "@/constants";
import { authLoader } from "@/routes/loader/auth.loader";
import protectLoader from "@/routes/loader/protect.loader";
import { lazy } from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

// Forbidden Page
const ForbiddenPage = Loadable(lazy(() => import("@/pages/ForbiddenPage")));

// Notfound Page
const NotFoundPage = Loadable(lazy(() => import("@/pages/NotFoundPage")));

// Auth Page
const LoginPage = Loadable(lazy(() => import("@/pages/Auth/LoginPage")));
const RegisterPage = Loadable(lazy(() => import("@/pages/Auth/RegisterPage")));

// Client Page
const HomePage = Loadable(lazy(() => import("@/pages/HomePage")));
const PracticeDetailsPage = Loadable(
    lazy(() => import("@/pages/PracticeLRPage/PracticeDetailsPage"))
);
const PartDetailsPage = Loadable(lazy(() => import("@/pages/PracticeLRPage/PartDetailsPage")));
const ExamPage = Loadable(lazy(() => import("@/pages/ExamPage/ExamPage")));
const ExamDetailPage = Loadable(lazy(() => import("@/pages/ExamPage/ExamDetailPage")));
const ExamResultPage = Loadable(lazy(() => import("@/pages/ExamPage/components/ResultExamPage")));
const DocumentPage = Loadable(lazy(() => import("@/pages/DocumentPage")));
const StatisticalPage = Loadable(lazy(() => import("@/pages/StatisticalPage")));
const ResultsPage = Loadable(lazy(() => import("@/pages/ResultsPage")));

// Admin Page
const UserPage = Loadable(lazy(() => import("@/pages/admin/UserPage")));
const TagPage = Loadable(lazy(() => import("@/pages/admin/TagPage")));
const PartPage = Loadable(lazy(() => import("@/pages/admin/PartPage")));
const QuestionTypePage = Loadable(lazy(() => import("@/pages/admin/QuestionTypePage")));
const PostPage = Loadable(lazy(() => import("@/pages/admin/PostPage")));
const TestPage = Loadable(lazy(() => import("@/pages/admin/TestPage")));
const CommentPage = Loadable(lazy(() => import("@/pages/admin/CommentPage")));
const DashboardPage = Loadable(lazy(() => import("@/pages/admin/DashboardPage")));
const AddEditTestPage = Loadable(lazy(() => import("@/pages/admin/TestPage/AddEditTestPage")));

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "practice-lc-rc",
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <Navigate to={"/404"} />,
                    },
                    {
                        path: ":slug",
                        element: <Outlet />,
                        children: [
                            {
                                index: true,
                                element: <PracticeDetailsPage />,
                            },
                            {
                                path: ":partId/:testId",
                                element: <PartDetailsPage />,
                            },
                        ],
                    },
                ],
            },
            {
                path: "results/:resultId",
                element: <ResultsPage />,
            },
            {
                path: "exams",
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <ExamPage />,
                    },
                    {
                        path: ":id",
                        element: <ExamDetailPage />,
                    },
                    {
                        path: "exam-result/:id",
                        element: <ExamResultPage />,
                    },
                ],
            },
            {
                path: "documents",
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <DocumentPage />,
                    },
                ],
            },
            {
                path: "statistical",
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <StatisticalPage />,
                    },
                ],
            },
        ],
    },
    {
        path: "/403",
        element: <ForbiddenPage />,
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
            { index: true, element: <Navigate to={"/admin/dashboard"} /> },
            {
                path: "dashboard",
                element: <DashboardPage />,
            },
            {
                path: "users",
                element: <UserPage />,
            },
            {
                path: "posts",
                element: <PostPage />,
            },
            {
                path: "tests",
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <TestPage />,
                    },
                    {
                        path: "add",
                        element: <AddEditTestPage />,
                    },
                    {
                        path: "edit/:id",
                        element: <AddEditTestPage />,
                    },
                ],
            },
            {
                path: "comments",
                element: <CommentPage />,
            },
            {
                path: "categories",
                element: <Outlet />,
                children: [
                    {
                        path: "tags",
                        element: <TagPage />,
                    },
                    {
                        path: "parts",
                        element: <PartPage />,
                    },
                    {
                        path: "question-types",
                        element: <QuestionTypePage />,
                    },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

if (import.meta.hot) {
    import.meta.hot.dispose(() => router.dispose());
}

export default router;
