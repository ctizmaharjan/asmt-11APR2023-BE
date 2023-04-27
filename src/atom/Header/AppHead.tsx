import React from 'react';
import {CONSTANTS} from 'static/constant';

type AppHeadProps = {};

export const AppHead = ({}: AppHeadProps) => (
  <div>
    <title>{CONSTANTS.TAB_TITLE}</title>
    <meta {...CONSTANTS.META} />
    <link rel='icon' href='/favicon.ico' />

    <img src='/logo.png' alt='logo' />
  </div>
);
