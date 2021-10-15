import React from 'react';
import { StyledInputNumber, StyledInputNumberProps } from './components/StyledInputNumber';

export const InputNumber: React.VFC<StyledInputNumberProps> = props => {
  console.log();

  return <StyledInputNumber {...props} />;
};
