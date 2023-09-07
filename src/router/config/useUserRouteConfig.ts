import { UserRouteConfig, userRouteConfig } from './index';

export const useUserRouteConfig = ({
  outlet = 'outlet',
  index = 'index',
}: Partial<UserRouteConfig> = {}): UserRouteConfig => {
  userRouteConfig.outlet = outlet;
  userRouteConfig.index = index;

  return {
    outlet,
    index,
  };
};
