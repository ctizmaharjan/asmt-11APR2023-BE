import {LoginOrganish} from 'organish/Auth/LoginOrganism';
import {BoxLayout} from 'organish/BoxLayout/BoxLayout';
import React from 'react';

type LoginScreenProps = {};

export const LoginScreen = ({}: LoginScreenProps) => (
  <div className='root'>
    <LoginOrganish />
  </div>
);
