import { createRoot } from "react-dom/client";
import subveggieName from "./src/images/sub-veggie-delight.png";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./src/components/Error";
import About from "./src/components/About";
import Contact from "./src/components/Contact";


/* One-way to pass data to functional component individual field instead of json i.e. 
<RestaurantCard resName="Subway" cuisine="Veggie Delight"/>  */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
     <Outlet/>
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
    ],
    errorElement: <Error />,
  },
]);
const root = createRoot(document.getElementById("root"));

//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
