import styled from 'styled-components';
import { pxToRem } from '../../utils/pxToRem';
import { IconStyleProps } from './types';

export const IconDefault = styled.img<IconStyleProps>`
  width: ${({width}) => pxToRem(Number(width))};
  height: ${({height}) => pxToRem(Number(height))};
`;
