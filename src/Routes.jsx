import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import OurServices from "./components/OurServices/OurServices";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/our-services",
    element: <OurServices/>,
  },
  
]);

export default router;
