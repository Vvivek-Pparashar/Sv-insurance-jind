import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
// import OurServices from "./components/OurServices/OurServices";
// import AboutUs from "./components/AboutUs/AboutUs";
// import ContactUs from "./components/ContactUs/ContactUs";
// import { Suspense } from "react";

const OurServices = React.lazy(() =>
  import("./components/OurServices/OurServices")
);

const AboutUs = React.lazy(() => import("./components/AboutUs/AboutUs"));

const ContactUs = React.lazy(() => import("./components/ContactUs/ContactUs"));
// const OtherComponent = React.lazy(() => import('./OtherComponent'));
// const OtherComponent = React.lazy(() => import('./OtherComponent'));
// const OtherComponent = React.lazy(() => import('./OtherComponent'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about-us",
    element: (
      <Suspense fallback={<h2>Loading....</h2>}>
        <AboutUs />
      </Suspense>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <Suspense>
        <ContactUs />
      </Suspense>
    ),
  },
  {
    path: "/our-services",
    element: (
      <Suspense>
        <OurServices />
      </Suspense>
    ),
  },
]);

export default router;
