import styled from 'styled-components';
import { breackPoints, color, ContainerDefault } from '../../theme';
import { pxToRem } from '../../utils/pxToRem';

export const WrapperForm = styled(ContainerDefault)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerForm = styled(ContainerDefault)`
  width: 100%;
  max-width: ${pxToRem(700)};
  box-shadow: 0px 8px 16px rgba(6, 21, 43, 0.08);
  border-radius: 4px;
  position: relative;
  padding-top: ${pxToRem(100)};

&::before{
  content: '';
  display: block;
  position: absolute;
  top: ${pxToRem(-12)};
  left: 50%;
  width: ${pxToRem(166)};
  height: ${pxToRem(24)};
  background-color: ${color.primaryColor};
  transform: translateX(-85%);
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

export const InputGroup = styled.div`
  width: 100%;
  margin-bottom: ${pxToRem(24)};

  input{
    width: 100%;
    height: ${pxToRem(50)};
    border: 1px solid #06152B;
    border-radius: ${pxToRem(4)};
    padding: 0 ${pxToRem(15)};
  }

  span{
    color: ${color.warning};
    font-size: ${pxToRem(12)};
  }
`;
