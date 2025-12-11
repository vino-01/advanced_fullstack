// import React,{useEffect, useState} from 'react'

// const Demo = () => {

//     const [seconds, setSeconds] = useState(0)

//     // useEffect(() => {
//     //     console.log("Useeffect is running");
//     // },[])

//     useEffect(() => {
//         console.log("Timer mounted");

//         const intervalId = setInterval(() => {
//             setSeconds(seconds+1);
        
//     },1000);
//   return () =>  {

//         clearInterval(intervalId);
//         console.log("Unmounted");
//   }


// },[])

// return(
//     <>
//     <h1>Seconds:{seconds}</h1>
//     </>
// )

// }

// export default Demo



// import React, { useEffect,useState } from 'react'

// const Demo = () => {

//     useEffect(() => {
//         async function fetchPosts(params) {
//             try{
//                 const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//                 const data = await res.json();
//                 setPosts(data.slice(0,5));
//             }
//             catch(err)
//             {
//                 console.log("Error",err);
//             }
//         }
//         fetchPosts();
//     },[]);

//   return (
//     <>
//       <h2>Posts</h2>
//         {/* <p>Title</p>
//         <p>Body</p> */}

//         {
//             posts.map((post) => {
//                 <div key = {post.id} className='bg-blue-100'>
//                 <p>{post.title}</p>
//                 <p>{post.body}</p>
//                 </div>
//             })
//         }
//     </>
//   )
// }

// export default Demo


import React, { useEffect, useState } from 'react'

const Demo = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data.slice(0, 5));
      } catch (err) {
        console.log("Error", err);
      }
    }
    fetchPosts();
  }, []);

  return (
    <>
      <h2>Posts</h2>

      {
        posts.map(post => (
          <div key={post.id} className='bg-blue-100 p-2 m-2'>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))
      }
    </>
  )
}

export default Demo
