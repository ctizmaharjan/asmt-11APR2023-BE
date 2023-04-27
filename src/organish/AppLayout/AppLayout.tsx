import {Footer} from 'atom/Footer/Footer';
import {AppHead} from 'atom/Header/AppHead';
import React from 'react';
import {ChildrenProps} from 'static/types';

interface AppLayoutProps extends ChildrenProps {}

export const AppLayout = ({children}: AppLayoutProps) => (
  <div className='root'>
    <AppHead />
    {children}
    <Footer />
  </div>
);
