// import React from 'react'
// import './App.css'
// function App() {
//   return (
//     <div>
//       <h1 className='text-orange-500'>Hello world</h1>
//     </div>
//   )
// }
// export default App



//App - Parent component
//Greeting - Child component



// import React from 'react'
// import Greeting from './Greeting' 

// const App = () => {

//    const name = "Vino";
//    const dept = "IT";
//    const year = "1";
//   //  const isLoggedIn = true;

//   return (
//     <>
//           <h1 className='text-orange-500 text-3xl'>Hello, Welcome to our college</h1>
//           <Greeting name={name} dept={dept} year={year} />
        
//     </>

//   )
// }

// export default App




import React from 'react'
import Greeting from './Greeting'
import Home from './Home'
import Demo from './Demo'
import { Routes, Route, NavLink } from 'react-router-dom'

const App = () => {
  const users = [
    { id: 1, name: 'Vino' },
    { id: 2, name: 'Kala' },
    { id: 3, name: 'Senniappan' },
    { id: 4, name: 'Pradeep' }
  ]

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded ${isActive ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-blue-100'}`

  return (
    <>
      <nav className='flex items-center justify-center gap-4 bg-slate-100 py-4 shadow'>
        <NavLink to='/' className={navLinkClass} end>
          Home
        </NavLink>
        <NavLink to='/greeting' className={navLinkClass}>
          Greeting
        </NavLink>
        <NavLink to='/demo' className={navLinkClass}>
          Demo
        </NavLink>
      </nav>

      <main className='p-6'>
        <Routes>
          <Route path='/' element={<Home users={users} />} />
          <Route path='/greeting' element={<Greeting />} />
          <Route path='/demo' element={<Demo />} />
        </Routes>
      </main>
    </>
  )
}
export default App



// import React from 'react'
// import Greeting from './Greeting'
// import Home from './Home'
// import Demo from './Demo'
// import { Routes, Route, NavLink } from 'react-router-dom'

// const App = () => {
//   const users = [
//     { id: 1, name: 'Vino' },
//     { id: 2, name: 'Kala' },
//     { id: 3, name: 'Senniappan' },
//     { id: 4, name: 'Pradeep' }
//   ]

//   const navLinkClass = ({ isActive }) =>
//     `px-4 py-2 rounded ${isActive ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-blue-100'}`

//   return (
//     <>
//       <nav className='flex items-center justify-center gap-4 bg-slate-100 py-4 shadow'>
//         <NavLink to='/' className={navLinkClass} end>
//           Home
//         </NavLink>
//         <NavLink to='/greeting' className={navLinkClass}>
//           Greeting
//         </NavLink>
//         <NavLink to='/demo' className={navLinkClass}>
//           Demo
//         </NavLink>
//       </nav>

//       <main className='p-6'>
//         <Routes>
//           <Route path='/' element={<Home users={users} />} />
//           <Route path='/greeting' element={<Greeting />} />
//           <Route path='/demo' element={<Demo />} />
//         </Routes>
//       </main>
//     </>
//   )
// }
// export default App
