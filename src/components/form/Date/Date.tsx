import React from 'react';
import { StyledDate, StyledDatePickerProps } from './components/StyledDate';

export const Date: React.VFC<StyledDatePickerProps> = props => {
  console.log();

  return <StyledDate {...props} />;
};
