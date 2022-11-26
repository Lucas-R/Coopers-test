import styled from 'styled-components';
import CoopersBg from './../../assets/bgs/bg-coopers-header.svg';
import FillBg from './../../assets/bgs/fill.png';
import {
  breackPoints,
  color,
  ContainerDefault
} from '../../theme';
import { pxToRem } from '../../utils/pxToRem';

export const WrapperHeader = styled.div`
  width: 100%;
  height: auto;
  background-color: #FFF;
  background-image: url(${FillBg});
  background-repeat: no-repeat;
  background-position: right;
  position: relative;
  z-index: -1;

  @media (min-width: ${breackPoints.md}) {
    background-image: url(${CoopersBg});
    background-repeat: no-repeat;
    background-position: right;
    background-size: auto;
    position: relative;
  }
`;

export const ContainerHeader = styled(ContainerDefault)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 700px;
`;

export const WrapperTextsHeader = styled.div`
  width: 100%;
  max-width: ${pxToRem(621)};
  margin-top: ${pxToRem(100)};
  margin-bottom: ${pxToRem(44)};
`;

export const TitleHeader = styled.h1`
  font-weight: 700;
  font-size: ${pxToRem(40)};
  line-height: ${pxToRem(48)};
  margin-bottom: ${pxToRem(40)};

  span{
    font-weight: 400;
    font-size: ${pxToRem(35)};
    color: ${color.primaryColor}
  }

  @media (min-width: ${breackPoints.sm}) {
    font-size: ${pxToRem(60)};
    line-height: ${pxToRem(68)};

    span{
      font-size: ${pxToRem(45)};
    }
  }

  @media (min-width: ${breackPoints.md}) {
    font-size: ${pxToRem(80)};
    line-height: ${pxToRem(64)};
    margin-bottom: ${pxToRem(56)};
  }
`;

export const SubTitleHeader = styled.h2`
  font-size: ${pxToRem(16)};

  @media (min-width: ${breackPoints.sm}) {
    font-size: ${pxToRem(18)};
  }

  @media (min-width: ${breackPoints.md}) {
    font-size: ${pxToRem(24)};
  }
`;
