// import { MainPage } from "@/pages/MainPage";
// import NotFoundPage from "@/pages/NotFoundPage";
// import { LoginPage } from "@/pages/LoginPage";
// import { RegisterPage } from "@/pages/RegisterPage";
// import { ProfilePage } from "@/pages/ProfilePage";
// import { ProtectedRoute } from "../../../app/providers/router/ui/ProtectedRoute";
// import { createBrowserRouter, RouteObject } from "react-router-dom";
// import AuthLayout from "@/app/layouts/authLayout";
// import MainLayout from "@/app/layouts/mainLayout";
// import { CartPage } from "@/pages/CartPage";
// import { LikesPage } from "@/pages/LikesPage";
// import { WagonsPage } from "@/pages/WagonsPage";

import { ProtectedRoute } from "@/components/shared/ProtectedRoute";
import { AuthPage } from "@/pages/AuthPage";
import MainPage from "@/pages/MainPage";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const authRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <AuthPage />,
  },
  // {
  //   path: "/register",
  //   element: (
  //     <AuthLayout>
  //       <RegisterPage />
  //     </AuthLayout>
  //   ),
  // },
  // {
  //   path: "/login",
  //   element: (
  //     <AuthLayout>
  //       <LoginPage />
  //     </AuthLayout>
  //   ),
  // },
];

export const appRoutersConfig = createBrowserRouter([
  ...authRoutes,
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainPage />
      </ProtectedRoute>
    ),
    errorElement: (
      <ProtectedRoute>
        <div>Error</div>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      // {
      //   path: "/favorite",
      //   element: <LikesPage />,
      // },
      // {
      //   path: "/cart",
      //   element: <CartPage />,
      // },
      // {
      //   path: "/profile",
      //   element: <ProfilePage />,
      // },
      // {
      //   path: "/wagons/:id",
      //   element: <WagonsPage />,
      // },
    ],
  },
]);
