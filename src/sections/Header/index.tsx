import React from 'react';
import { Button } from '../../components/Button';
import { Menu } from '../../components/Menu';
import {
  WrapperHeader,
  ContainerHeader,
  WrapperTextsHeader,
  TitleHeader,
  SubTitleHeader
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
    </WrapperHeader>
  );
};
