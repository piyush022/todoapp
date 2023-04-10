import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState,useEffect } from 'react'
import Display from './Display'



export default function Home() {

  const [task, setTask] = useState();
  const [list, setList] = useState([]);
  
  

  function handleclick(e){

    e.preventDefault();
    setList([...list,task]);
    setTask('')

    
  }

  useEffect(() => {

    localStorage.setItem('Tasks',JSON.stringify(list));
    
  }, [list]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('Tasks')) || [];

    if (storedTasks) {
      setList(storedTasks);
    }
  }, []);
  return (
    <>
      <section className='wrapper'><div className="heading"><h1>TO DO LIST APP </h1></div>
      <div className="cont">
        <input type="text" placeholder='Enter Task' value={task} onChange={(e)=>setTask(e.target.value)} />
        <button className='liteblue btn1' onClick={handleclick} >Save</button>
      </div>
      <div className="dispcont">
        <Display task={task} setTask={setTask} list={list} setList={setList}  />
      </div></section>
    </>
  )
}
