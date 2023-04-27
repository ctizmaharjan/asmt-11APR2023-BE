import {Button} from 'atom/Button/Button';
import {TextField} from 'atom/Input/TextField';
import {Spacer} from 'atom/Spacer/Spacer';
import {useToast} from 'molecule/Context/ToastContext';
import React from 'react';
import {useNavigate, useNavigation} from 'react-router-dom';
import {routePaths} from 'routing';
import {api} from 'service/api';
import useLocalStorage from 'utils/hooks/useLocalStore';

type LoginFormProps = {};

const loginField = [
  {
    label: 'User ID',
    placeholder: '',
    name: 'UserId',
    required: true,
  },

  {
    label: 'Password',
    placeholder: '',
    name: 'password',
    type: 'password',
    required: true,
  },
];

export const LoginForm = ({}: LoginFormProps) => {
  const {showToast} = useToast();
  const navigation = useNavigate();

  const [user, setUser] = useLocalStorage<any>('user', {});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();

    const {UserId, password} = e?.target;

    try {
      const user = await api.login({
        UserId: UserId?.value,
        password: password?.value,
      });
      showToast('Login Success', 6000, 'success');
      console.log(user, ' ===>>>');
      setUser({
        ...user,
        password: '',
      });
      navigation(routePaths.dashboard.path);
    } catch (error: any) {
      showToast(error?.message, 5000, 'error');
    }
  };
  return (
    <form onSubmit={onSubmit} className='flex-1'>
      {loginField?.map((field) => (
        <TextField {...field} key={field.name} />
      ))}
      <Button type='submit' color='primary'>
        Submit
      </Button>
    </form>
  );
};
