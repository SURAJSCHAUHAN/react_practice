'use client'
import React,{useRef, useState} from 'react'

export const StopWatch = () => {

    const [time,setTime]=useState(0);
    const timeRef= useRef(null);

    const startTimer=()=>{
        timeRef.current= setInterval(()=>{
            setTime(time=>time+1);
        },1000)
    }
    const stopTimer=()=>{
        clearInterval(timeRef.current);
        timeRef.current=null;
    }
    const resetTimer=()=>{
        stopTimer();
        setTime(0);
    }

  return (
    <div className='flex flex-col gap-10 items-center w-100vw h-100vh'>
        <h1 className='text-3xl'>StopWatch: {time} seconds</h1>
        <div className='flex flex-col gap-5'>
            <button onClick={startTimer} className='bg-slate-900 py-3 px-5 rounded-sm text-white'>Start</button>
            <button onClick={stopTimer} className='bg-slate-900 py-3 px-5 rounded-sm text-white'>Stop</button>
            <button onClick={resetTimer} className='bg-slate-900 py-3 px-5 rounded-sm text-white'>Reset</button>
        </div>
    </div>
  )
}
