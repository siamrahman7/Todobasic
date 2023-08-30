import React from 'react'

import 'font-awesome/css/font-awesome.min.css'; 
import style from "./Todo.module.css"

function Todo(props) {
  const {title,desc} = props.todo;
  const {id} = props

const handleClick = (id) =>{
  props.onRemoveItem(id);
}


  return (
    <article className={style.todo}>
    <div>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
    <div>
      <button className={style.btn}>
      <i className='fa fa-trash fa-2x' onClick={()=>{handleClick(id)}}></i>
      </button>
    </div>
    </article>
  )
}

export default Todo