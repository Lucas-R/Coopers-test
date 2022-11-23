import styled from 'styled-components';
import { pxToRem } from '../../utils/pxToRem';

export const InputDefault = styled.input`
  width: 100%;
  height: ${({ height }) => pxToRem(Number(height)) ?? pxToRem(50)};
  border: 1px solid #06152B;
  border-radius: ${pxToRem(4)};
  padding: 0 ${pxToRem(15)};
`;
