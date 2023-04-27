import {Card} from 'atom/Card/Card';
import {LoginForm} from 'molecule/Forms/LoginForm';
import {BoxLayout} from 'organish/BoxLayout/BoxLayout';
import React from 'react';

type LoginOrganishProps = {};

export const LoginOrganish = ({}: LoginOrganishProps) => (
  <div className='container'>
    <Card>
      <LoginForm />
    </Card>
  </div>
);
