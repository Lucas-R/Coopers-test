import styled from 'styled-components';
import { pxToRem } from '../utils/pxToRem';
import { SpaceProps } from './types';

export const breackPoints = {
  sm: pxToRem(640),
  md: pxToRem(768),
};

export const font = {
  primaryFont: '\'Montserrat\', sans-serif',
  secondaryFont: '\'Poppins\', sans-serif;'
};


export const color = {
  dark: '#000000',
  white: '#FFFFFF',
  primaryColor: '#4AC959',
  warning: '#E88D39',
  gray: '#999999'
};

export const ContainerDefault = styled.div`
  width: 100%;
  height: auto;
  padding: ${pxToRem(8)} ${pxToRem(16)};

  @media (min-width: ${breackPoints.sm}) {
    padding: ${pxToRem(16)} ${pxToRem(40)};
  }

  @media (min-width: ${breackPoints.md}) {
    padding: ${pxToRem(30)} ${pxToRem(80)};
  }
`;

export const Space = styled.div<SpaceProps>`
  width: ${({horizontal}) => horizontal+'px' ?? '0px'};
  height: ${({vertical}) => vertical+'px' ?? '0px'};
`;
