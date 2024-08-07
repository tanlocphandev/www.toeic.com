import AdminLayout from "@/components/layouts/AdminLayout";
import AuthLayout from "@/components/layouts/AuthLayout";
import MainLayout from "@/components/layouts/MainLayout";
import Loadable from "@/components/shared/Loadable";
import NavigationScroll from "@/components/shared/NavigationScroll/NavigationScroll";
import ProtectRouteLoader from "@/components/shared/ProtectRouteLoader/ProtectRouteLoader";
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
const ExamResultPage = Loadable(lazy(() => import("@/pages/ExamPage/ResultExamPage")));
const DocumentPage = Loadable(lazy(() => import("@/pages/DocumentPage")));
const StatisticalPage = Loadable(lazy(() => import("@/pages/StatisticalPage")));
const ResultsPage = Loadable(lazy(() => import("@/pages/ResultsPage")));
const FinishedPage = Loadable(lazy(() => import("@/pages/FinishedPage")));
const DocDetails = Loadable(lazy(() => import("@/pages/DocumentPage/DocDetails")));
const ProfilePage = Loadable(lazy(() => import("@/pages/ProfilePage")));

// Admin Page
const UserPage = Loadable(lazy(() => import("@/pages/admin/UserPage")));
const TagPage = Loadable(lazy(() => import("@/pages/admin/TagPage")));
const PartPage = Loadable(lazy(() => import("@/pages/admin/PartPage")));
const QuestionTypePage = Loadable(lazy(() => import("@/pages/admin/QuestionTypePage")));
const DocumentAdminPage = Loadable(lazy(() => import("@/pages/admin/DocumentPage")));
const TestPage = Loadable(lazy(() => import("@/pages/admin/TestPage")));
const CommentPage = Loadable(lazy(() => import("@/pages/admin/CommentPage")));
const DashboardPage = Loadable(lazy(() => import("@/pages/admin/DashboardPage")));
const AddEditTestPage = Loadable(lazy(() => import("@/pages/admin/TestPage/AddEditTestPage")));
const ScoreAdminPage = Loadable(lazy(() => import("@/pages/admin/ScorePage")));
const AddEditScoreAdminPage = Loadable(
    lazy(() => import("@/pages/admin/ScorePage/AddEditScorePage"))
);
const AddEditDocAdminPage = Loadable(
    lazy(() => import("@/pages/admin/DocumentPage/AddEditDocPage"))
);
const RoleAdminPage = Loadable(lazy(() => import("@/pages/admin/UserPage/RolePage")));

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: (
                <NavigationScroll>
                    <MainLayout />
                </NavigationScroll>
            ),
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: "profile",
                    element: (
                        <ProtectRouteLoader>
                            <ProfilePage />
                        </ProtectRouteLoader>
                    ),
                    loader: protectLoader([USER_ROLES.ADMIN, USER_ROLES.TEACHER, USER_ROLES.USER]),
                },
                {
                    path: "practice-lc-rc",
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
                                    element: (
                                        <ProtectRouteLoader>
                                            <PartDetailsPage />
                                        </ProtectRouteLoader>
                                    ),
                                    loader: protectLoader([
                                        USER_ROLES.ADMIN,
                                        USER_ROLES.TEACHER,
                                        USER_ROLES.USER,
                                    ]),
                                },
                            ],
                        },
                    ],
                },
                {
                    path: "finished/:resultId",
                    element: (
                        <ProtectRouteLoader>
                            <FinishedPage />
                        </ProtectRouteLoader>
                    ),
                    loader: protectLoader([USER_ROLES.ADMIN, USER_ROLES.TEACHER, USER_ROLES.USER]),
                },
                {
                    path: "results/:resultId",
                    element: (
                        <ProtectRouteLoader>
                            <ResultsPage />
                        </ProtectRouteLoader>
                    ),
                    loader: protectLoader([USER_ROLES.ADMIN, USER_ROLES.TEACHER, USER_ROLES.USER]),
                },
                {
                    path: "exams",
                    children: [
                        {
                            index: true,
                            element: <ExamPage />,
                        },
                        {
                            path: ":id",
                            loader: protectLoader([
                                USER_ROLES.ADMIN,
                                USER_ROLES.TEACHER,
                                USER_ROLES.USER,
                            ]),
                            element: (
                                <ProtectRouteLoader>
                                    <ExamDetailPage />
                                </ProtectRouteLoader>
                            ),
                        },
                        {
                            path: "exam-result/:id",
                            loader: protectLoader([
                                USER_ROLES.ADMIN,
                                USER_ROLES.TEACHER,
                                USER_ROLES.USER,
                            ]),
                            element: (
                                <ProtectRouteLoader>
                                    <ExamResultPage />
                                </ProtectRouteLoader>
                            ),
                        },
                    ],
                },
                {
                    path: "documents",
                    children: [
                        {
                            index: true,
                            element: <DocumentPage />,
                        },
                        {
                            path: ":docId",
                            element: <DocDetails />,
                        },
                    ],
                },
                {
                    path: "statistical",
                    element: (
                        <ProtectRouteLoader>
                            <Outlet />
                        </ProtectRouteLoader>
                    ),
                    loader: protectLoader([USER_ROLES.ADMIN, USER_ROLES.TEACHER, USER_ROLES.USER]),
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
            element: (
                <NavigationScroll>
                    <AuthLayout />
                </NavigationScroll>
            ),
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
            element: (
                <NavigationScroll>
                    <ProtectRouteLoader>
                        <AdminLayout />
                    </ProtectRouteLoader>
                </NavigationScroll>
            ),
            loader: protectLoader([USER_ROLES.ADMIN, USER_ROLES.TEACHER]),
            children: [
                { index: true, element: <Navigate to={"/admin/documents"} /> },
                {
                    path: "dashboard",
                    element: <DashboardPage />,
                },
                {
                    path: "users",
                    element: (
                        <ProtectRouteLoader>
                            <UserPage />
                        </ProtectRouteLoader>
                    ),
                    loader: protectLoader([USER_ROLES.ADMIN]),
                },
                {
                    path: "roles",
                    element: (
                        <ProtectRouteLoader>
                            <RoleAdminPage />
                        </ProtectRouteLoader>
                    ),
                    loader: protectLoader([USER_ROLES.ADMIN]),
                },
                {
                    path: "documents",
                    children: [
                        {
                            index: true,
                            element: <DocumentAdminPage />,
                        },
                        {
                            path: "add",
                            element: <AddEditDocAdminPage />,
                        },
                        {
                            path: "edit/:id",
                            element: <AddEditDocAdminPage />,
                        },
                    ],
                },
                {
                    path: "tests",
                    element: (
                        <ProtectRouteLoader>
                            <Outlet />
                        </ProtectRouteLoader>
                    ),
                    loader: protectLoader([USER_ROLES.TEACHER]),
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
                    path: "scores",
                    element: (
                        <ProtectRouteLoader>
                            <Outlet />
                        </ProtectRouteLoader>
                    ),
                    loader: protectLoader([USER_ROLES.TEACHER]),
                    children: [
                        {
                            index: true,
                            element: <ScoreAdminPage />,
                        },
                        {
                            path: "add",
                            element: <AddEditScoreAdminPage />,
                        },
                        {
                            path: "edit/:id",
                            element: <AddEditScoreAdminPage />,
                        },
                    ],
                },
                {
                    path: "categories",
                    element: (
                        <ProtectRouteLoader>
                            <Outlet />
                        </ProtectRouteLoader>
                    ),
                    loader: protectLoader([USER_ROLES.TEACHER]),
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
            element: (
                <NavigationScroll>
                    <NotFoundPage />
                </NavigationScroll>
            ),
        },
    ],
    {
        // window:  ,
    }
);

if (import.meta.hot) {
    import.meta.hot.dispose(() => router.dispose());
}

export default router;
