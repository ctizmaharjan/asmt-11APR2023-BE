import React from 'react';
import {CONSTANTS} from 'static/constant';

type FooterProps = {};

export const Footer = ({}: FooterProps) => (
  <footer className='text-center'>
    <span>Developed By - {CONSTANTS.USER}</span>
  </footer>
);
