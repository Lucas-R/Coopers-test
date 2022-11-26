import styled from 'styled-components';
import { breackPoints, color, ContainerDefault, WrapperDefault } from '../../theme';
import { pxToRem } from '../../utils/pxToRem';
import { FormStyleProps } from './types';
import ImageFormPath from './../../assets/images/ImageForm.svg';

export const WrapperForm = styled(WrapperDefault)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${pxToRem(150)};
`;

export const ContainerForm = styled(ContainerDefault)`
  width: 100%;
  max-width: ${pxToRem(700)};
  box-shadow: 0px 8px 16px rgba(6, 21, 43, 0.08);
  border-radius: 4px;
  position: relative;
  padding-top: ${pxToRem(130)};
  background-color: #FFF;

  form{
    display: flex;
    flex-wrap: wrap;
  }

&::before{
  content: '';
  display: block;
  position: absolute;
  top: ${pxToRem(-12)};
  left: 50%;
  width: ${pxToRem(166)};
  height: ${pxToRem(24)};
  background-color: ${color.primaryColor};
  transform: translateX(-90%);
}

  @media (min-width: ${breackPoints.sm}) {
    padding-left: ${pxToRem(60)};
    padding-right: ${pxToRem(60)};
  }
`;

export const HeaderForm = styled.div`
  display: flex;
  gap: ${pxToRem(24)};
  margin-bottom: ${pxToRem(42)};
`;

export const ImageForm = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background: url(${ImageFormPath});
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
`;

export const WrapperIcon = styled.div`
  width: ${pxToRem(60)};
  height: ${pxToRem(60)};
  background: ${color.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${pxToRem(4)};
`;

export const TitleForm = styled.h2`
  font-size: ${pxToRem(24)};
  font-weight: 700;

  span{
    font-weight: 500;
  }
`;

export const InputGroup = styled.div<FormStyleProps>`
  width: 100%;
  margin-bottom: ${pxToRem(24)};

  @media (min-width: ${breackPoints.sm}) {
    width: ${({width}) => width+'%'};

    &:nth-child(2){
      padding-right: 10px;
    }
    &:nth-child(3){
      padding-left: 10px;
    }
  }

  span{
    color: ${color.warning};
    font-size: ${pxToRem(12)};
  }
`;
