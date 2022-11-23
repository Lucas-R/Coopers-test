import React from 'react';
import { Button } from '../../components/Button';
import { Icon } from '../../components/Icon';
import { Menu } from '../../components/Menu';
import {
  WrapperHeader,
  ContainerHeader,
  WrapperTextsHeader,
  TitleHeader,
  SubTitleHeader,
  WrapperIcon
} from './styles';


export const Header = () => {
  return(
    <WrapperHeader>
      <Menu />
      <ContainerHeader>
        <WrapperTextsHeader>
          <TitleHeader>
            Organize <br />
            <span> your daily jobs </span>
          </TitleHeader>

          <SubTitleHeader>
            The only way to get things done
          </SubTitleHeader>
        </WrapperTextsHeader>

        <Button
          label="Go to To-do list"
          maxWidth={300}
          onClick={() => alert('clicked')}
        />
      </ContainerHeader>

      <WrapperIcon
        onClick={() => alert('clicked')}
      >
        <Icon
          name ="arrow-down"
          width={30}
          height={30}
          alt="ir para to do list"
        />
      </WrapperIcon>
    </WrapperHeader>
  );
};
