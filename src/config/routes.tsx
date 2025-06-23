import { AuthLayout } from "@/features/auth/layout/AuthLayout";
import { ForgotPasswordPage } from "@/features/auth/pages/ForgotPasswordPage";
import { LoginPage } from "@/features/auth/pages/LoginPage";
import { ResetPasswordPage } from "@/features/auth/pages/ResetPasswordPage";
import { DeliveryPage } from "@/features/delivery/pages/DeliveryPage";
import { UserProfilePage } from "@/features/user/pages/UserProfilePage";
import { MainLayout } from "@/layout/MainLayout";
import { Navigate, Outlet, type RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: "login", element: <LoginPage /> },
      { path: "forgot-password", element: <ForgotPasswordPage /> },
      { path: "reset-password", element: <ResetPasswordPage /> },
    ],
  },
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <div>Dashboard</div> },
      { path: "profile", element: <UserProfilePage /> },
      {
        path: "entregas",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Navigate to="listar" replace />,
          },
          {
            path: "listar",
            element: <DeliveryPage />,
          },
        ],
      },
      {
        path: "recolecciones",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Navigate to="listar" replace />,
          },
          {
            path: "listar",
            element: <div>Lista de Recolecciones</div>,
          },
        ],
      },
      {
        path: "devoluciones",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Navigate to="listar" replace />,
          },
          {
            path: "listar",
            element: <div>Lista de Devoluciones</div>,
          },
        ],
      },
      {
        path: "reportes",
        element: <div>Reportes</div>,
      },
      {
        path: "*",
        element: <div>404 - Página no encontrada</div>,
      },
    ],
  },
];
