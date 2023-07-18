import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageHome, PageProductDetail } from "./pages";
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
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
