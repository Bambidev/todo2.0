import React from "react";
import { Container, ContainerTasks } from "./InputStyles";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import Item from "../item/Item";

const Input = () => {
  const initialState = [];
  const [tasks, setTasks] = useState(initialState);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const deleteTask = () => {
    setTasks(initialState);
  };

  return (
    <Container>
      <form onSubmit={addTask}>
        <TextField
          id="outlined-basic"
          label="Ingrese tarea"
          variant="outlined"
          size="small"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
          fullWidth
        />
        <Button type="submit" variant="text">
          Enviar
        </Button>
      </form>

      <ContainerTasks>
        {tasks.map((task, index) => (
          <Item key={index} task={task}/>
        ))}
      </ContainerTasks>

      <Button onClick={deleteTask} variant="outlined" color="error">
        Borrar
      </Button>
    </Container>
  );
};

export default Input;
