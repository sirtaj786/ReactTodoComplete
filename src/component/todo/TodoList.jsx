import React from 'react'
import TodoComplete from './TodoComplete ';

const TodoList = ({todolist,setTodolist}) => {
    const [comTodo, setComTodo] = React.useState([]);

    let del = (el) => {
      let newTodo = todolist.filter((x) => {
        return x.id !== el.id;
      });
      setTodolist([...newTodo]);
    };

    let completeTodo = (el) => {
        setComTodo([...comTodo,{
          id:el.id,
          item:el.item,
          done:true
        }]);
      console.log(comTodo)
    };

  return (
    <>
      <p>Todo Task</p>
      <ul>
        {todolist.map((el) => {
          return (
            <>
              <li
                style={{
                  backgroundColor: "white",
                  height:"40px",
                  marginTop:"10px",
                  color: "black",
                  border: "1px solid yellow",
                  width: "300px",
                  alignItems: "center",
                  justifyContent: "space-between",
                  display: "flex",
                  textAlign: "center",
                  gap: "90px",
                  marginLeft: "500px",
                }}
              >
                <div 
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    
                  />
                  <p>{el.item}</p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      del(el); completeTodo(el);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            </>
          );
        })}
        <TodoComplete comTodo={comTodo} setComTodo={setComTodo} todolist={todolist} />
      </ul>
    </>
  );
}

export default TodoList