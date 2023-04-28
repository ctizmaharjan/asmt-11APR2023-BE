import {validateLogin} from './middleware';

export const api = {
  login: (data: any) => validateLogin(data),
};
