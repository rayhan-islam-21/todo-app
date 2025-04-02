import React, { useState } from 'react';
import Todos from '../Todos/Todos';
import { v4 as uuidv4 } from 'uuid';
import NewTodo from '../Newtodo/NewTodo';
import "./Home.css"


const dummyTodos = [
    {
        name :"Rayhan",
        age:20,
        id : uuidv4()
    },
    {
        name :"Morshed",
        age:30,
        id:uuidv4()
    },
    {
        name :"Rakib",
        age:10,
        id:uuidv4()
    },

]


    

const Home = () => {
    const [todos,setTodos] = useState(dummyTodos)
    const getData = (data)=>{
        console.log(data)
        const newArray = [...todos,{...data,id:uuidv4()}]
        setTodos(newArray)
        console.log(newArray)
        

    }
    const handleId = (id)=>{
        console.log(id)
        const newData = todos.filter(todo => todo.id != id)
        setTodos(newData)
        console.log(newData)
    }

    return (
        <>
       <div>
       <div className='home'>
        <NewTodo getData ={getData}></NewTodo>
        <div className='todos'>
        <Todos handleId={handleId} todos={todos} ></Todos>
        </div>
        </div>
       </div>
        </>
    );
};

export default Home;