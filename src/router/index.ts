import {
  RouteDefinition,
  useRoutes,
  useBeforeLeave,
  useResolvedPath,
} from '@solidjs/router';
import { Component, lazy } from 'solid-js';
import { addRoute } from './addRoutes';

export const routes: RouteDefinition[] = [];

const modules = import.meta.glob(['/src/modules/**/*.tsx', '!**/components/*']);

Object.keys(modules).forEach(path => {
  const targetPath = path.replace('/src/modules/', '').replace('.tsx', '');
  const importMod = modules[path] as () => Promise<{
    default: Component;
  }>;
  addRoute(routes, targetPath, lazy(importMod));
});

export const UserRouter = useRoutes(routes);
