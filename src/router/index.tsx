import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import IntroPage from "../components/Page/IntroPage";

export const router = [
  { element: <Layout />, children: [{ path: "/", element: <IntroPage /> }] },
];

export const routes = createBrowserRouter(router);
