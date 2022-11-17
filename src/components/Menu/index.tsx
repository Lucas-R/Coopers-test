import React from 'react';
import { Icon } from '../Icon';
import {
  ContainerMenu,
  SignInButton
} from './styles';

export const Menu = () => {
  return(
    <ContainerMenu>
      <Icon
        name="logo"
        alt="Logo"
        width={140}
        height={40}
      />

      <SignInButton>
          Entrar
      </SignInButton>
    </ContainerMenu>
  );
};
