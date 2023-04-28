import {UserData} from 'static/types';
import {fetchApiData} from './fetchService';

type DataT = Pick<UserData, 'UserId' | 'password'>;

export const validateLogin = async ({UserId, password}: DataT) => {
  const userData = await fetchApiData<[UserData]>('/users', {});

  const user = userData.find(
    (user) => user.UserId === UserId && user.password === password
  );
  if (!user) {
    throw new Error('Invalid username or password');
  }
  return user;
};
