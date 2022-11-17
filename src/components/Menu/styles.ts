import styled from 'styled-components';
import { ContainerDefault } from '../../theme';
import { color, font } from '../../theme';
import { pxToRem } from '../../utils/pxToRem';

export const ContainerMenu = styled(ContainerDefault)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
`;

export const SignInButton = styled.button`
  width: ${pxToRem(120)};
  height: ${pxToRem(40)};
  font-family: ${font.secondaryFont};
  color: ${color.white};
  background-color: ${color.dark};
`;
