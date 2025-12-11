// import { useState } from 'react';

// const Auth = () => {
//   const [mode, setMode] = useState('register');

//   return (
//     <div className='min-h-screen flex justify-center items-center bg-gray-100'>
//       <div className='bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md'>
//         {/* Toggle buttons switch between register and login modes */}
//         <div className='flex justify-center mb-6 space-x-4'>
//           <button
//             type='button'
//             onClick={() => setMode('register')}
//             className={`px-4 py-2 font-semibold rounded-2xl ${mode === 'register' ? 'bg-gray-300' : 'bg-gray-100'}`}>
//             Register
//           </button>
//           <button
//             type='button'
//             onClick={() => setMode('login')}
//             className={`px-4 py-2 font-semibold rounded-2xl ${mode === 'login' ? 'bg-gray-300' : 'bg-gray-100'}`}>
//             Login
//           </button>
//         </div>

//         <form className='flex flex-col space-y-4'>
//           {mode === 'register' && (
//             <input
//               name='name'
//               placeholder='Name'
//               className='border p-2 rounded'
//             />
//           )}
//           <input
//             name='email'
//             placeholder='Email'
//             type='email'
//             className='border p-2 rounded'
//           />
//           <input
//             name='password'
//             placeholder='Password'
//             type='password'
//             className='border p-2 rounded'
//           />
//           <button type='submit' className='bg-blue-600 text-white py-2 rounded'>
//             {mode === 'register' ? 'Create Account' : 'Sign In'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Auth;

import React, { useState } from 'react'
import axios from 'axios'

const Auth = () => {
  const [isRegister, setRegister] = useState(true);
  const handleRegister = async(e) => {
    e.preventDefault();
    try {
        const res
    }
    catch(err)
    {

    }
  }

  const handleLogin = async(e) => {
    e.preventDefault();
    console.log("")
  }

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100'>
      <div className='bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md'>

        {/* Toggle button */}
        <div className='flex justify-center mb-6 space-x-4'>
          <button
            onClick={() => setRegister(true)}
            className={`px-4 py-2 font-semibold rounded-2xl 
              ${isRegister ? 'bg-gray-300' : 'bg-gray-100'}`}
          >
            Register
          </button>

          <button
            onClick={() => setRegister(false)}
            className={`px-4 py-2 font-semibold rounded-2xl 
              ${!isRegister ? 'bg-gray-300' : 'bg-gray-100'}`}
          >
            Login
          </button>
        </div>

        {/* Form */}
        <form className='flex flex-col space-y-4'>
          {isRegister && (
            <input
              name="name"
              placeholder="Name"
              className='border p-2 rounded'
            />
          )}

          <input
            name="email"
            placeholder="Email"
            className='border p-2 rounded'
          />

          <input
            name="password"
            placeholder="Password"
            type="password"
            className='border p-2 rounded'
          />
        </form>

      </div>
    </div>
  );
}

export default Auth;
