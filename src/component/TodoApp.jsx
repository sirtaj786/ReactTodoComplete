import React from 'react'
import TodoInput from './todo/TodoInput'
import TodoList from './todo/TodoList'
import { v4 as uuidv4 } from "uuid";
const TodoApp= () => {
    const [todolist,setTodolist]=React.useState([])
    
    let addTodo=(todo)=>{
        setTodolist([
          ...todolist,
          {
            id: uuidv4(),
            item: todo,
            done: false,
          },
        ]);
    }
  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todolist={todolist} setTodolist={setTodolist} />
      
    </div>
  );
}

export default TodoApp