import React from 'react'

const TodoInput = ({addTodo}) => {
    const [todo, setTodo] = React.useState("")
    
    return (
        <div>
            <div className='inputdiv'>
                <button className='pbtn' onClick={()=>{
                    addTodo(todo)
                    setTodo("")
                }}>+</button>
                <input value={todo}type="text" placeholder="Write Something here... " 
                onChange={(e)=>{
                    setTodo(e.target.value)
                    
                    // console.log(todo)
                }}/>
            </div>
        </div>
    )
}

export default TodoInput