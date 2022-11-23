import React from 'react';
import {
  WrapperFooter,
  ContainerFooter,
  TextFooter,
  CopyRight
} from './styles';

export const Footer = () => {
  return(
    <WrapperFooter>
      <ContainerFooter>
        <TextFooter>
          Need help?
        </TextFooter>

        <TextFooter>
          coopers@coopers.pro
        </TextFooter>

        <CopyRight>
          © 2021 Coopers. All rights reserved.
        </CopyRight>
      </ContainerFooter>
    </WrapperFooter>
  );
};
