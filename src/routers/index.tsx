import React from "react";
import { Navigate, useRoutes, RouteObject as RDRouteObject } from "react-router-dom";
import { RouteObject } from "@/routers/interface";
import LayoutIndex from "@/layouts/index";
import lazyLoad from "./LazyLoad";

// * 导入所有router
const metaRouters: any = import.meta.glob("./modules/*.tsx", { eager: true });

// * 处理路由
const routerArray: RouteObject[] = [];

Object.keys(metaRouters).forEach(item => {
  Object.keys(metaRouters[item]).forEach((key: any) => {
    routerArray.push(...metaRouters[item][key]);
  });
});

export const rootRouter: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/login" />
  },
  {
    path: "/login",
    element: lazyLoad(React.lazy(() => import("@/views/Login/index"))),
    meta: {
      requiresAuth: false,
      title: "登录页",
      key: "login"
    }
  },
  {
    element: <LayoutIndex />,
    meta: {
      title: "通用布局"
    },
    children: [...routerArray]
  },
  {
    path: "*",
    element: <Navigate to="/404" />
  }
];
const Router = () => {
  const routes = useRoutes(rootRouter as RDRouteObject[]);
  return routes;
};

export default Router;
