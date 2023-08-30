import React, { useState } from 'react'

import style from "./Home.module.css"
import Todos from './todo /Todos'
import NewTodo from './todo /NewTodo'
import {v4 as uuidv4} from "uuid"

function Home() {

const [todos, setTodos] = useState([]);
const handleAddTodo = (todo) => {
  setTodos((prevTodos) => {
    return[...prevTodos, {id: uuidv4(),todo}]
  })
}
const handleRemove = (id) => {
  
  setTodos((prevTodos)=>{
    const filteredTodos = prevTodos.filter((todo) => todo.id !== id)
    return filteredTodos;
  })
}
  return (
    <div className={style.container}>
      <h1 style={{color:'white'}}>Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo}/>
      <Todos todos={todos} onRemove={handleRemove}/>
    </div>
  )
}

export default Home