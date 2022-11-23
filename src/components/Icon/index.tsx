import React from 'react';
import { IconDefault } from './styles';
import { IconDefaultProps, IconProps } from './types';

import LogoPath from './../../assets/svgs/logo.svg';
import EnvelopePath from './../../assets/svgs/envelope.svg';

const Logo = ({alt, width, height}: IconDefaultProps) => {
  return (
    <IconDefault
      src={LogoPath}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

const Envelope = ({alt, width, height}: IconDefaultProps) => {
  return (
    <IconDefault
      src={EnvelopePath}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export const Icon = ({name, alt, width, height}: IconProps) => {
  const renderIcon = () => {
    switch (name) {
    case 'logo':
      return <Logo width={width} height={height} alt={alt}/>;
    case 'envelope':
      return <Envelope width={width} height={height} alt={alt}/>;
    default:
      return null;
    }
  };
  return renderIcon();
};
