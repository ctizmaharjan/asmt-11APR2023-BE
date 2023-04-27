import React from 'react';

interface Props {
  height?: string;
  width?: string;
}

export const Spacer: React.FC<Props> = ({height = '0px', width = '0px'}) => {
  return <div style={{height, width}}></div>;
};
