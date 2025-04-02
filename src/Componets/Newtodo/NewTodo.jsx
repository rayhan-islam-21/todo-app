import React from 'react';
import { useFormik } from 'formik'

const NewTodo = ({getData}) => {
    const formik = useFormik({
        initialValues : {
            name : "",
            age : ""
        },
        onSubmit : (value,{resetForm})=>{
            console.log(value);
            getData(value)
            resetForm();
        }
    })

    return (

        

        <>
        
        <form onSubmit={formik.handleSubmit} >
            <div>
                <label htmlFor="name">Name :</label>
                <input type="text" value={formik.values.name}  onChange={formik.handleChange} name="name" id="name" />
            </div>
            <div>
                <label htmlFor="age">age :</label>
                <input type="number" value={formik.values.age} onChange={formik.handleChange} name="age" id="age" />
            </div>
            <button type="submit">Add Todo</button>
        </form>
        </>
    );
};

export default NewTodo;