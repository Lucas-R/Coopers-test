import React, { useState } from 'react';
import { ToDoList } from '../../components/ToDoList';
import { color } from '../../theme';
import {
  WrapperToDo,
  DescriptionToDoHeader,
  TitleToDoHeader,
  WrapperToDoHeader,
  TextsToDoHeader,
  ContainerToDo,
  TitleToDoList,
  SubTitleToDoList
} from './styles';

export const ToDo = () => {
  const [listToDo, setListToDo] = useState([
    'this is a new task',
    'Develop the To-do list page',
    'Create the drag-and-drop function',
    'Add new tasks',
    'Delete itens',
    'Erase all',
    'Checked item goes to Done list',
    'This item label may be edited',
    'Editing an item...'
  ]);
  const [listDone, setListDone] = useState([
    'Get FTP credentials',
    'Home Page Design ',
    'E-mail John about the deadline',
    'Create a Google Drive folder',
    'Send a gift to the client',
  ]);

  return(
    <WrapperToDo>
      <WrapperToDoHeader>
        <TextsToDoHeader>
          <TitleToDoHeader> To-do List </TitleToDoHeader>
          <DescriptionToDoHeader>
          Drag and drop to set your main priorities, check when done and create what´s new.
          </DescriptionToDoHeader>
        </TextsToDoHeader>
      </WrapperToDoHeader>

      <ContainerToDo>
        <ToDoList
          borderColor={color.warning}
          data={listToDo}
        >
          <>
            <TitleToDoList> To-do </TitleToDoList>
            <SubTitleToDoList>
              Take a breath. <br />
              Start doing.
            </SubTitleToDoList>
          </>
        </ToDoList>
        <ToDoList
          borderColor={color.primaryColor}
          data={listDone}
        >
          <>
            <TitleToDoList> Done </TitleToDoList>
            <SubTitleToDoList>
              Congratulions! <br />
              <span>You have done 5 tasks</span>
            </SubTitleToDoList>
          </>
        </ToDoList>
      </ContainerToDo>
    </WrapperToDo>
  );
};
