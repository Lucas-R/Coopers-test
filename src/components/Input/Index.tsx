import React from 'react';
import { InputProps } from './types';
import { InputDefault } from './styles';

export const Input = ({
  width = 100,
  height = 50,
  placeholder,
  type,
  ...props
}: InputProps) => {
  return(
    <InputDefault
      width={width}
      height={height}
      placeholder={placeholder}
      type={type}
      {...props}
    />
  );
};
