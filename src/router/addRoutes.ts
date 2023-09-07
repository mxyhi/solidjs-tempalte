import { RouteDefinition } from '@solidjs/router';
import { Component } from 'solid-js';
import { useUserRouteConfig } from './config/useUserRouteConfig';
import { UserRouteConfig } from './config';

const initRouteChildren = (route: RouteDefinition) => {
  if (!Array.isArray(route.children)) {
    route.children = [];
  }
  return route;
};

const addRouteChildren = (
  routes: RouteDefinition[],
  routeIndex: number,
  pathList: string[],
  component: Component,
  userRouteConfig: UserRouteConfig
) => {
  const route = initRouteChildren(routes[routeIndex]);

  if (pathList.at(-1) === userRouteConfig.outlet) {
    route.component = component;
  }

  route.children = addRoute(
    route.children as RouteDefinition[],
    pathList.slice(1),
    component
  );

  return routes;
};

const handleIndex = (
  pathName: string,
  routes: RouteDefinition[],
  component: Component,
  userRouteConfig: UserRouteConfig
) => {
  if (pathName === userRouteConfig.index) {
    routes.push({
      path: '/',
      component,
    });
    // addRoute(routes, '/', component);
  }
};

const handlePathName = (pathName: string) => {
  const paramsReg = /\[(.*)\]/;
  const allReg = /\[...(.*)\]/;
  if (allReg.test(pathName)) {
    return pathName.replace(allReg, '*$1');
  }

  if (paramsReg.test(pathName)) {
    return pathName.replace(paramsReg, ':$1');
  }
  return pathName;
};

export const addRoute = (
  routes: RouteDefinition[],
  path: string | string[],
  component: Component
) => {
  const userRouteConfig = useUserRouteConfig();
  const pathList =
    typeof path === 'string' ? path.toLowerCase().split('/') : path;
  const pathName = pathList[0].split(' ').filter(Boolean).join('-');
  const basePath = '/' + handlePathName(pathName);
  const routeIndex = routes.findIndex(r => r.path === basePath);
  if (routeIndex !== -1 && pathList.length > 1) {
    return addRouteChildren(
      routes,
      routeIndex,
      pathList,
      component,
      userRouteConfig
    );
  }

  if (pathList.length > 1) {
    routes.push({
      path: basePath,
      children: addRoute([], pathList.slice(1), component),
    });
    return routes;
  }

  if (pathName === userRouteConfig.outlet) {
    return routes;
  }

  handleIndex(pathName, routes, component, userRouteConfig);

  routes.push({
    path: basePath,
    component,
  });

  return routes;
};
