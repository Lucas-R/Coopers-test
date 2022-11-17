import React from 'react';
import { ButtonProps } from './types';
import { ButtonDefault } from './styles';

export const Button = ({ label, maxWidth, bgColor, onClick }: ButtonProps) => {
  return(
    <ButtonDefault
      maxWidth={maxWidth}
      onClick={onClick}
      bg={bgColor}
    >
      {label}
    </ButtonDefault>
  );
};
