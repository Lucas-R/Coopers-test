import React from 'react';
import { Form } from '../sections/Form';
import { Footer } from '../components/Footer';
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
      <Footer />
      <Form />
    </Template>
  );
};

export default TemplateDefault;
