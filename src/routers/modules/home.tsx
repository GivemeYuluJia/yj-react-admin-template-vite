import React from "react";
import { RouteObject } from "@/routers/interface";
import lazyLoad from "../LazyLoad";

// 首页模块
const homeRouter: Array<RouteObject> = [
  {
    path: "/home/index",
    element: lazyLoad(React.lazy(() => import("@/views/Home/index.tsx"))),
    meta: {
      requiresAuth: true,
      title: "首页",
      key: "home"
    }
  }
];

export default homeRouter;
