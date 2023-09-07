import { useBeforeLeave } from '@solidjs/router';

export const initRouteGuard = () => {
  useBeforeLeave(e => {
    console.log(e.to);
  });
};
