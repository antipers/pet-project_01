import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { MainScreen } from "./components/main-screen/main-screen";
import { Layout } from "./components/layout/layout";
import { UserContextProvider } from "./contexts/user/provider";
import { MainPrintPage } from "./pages/print-page";
import { PrintFromTelegram } from "./pages/print-from-tg";
import { EnterCodePage } from "./pages/enter-code-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainScreen />,
      },
      { path: "print", element: <MainPrintPage /> },
      {
        path: "print_from_tg",
        element: <PrintFromTelegram />,
      },
      { path: "enter-code", element: <EnterCodePage /> },
    ],
  },
]);
export const App = () => {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
};
