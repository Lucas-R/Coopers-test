import styled from 'styled-components';
import { color, ContainerDefault } from '../../theme';
import { pxToRem } from '../../utils/pxToRem';

export const WrapperFooter = styled.div`
  width: 100%;
  height: ${pxToRem(245)};
  position: relative;
  display: flex;


  &::after{
    content: '';
    display: block;
    width: 100%;
    max-width: ${pxToRem(511)};
    height: ${pxToRem(60)};
    background-color: ${color.primaryColor};
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%) skewY(-2deg);
  }

  &::before{
    content: '';
    display: block;
    width: 100%;
    height: ${pxToRem(400)};
    background-color: ${color.dark};
    transform: skewY(-2deg);
    position: absolute;
    bottom: -173px;
  }
`;

export const ContainerFooter = styled(ContainerDefault)`
  position: relative;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextFooter = styled.h2`
  color: ${color.white};
  margin-bottom: ${pxToRem(28)};
  font-weight: 600;

  &:nth-child(2){
    margin-bottom: ${pxToRem(18)};
  }
`;

export const CopyRight = styled.p`
  color: ${color.white};
  font-size: ${pxToRem(14)};
  margin-bottom: ${pxToRem(32)};
`;
