import styled from 'styled-components';
import { breackPoints, color, ContainerDefault, font } from '../../theme';
import { pxToRem } from '../../utils/pxToRem';

export const WrapperSlide = styled(ContainerDefault)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: ${pxToRem(200)};

  @media (max-width: ${breackPoints.sm}) {
    padding: 0;
  }
`;

export const ContainerSlide = styled.div`
  width: 100%;
  height: ${pxToRem(480)};
  padding-top: ${pxToRem(40)};
  position: relative;
  padding: ${pxToRem(40)} ${pxToRem(32)};

  @media (min-width: ${breackPoints.md}) {
    padding: ${pxToRem(80)};
    }

  &::before{
    content: '';
    display: block;
    width: 100%;
    max-width: ${pxToRem(1080)};
    height: ${pxToRem(480)};
    background-color: ${color.primaryColor};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    @media (min-width: ${breackPoints.md}) {
      width: 90%;
      border-radius: ${pxToRem(10)};
      height: ${pxToRem(520)};
    }
  }
`;

export const TitleSlide = styled.h2`
  color: ${color.white};
  font-weight: 700;
  font-size: ${pxToRem(32)};
  margin-bottom: ${pxToRem(20)};

  @media (min-width: ${breackPoints.sm}) {
    font-size: ${pxToRem(48)};
    margin-bottom: ${pxToRem(40)};
  }
`;

export const WrapperCards = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: ${pxToRem(20)};
`;

export const Card = styled.div`
  width: ${pxToRem(430)};
  height: ${pxToRem(430)};
  border-radius: ${pxToRem(16)};
  background: ${color.white};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 4px 12px rgba(66, 66, 66, 0.198454);
`;

export const ImageCard = styled.div`
  flex: 1;
  background: #f2f2f2;
`;

export const InfoCard = styled.div`
  flex: 1;
  padding: ${pxToRem(23)} ${pxToRem(32)};
  box-sizing: border-box;
  position: relative;
`;

export const WrapperBadges = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  height: ${pxToRem(31)};
`;

export const BadgeCard = styled.div`
  height: ${pxToRem(30)};
  border: ${pxToRem(1)} solid #9499B3;
  padding: 0 ${pxToRem(12)};
  display: flex;
  align-items: center;
  border-radius: ${pxToRem(15)};

  p{
    color: #9499B3;
    font-size: ${pxToRem(16)};
  }
`;

export const DescriptionCard = styled.p`
  margin-top: ${pxToRem(46)};
  color: ${font.color.dark};
  font-weight: 500;
`;

export const LinkCard = styled.a`
  color: ${font.color.primaryColor};
  position: absolute;
  bottom: ${pxToRem(23)};
  font-weight: 700;
`;
