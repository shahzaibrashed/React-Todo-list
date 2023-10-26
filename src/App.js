import './App.css';
import {useState} from 'react';

const  App = ()=> {
  const [inpVlaue , setInpValue] = useState('')
  const [todoData ,setTodoData] = useState([]);

const addTodoHandler = ()=>{
  if(inpVlaue === ''){
    alert("Enter Data")
    return false;
  }
  setTodoData(prev=>[...prev,inpVlaue])
  setInpValue('')
  console.log(inpVlaue)
}
const editBtn = (index)=>{
  const a = prompt("EDIT TODO" );
  todoData[index] = a;
  setTodoData(prev=>[...prev])
}
const delBtn = (index)=>{
  const a = todoData.filter((e,i)=>i !== index)
    setTodoData(a)
}

  return (
    <div className='body'>

<div className='mainhead'> <h1>Todo Data List</h1></div>
<div className='main'>
<input  onChange={(e)=>setInpValue(e.target.value)} type='text' placeholder='Enter Todo Data' value={inpVlaue} />
<button className='addtodo' onClick={addTodoHandler}><img src='https://www.iconpacks.net/icons/1/free-plus-icon-321-thumb.png' alt='Add Todo' height="100%" width="100%"/></button>

</div>
<div className='todolist'>
<ol>
  {
    todoData.length ? todoData.map((e,i)=><li key={i}><b>{e}</b>
    <button className='btn' onClick={()=>editBtn(i)}>Edit</button>
    <button className='btn' onClick={()=>delBtn(i)}>Delete</button> <hr/>
    </li>) : <div noImage ><img src='https://img.freepik.com/premium-vector/no-data-concept-illustration_86047-488.jpg' alt='Empty' height="100%" width="100%" /></div>
  }
</ol>
</div>
    </div>
  );
}
export default App;


