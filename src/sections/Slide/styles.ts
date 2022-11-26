import styled from 'styled-components';
import { WrapperDefault, ContainerDefault, color, breackPoints } from '../../theme';
import { pxToRem } from '../../utils/pxToRem';

import { CardStyleProps } from './types';

export const WrapperSlide = styled(WrapperDefault)`
  min-height: ${pxToRem(520)};
  margin-bottom: ${pxToRem(300)};

  @media (min-width: ${breackPoints.sm}) {
    margin-bottom: ${pxToRem(350)};
  }
`;

export const ContainerSlide = styled(ContainerDefault)`
    width: 100%;
    max-width: ${pxToRem(1200)};
    height: ${pxToRem(500)};
    position: relative;
    background-color: ${color.primaryColor};

    @media (min-width: ${breackPoints.sm}) {
      background-color: transparent;
      height: ${pxToRem(520)};

      &::before{
        content: '';
        display: block;
        width: 90%;
        height: ${pxToRem(520)};
        border-radius: ${pxToRem(10)};
        background-color: ${color.primaryColor};
        position: absolute;
        top: 0;
        z-index: -1;
      }
    }
`;

export const TitleSlide = styled.h2`
  color: ${color.white};
  font-size: ${pxToRem(32)};
  font-weight: 700;
  margin-bottom: ${pxToRem(40)};

  @media (min-width: ${breackPoints.sm}) {
    padding-top: ${pxToRem(80)};
    padding-left: ${pxToRem(80)};
  }
`;

export const Carousel = styled.div`
  @media (min-width: ${breackPoints.sm}) {
    padding-left: ${pxToRem(80)};
  }
`;

export const Inner = styled.div`
  display: flex;
  gap: ${pxToRem(20)};
  margin-bottom: ${pxToRem(33)};
`;

export const WrapperDots = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(20)};
`;

export const Dot = styled.div<{active: boolean}>`
  width: ${pxToRem(29)};
  height: ${pxToRem(29)};
  border-radius: 50%;
  background-color: ${({active}) => active ? color.primaryColor : color.cloudy};
`;

export const WrapperCard = styled.div`
  min-width: ${pxToRem(360)};
  height: ${pxToRem(430)};
  border-radius: ${pxToRem(16)};
  overflow: hidden;
  background-color: #FFF;
  box-shadow: 0px 4px 12px rgba(66, 66, 66, 0.198454);
  pointer-events: none;
  display: flex;
  flex-direction: column;
`;

export const ImageCard = styled.div<CardStyleProps>`
  flex: 1;
  background: url(${({img}) => img}) no-repeat;
  background-size: cover;
`;

export const BodyCard = styled.div`
  flex: 1;
  padding: ${pxToRem(23)} ${pxToRem(32)};
  position: relative;
`;

export const WrapperBadgesCard = styled.div`
  display: flex;
`;

export const BadgeCard = styled.div`
  margin-bottom: ${pxToRem(16)};
  padding: ${pxToRem(6)} ${pxToRem(12)};
  border: ${pxToRem(1)} solid ${color.gray};
  border-radius: ${pxToRem(25)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DescriptionCard = styled.p`
  font-size: ${pxToRem(18)};
  font-weight: 500;
`;

export const LinkCard = styled.a`
  position: absolute;
  bottom: ${pxToRem(23)};
  color: ${color.primaryColor};
  font-weight: 700;
`;
