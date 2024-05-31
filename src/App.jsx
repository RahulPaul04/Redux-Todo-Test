import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import './App.css'
import { todoAdded,todoDeleted,todoToggled } from './redux/slices/todoslice'

import { statusFilterChanged } from './redux/slices/filterslice'

function App() {
  const [count, setCount] = useState(0)
  const [todotext,settodotext] = useState('')

  const todolist = useSelector((State)=> State.todoreducer.entities)
  const todos = Object.values(todolist)
  const dispatch = useDispatch()
  const [itemid,setid] = useState(0)
  const filter = useSelector((state)=>state.filterreducer)
  let completed = 0
  for(let todo of todos){
    
    if(todo.completed){
      completed += 1
    }
  }

  const addtodo = ()=>{
    if(todotext.trim() != ''){
      const newtodo = {id:itemid,text:todotext,completed:false}
      dispatch(todoAdded(newtodo))
      settodotext('')
      setid(itemid+1)
    }
  }

  return (
    <div>
      <h1>Todolist</h1>
      <div className='add'>
          <input className='form-control mb-2' type="text" value={todotext} onChange={(e) => settodotext(e.target.value)}  />
          <button onClick={addtodo} className='btn btn-primary'>Add Item</button>
          <button onClick={()=>dispatch(statusFilterChanged('completed'))} className='btn btn-warning ms-5'>Show completed</button>
          <button onClick={()=>{dispatch(statusFilterChanged('all'))}} className='btn btn-success ms-5'>Show all Tasks</button>
          <p className='mt-2 mb-2'>Completed : {completed}</p>
      </div>
      <div className='todos'>
          {
            
           todos.map((todo,index)=>{
            if (filter.status === 'all' || (filter.status === 'completed' && todo.completed)) {
              return (
                <div key={todo.id} className='d-flex justify-content-between mb-2 mt-1 ps-3 pe-3' style={{backgroundColor:`${todo.completed?'#ADD8E6':'white'}`}}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(todoToggled(todo.id))}
                  />
                  <p className='ms-2 me-2 fs-3'>{todo.text}</p>
                  <button onClick={() => dispatch(todoDeleted(todo.id))} className='btn btn-danger p-0'>Delete</button>
                </div>
              );
            }
           })
          }
      </div>
    
    </div>
      
  )
}

export default App
