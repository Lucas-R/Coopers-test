import React from 'react';
import { Header } from '../sections/Header';
import { ToDo } from '../sections/ToDo';
import { GlobalStyle } from './globalStyles';
import { Template } from './styles';

const TemplateDefault = () => {
  return (
    <Template>
      <GlobalStyle />
      <Header />
      <ToDo />
    </Template>
  );
};

export default TemplateDefault;
