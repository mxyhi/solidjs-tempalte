import { Component } from 'solid-js';
import { addRoute } from '../addRoutes';
import { RouteDefinition } from '@solidjs/router';

export const userRouteConfig: UserRouteConfig = {
  outlet: 'outlet',
  index: 'index',

};

export interface UserRouteConfig {
  outlet: string;
  index: string;

}

export interface UserRoutePlugin {
  (
    routes: RouteDefinition[],
    basePath: string,
    component: Component,
    addUserRoute: typeof addRoute
  ): void | Boolean;
}
