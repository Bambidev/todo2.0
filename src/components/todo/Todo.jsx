import React, { useState } from "react";
import { Container, TodoContent, TopNav } from "./TodoStyles";
import ButtonsMac from "../buttonsmac/ButtonsMac";
import Input from "../input/Input";

const Todo = () => {
  return (
    <>
      <Container>
        <TodoContent>
          <TopNav>
            <ButtonsMac />
            <h1>Todo!</h1>
          </TopNav>
          <Input />
        </TodoContent>
      </Container>
    </>
  );
};

export default Todo;
