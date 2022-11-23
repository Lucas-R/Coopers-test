import React from 'react';

export type InputProps = {
  id?: string,
  name?: string,
  width?: number,
  height?: number,
  placeholder: string,
  type: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
}
