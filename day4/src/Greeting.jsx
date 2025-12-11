// import React,{useState} from 'react'
// import Home from './Home'

// const Greeting = ({ name, dept, year }) => {
//   const yearNumber = Number(year)
//     const [state,setState] = useState();
    
//   return (
//     <>
//           <p className='text-blue-500'> Kongu Engineering College</p>
//           <p>Name: {name}</p>
//           <p>Department: {dept}</p>
//           <p>{yearNumber >= 1 ? 'Not eligible' : 'Eligible'}</p>
//           <Home />
//     </>
//   )
// }

// export default Greeting


import React,{useState} from 'react'

const Greeting = () => {
    const [count, setCount] = useState(1);

    const addClick = () =>{
        setCount(count+1);
    }
    const subClick = () => {
        // setCount(count-1);
        if((count-1)<0){
            setCount(0);
            alert("Count cannot be negative")
            return;
        }
        setCount(count-1);
    }
    const resetClick = () => {
        setCount(0);
    }
  return (
    <>
    <div className='h-screen flex justify-center items-center'>
             <div className='flex flex-col justify-center items-center gap-4'>
                <h2 className='font-bold text-3xl'>Counter: {count}</h2>

    <div className='flex gap-6'>
            <button onClick={addClick} className=' ml-1.5 bg-amber-400 rounded-3xl text-2xl px-8 border-b-black'>+</button>
            <button onClick={subClick} className='ml-1.5 bg-amber-400 rounded-3xl text-2xl px-8 border-b-black'>-</button>
            <button onClick={resetClick} className='ml-1.5 bg-amber-400 rounded-3xl text-2xl px-8 border-b-black'>↻</button>
            </div>
            </div>
            </div>
    </>
  )
}

export default Greeting
