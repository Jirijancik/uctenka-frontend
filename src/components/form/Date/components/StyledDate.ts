import { DatePicker, DatePickerProps } from 'antd';
import styled, { css } from 'styled-components';

export type StyledDatePickerProps = DatePickerProps & {
  fullWidth: boolean;
};

export const StyledDate = styled(DatePicker)<StyledDatePickerProps>`
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;
