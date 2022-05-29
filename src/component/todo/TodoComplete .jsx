import React from 'react'

const TodoComplete = ({comTodo,setComTodo,todolist}) => {
console.log(comTodo);
  let del = (el) => {
    let comnewTodo = comTodo.filter((x) => {
      return x.id !== el.id;
    });
    setComTodo([...comnewTodo]);
  };

  return (
    <div>
      <p>Completed Todo Task</p>
      <ul>
        {comTodo.map((el) => {
          return (
            <>
              <li
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid yellow",
                  height: "40px",
                  marginTop: "10px",
                  width: "300px",
                  alignItems: "center",
                  justifyContent: "space-between",
                  display: "flex",
                  textAlign:"center",
                  gap: "90px",
                  marginLeft: "470px",
                }}
              >
                <div
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <input type="checkbox" />
                  <p>{el.item}</p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      del(el);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoComplete