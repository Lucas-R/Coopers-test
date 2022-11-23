import React from 'react';
import { ButtonProps } from './types';
import { ButtonDefault } from './styles';

export const Button = ({ label, maxWidth, bgColor, onClick, radius = 10 }: ButtonProps) => {
  return(
    <ButtonDefault
      maxWidth={maxWidth}
      onClick={onClick}
      bg={bgColor}
      bRadius={radius}
    >
      {label}
    </ButtonDefault>
  );
};
