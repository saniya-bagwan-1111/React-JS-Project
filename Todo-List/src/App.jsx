import { useEffect, useState } from 'react'
import classes from './components/styles.module.css';
import TodoItem from './TodoList Components/Todo_Item';
import TodoDetails from './TodoList Components/Todo_Details';
import { Skeleton } from '@mui/material';

function App() {
 
  const [todoList,setTodoList]=useState([]);
  const [errMsg,setErrMsg]=useState(null);
  const [loading,setLoading]=useState(null);
  const [todoDetails,setTodoDetails]=useState(null);
  const [openDialog, setOpenDialog]=useState(false);

  async function fetchTodoListItems(){
    try{
      setLoading(true);
      const apiResponse= await fetch('https://dummyjson.com/todos');
      const result=await apiResponse.json();
      // console.log(result);
      
      if(result?.todos && result?.todos?.length > 0)
      {
        // console.log(result?.todos);
        setTodoList(result?.todos);
        setLoading(false);
        setErrMsg('')
      }
      else{
        setLoading(false);
        setTodoList([]);
        setErrMsg('Taking to to fetch To Do List');
      }
    }
    catch(e)
    {
      setErrMsg('Someting went wrong...while fetching api data');
      console.log(e);
    }

  }

  async function fetchDetailofCurrentTodo(getCurrentTodo)
  {
    try{

      const singleTodo= await fetch(`https://dummyjson.com/todos/${getCurrentTodo}`)
      const details=await singleTodo.json();
      // console.log(details);
      if(details)
      {
        setTodoDetails(details);
        setOpenDialog(true);
      }
      else{
        setOpenDialog(false);
        setTodoDetails(null)
      }
    }catch(e)
    {
      console.log(e);
    }
  }
  useEffect(()=>{
    fetchTodoListItems();
  },[]);

  // console.log(todoList);
  if(loading) return <Skeleton variant='rectangular' width={650} height={650}></Skeleton>
  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.heading_text}> To Do List</h1>
      <div className={classes.todoListWrapper}>
        {
          todoList && todoList.length > 0 ?
          todoList.map((todoItem) =>
          <TodoItem key={todoItem.id} todoEachItem={todoItem}
          fetchDetailofCurrentTodo={fetchDetailofCurrentTodo}
          ></TodoItem>
        )
          :null
        }
      </div>
      {/* <TodoDetails openDialog={openDialog} todoDetails={todoDetails}
      setOpenDialog={setOpenDialog} setTodoDetails={setTodoDetails}
      ></TodoDetails> */}
      <TodoDetails setOpenDialog={setOpenDialog}
      openDialog={openDialog} todoDetails={todoDetails}
       setTodoDetails={setTodoDetails}></TodoDetails>
    </div>
  )
}

export default App
