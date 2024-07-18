import Header from "./components/Header";
import Sidebar, { MobileSidebar } from "./components/Sidebar";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function Layout() {
  return (
    <>
      <Header />
      <div className="flex items-start justify-between gap-4 sm:mb-0 mb-11">
        <div className="flex-1 sm:block hidden w-full sticky top-[66px]">
          <Sidebar />
        </div>
        <div className=" lg:flex-4 flex-7">
          <Outlet />
        </div>
      </div>

      <div className="fixed bottom-0 sm:hidden block w-full z-50">
        <MobileSidebar />
      </div>
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/favorites", element: <Favorites /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
