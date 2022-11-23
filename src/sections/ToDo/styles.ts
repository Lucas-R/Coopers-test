import styled from 'styled-components';
import { breackPoints, color, ContainerDefault, font } from '../../theme';
import { pxToRem } from '../../utils/pxToRem';

export const WrapperToDo = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: ${pxToRem(150)};
`;

export const WrapperToDoHeader = styled(ContainerDefault)`
  width: 100%;
  height: ${pxToRem(320)};
  position: relative;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${color.dark};
  transform: skewY(-5deg);
  margin-bottom: ${pxToRem(50)};
`;

export const TextsToDoHeader = styled.div`
  width: 100%;
  transform: skewY(5deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleToDoHeader = styled.h2`
  font-size: ${pxToRem(32)};
  color: ${color.white};
  text-align: center;
  border-bottom: ${pxToRem(4)} solid ${color.primaryColor};
  margin-bottom: ${pxToRem(20)};
  font-family: ${font.secondaryFont};

  @media (min-width: ${breackPoints.sm}) {
    margin-bottom: ${pxToRem(30)};
  }

  @media (min-width: ${breackPoints.md}) {
    margin-bottom: ${pxToRem(40)};
  }
`;

export const DescriptionToDoHeader = styled.h2`
  font-size: ${pxToRem(16)};
  color: ${color.white};
  text-align: center;
  width: 100%;
  max-width: ${pxToRem(600)};

  @media (min-width: ${breackPoints.sm}) {
    margin-bottom: ${pxToRem(20)};
  }

  @media (min-width: ${breackPoints.md}) {
    margin-bottom: ${pxToRem(24)};
  }
`;

export const ContainerToDo = styled(ContainerDefault)`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(40)};
  margin-bottom: ${pxToRem(68)};
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: ${breackPoints.sm}) {
    flex-direction: row;
  }

  @media (min-width: ${breackPoints.md}) {
  }
`;

export const TitleToDoList = styled.h3`
  text-align: center;
  font-size: 24px;
  margin-bottom: 8px;
`;

export const SubTitleToDoList = styled.p`
  text-align: center;
  font-size: ${pxToRem(24)};
  line-height: ${pxToRem(30)};

  span{
    font-weight: 700;
  }
`;
