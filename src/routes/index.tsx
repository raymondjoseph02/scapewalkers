import { createBrowserRouter } from "react-router-dom";
import GuestGuardLayout from "../components/global_ui";
import Home from "../components/home_ui/Home";
import { GuestGuard } from "../guards/GuestGuard";
import ContactUs from "../pages/ContactUs";
import Gallary from "../components/gallary_ui/Gallery";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GuestGuard>
        <GuestGuardLayout />
      </GuestGuard>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/gallery",
        element: <Gallary />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);
