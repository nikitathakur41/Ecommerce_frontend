import React, { useEffect, useState } from 'react';
import "./UserDetails.css";
import { Link } from 'react-router-dom';
const UserDetails=()=>{
    const[users,setUsers]=useState([]);
    
    useEffect(()=>{
        getUsers();

    },[])
    const getUsers= async()=>{
        let result= await fetch("http://localhost:5000/users");
        result = await result.json();
        setUsers(result)
     }
   


    return(
        <div className="user-list">
            <h1>USER DETAILS</h1>

            <ul>
                <li>UserId</li>
                <li>Name</li>
                <li>Email</li>
            </ul>
            {
              
          users.length>0 ?  users.map((item)=>
            <ul key={item._id}>
            <li>{item._id}</li>
            <li>{item.name}</li>
            <li>{item.email}</li>   
        </ul>
            ):<h1>No Result Found</h1>
       

            }
        </div>

)

}
export default UserDetails;