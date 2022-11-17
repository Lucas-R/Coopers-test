import styled from 'styled-components';
import { color } from '../../theme';
import { pxToRem } from '../../utils/pxToRem';
import { ButtonStyleProps } from './types';

export const ButtonDefault = styled.button<ButtonStyleProps>`
  width: 100%;
  max-width: ${({maxWidth}) => pxToRem(Number(maxWidth)) ?? '50%'};
  height: ${({height}) => pxToRem(Number(height)) ?? 'auto'};
  background-color: ${({bg}) => bg ?? color.primaryColor};
  padding: ${pxToRem(18)};
  border-radius: ${pxToRem(10)};
  font-size: ${pxToRem(16)};
  font-weight: 600;
  color: ${color.white}
`;
