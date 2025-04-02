import React from 'react';
import Todo from '../Todo/Todo';

const Todos = ({todos,handleId}) => {
    return (
        <>
            {
                todos.map((todo) => <Todo key={todo.id} handleId={handleId} id={todo.id} todo={todo} ></Todo>)
            }
        
        </>
    );
};

export default Todos;