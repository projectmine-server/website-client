import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const App = lazy(() => import("./App"));
const Main = lazy(() => import("./routes/Main/Main"));
const Shop = lazy(() => import("./routes/Shop/Shop"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <App />
      </Suspense>
    ),
    errorElement: (
      <Suspense>
        <App isError />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <Main />
          </Suspense>
        ),
      },
      {
        path: "shop",
        element: (
          <Suspense>
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
