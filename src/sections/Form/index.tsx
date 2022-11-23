import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  WrapperForm,
  ContainerForm,
  HeaderForm,
  WrapperIcon,
  ImageForm,
  TitleForm,
  InputGroup,
} from './style';
import { Space } from '../../theme';
import { Button } from '../../components/Button';
import { Icon } from '../../components/Icon';
import { Input } from '../../components/Input/Index';

export const Form = () => {
  const phoneRegex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Must be 5 characters or less'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email required'),
      phone: Yup.string()
        .matches(phoneRegex, 'Invalid phone.')
        .required('Phone required'),
      message: Yup.string()
        .min(10, 'Must be 10 characters or less')
        .required('Message required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return(
    <WrapperForm>
      <ContainerForm>
        <HeaderForm>
          <ImageForm />
          <WrapperIcon>
            <Icon
              name="envelope"
              alt="Icone de envelope"
              width={30}
              height={30}
            />
          </WrapperIcon>
          <TitleForm>
            <span>GET IN</span>
            <br />
            TOUCH
          </TitleForm>
        </HeaderForm>

        <form onSubmit={formik.handleSubmit}>
          <InputGroup
            width={100}
          >
            <label htmlFor="name"> Your name </label>
            <Space vertical={8}/>
            <Input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder="type your name here..."
            />
            {formik.touched.name && formik.errors.name ? (
              <span>{formik.errors.name}</span>
            ) : null}
          </InputGroup>

          <InputGroup
            width={50}
          >
            <label htmlFor="email">Email*</label>
            <Space vertical={8}/>
            <Input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="example@example.com"
            />
            {formik.touched.email && formik.errors.email ? (
              <span>{formik.errors.email}</span>
            ) : null}
          </InputGroup>

          <InputGroup
            width={50}
          >
            <label htmlFor="phone">Telephone*</label>
            <Space vertical={8}/>
            <Input
              id="phone"
              name="phone"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phone}
              placeholder="(  ) ____-____"
            />
            {formik.touched.phone && formik.errors.phone ? (
              <span>{formik.errors.phone}</span>
            ) : null}
          </InputGroup>

          <InputGroup
            width={100}
          >
            <label htmlFor="message">Message*</label>
            <Space vertical={8}/>
            <Input
              id="message"
              name="message"
              type="textarea"
              onChange={formik.handleChange}
              value={formik.values.message}
              placeholder="Type what you want to say to us"
              height={150}
            />
            {formik.touched.message && formik.errors.message ? (
              <span>{formik.errors.message}</span>
            ) : null}
          </InputGroup>

          <Button
            label="SEND NOW"
            type="submit"
            radius={4}
          />
        </form>
      </ContainerForm>
    </WrapperForm>
  );
};
