import React, { useEffect, useState } from 'react';
import { ToDoListProps } from './types';
import { Button } from '../Button';
import { color } from '../../theme';

import {
  WrapperToDoList,
  HeaderToDoList,
  ListToDo,
  DotCheck,
  ContentDotCheck,
  ListToDoItem,
  WrapperTextToDoItem,
  Checkbox,
} from './styles';

export const ToDoList = ({children, borderColor, data}: ToDoListProps) => {
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    return data && setList(data);
  }, []);

  return(
    <WrapperToDoList
      borderColor={borderColor}
    >
      <HeaderToDoList>
        {children}
      </HeaderToDoList>

      <ListToDo>
        {
          list.map(item => {
            return (
              <ListToDoItem  key={item}>
                <Checkbox type="checkbox"id="checkbox"/>

                <WrapperTextToDoItem>
                  <p>{item}</p>
                </WrapperTextToDoItem>
                <button onClick={() => alert(`delete ${item}`)}> Delete </button>
              </ListToDoItem>
            );
          })
        }
      </ListToDo>

      <Button
        label='erase all'
        bgColor={color.dark}
        onClick={() => alert('clicked to do list')}
      />
    </WrapperToDoList>
  );
};
