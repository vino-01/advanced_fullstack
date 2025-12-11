// import React from 'react'

// const Home = () => {
//   return (
//     <>
//       <h1 className='m-20 mt-2.0 text-2xl'>End</h1>
//     </>
//   )
// }

// export default Home



import React from 'react'

const Home = ({users = []}) => {

  return (
    // <ul>
    //   <li>{users[0].name}</li>
    //   <li>{users[1].name}</li>
    //   <li>{users[2].name}</li>
    //   <li>{users[3].name}</li>
    // </ul>

    <ul>

      {users.map((user) => (

      <li className='text-cyan-800 font-bold' key={user.id}>{user.name}</li>

      ))
  }
  </ul>
  )
}

export default Home
