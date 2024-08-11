import { createBrowserRouter, RouteObject } from "react-router-dom";

import { Home } from "./Home";
import { NoAuthLayout } from "./NoAuthLayout";
import { Privacy } from "./Privacy";
import { Terms } from "./Terms";

export type RouteType = {
  path: string;
  element: JSX.Element;
  children?: {
    index?: boolean;
    path?: string;
    element: JSX.Element
    name: string;
  }[];
}[];

export const routes: RouteType = [
  {
    path: "/",
    element: <NoAuthLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        name: 'SCREEN_NAME.HomePage',
      },
      {
        path: "/terms",
        element: <Terms />,
        name: 'SCREEN_NAME.Terms',
      },
      {
        path: "/privacy",
        element: <Privacy />,
        name: 'SCREEN_NAME.Privacy',
      },
    ],
  },
  {
    path: "*",
    element: <Home />,
  },
];

export const browseRoute = createBrowserRouter(routes as RouteObject[]);
