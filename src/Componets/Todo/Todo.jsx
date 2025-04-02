import React from 'react';
import './Todo.css'

const Todo = ({todo,handleId}) => {
     const handleDelete =(id)=>{
        handleId(id)
     }
    return (
       <>
      <div className='todo'>
      <h1>{todo.name}</h1>
       <p>{todo.age}</p>

       <button onClick={()=>{handleDelete(todo.id)}}>X</button>
      </div>
       </>
    );
};

export default Todo;