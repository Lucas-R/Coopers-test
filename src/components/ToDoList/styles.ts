import styled from 'styled-components';
import { breackPoints, color } from '../../theme';
import { pxToRem } from '../../utils/pxToRem';
import { ToDoListStyleProps } from './types';

export const WrapperToDoList = styled.div<ToDoListStyleProps>`
  width: 100%;
  max-width: ${pxToRem(380)};
  height: fit-content;
  border-top: ${pxToRem(20)} solid ${({borderColor}) => borderColor ?? color.dark};
  padding: ${pxToRem(40)} ${pxToRem(30)};
  box-shadow: 0px 4px 12px rgba(66, 66, 66, 0.198454);
  background-color: #FFF;
`;

export const HeaderToDoList = styled.div`
  margin-bottom: ${pxToRem(34)};
`;

export const ListToDo = styled.ul`
  margin-bottom: ${pxToRem(40)};
`;

export const DotCheck = styled.div`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
  border: ${pxToRem(2)} solid ${color.warning};
  border-radius: 50%;
  margin-right: ${pxToRem(16)};;
`;

export const ContentDotCheck = styled.div``;

export const WrapperTextToDoItem = styled.div`
  display: flex;
  flex: 1;
`;

export const ListToDoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${pxToRem(12)} 0;
  cursor: pointer;

  &:hover button{
      display: block;
    }

  p{
    font-size: ${pxToRem(16)};
    width: 100%;
    max-width: ${pxToRem(220)};
  }

  button{
    font-size: ${pxToRem(12)};
    color: ${color.gray};
    font-weight: 700;

    &:hover{
      transform: scale(1);
      color: ${color.dark}
    }
  }

  @media (min-width: ${breackPoints.sm}) {
    button{
      display: none;
    }
  }
`;

export const Checkbox = styled.input.attrs({type: 'checkbox'})`
  margin-right: ${pxToRem(8)};
`;

