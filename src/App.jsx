import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  PageHome,
  PageLuckyNumber,
  PageProductDetail,
  PageRegister,
} from "./pages";
import { PublicLayout } from "./layout";

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <PageHome />,
      },
      {
        path: "product/:productId",
        element: <PageProductDetail />,
      },
      {
        path: "register",
        element: <PageRegister />,
      },
      {
        path: "lucky-number",
        element: <PageLuckyNumber />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
