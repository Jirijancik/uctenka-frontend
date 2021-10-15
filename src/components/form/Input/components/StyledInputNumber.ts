import { InputNumber, InputNumberProps } from 'antd';
import styled, { css } from 'styled-components';

export type StyledInputNumberProps = InputNumberProps & {
  fullWidth: boolean;
};

export const StyledInputNumber = styled(InputNumber)<StyledInputNumberProps>`
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;
