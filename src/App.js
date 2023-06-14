import React, { useEffect, useState } from 'react'




const App = () => {

  const [data,setData]=useState([])
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
  response.json().then(result=>{
    setData(result)
  })
})
},[])
  return (
    <div>
      <p>Fetching Data from API using Fetch ,UseEffect and UseState</p>
      <table border='1px'>
        <tbody>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile Number</td>

        </tr>
        
       {
        data.map((item)=>{
         return(
         <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>

        </tr>)

        })
       }
       </tbody>
      </table>
    </div>
  )
}

export default App