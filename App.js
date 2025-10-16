import { createRoot } from "react-dom/client";
import subveggieName from "./src/images/sub-veggie-delight.png";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./src/components/Error";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { lazy, Suspense } from "react";
import Shimmer from "./src/components/Shimmer";
import Pagination from "./src/components/Pagination";
/* One-way to pass data to functional component individual field instead of json i.e. 
<RestaurantCard resName="Subway" cuisine="Veggie Delight"/>  */
// {Header()} or <Header></Header>
const Groccery = lazy(() => import("./src/components/Groccery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header /> 
     
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/pagination",
        element: <Pagination />,
      },
      {
        path: "/groccery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Groccery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />, 
  },
]);
const root = createRoot(document.getElementById("root"));

//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
