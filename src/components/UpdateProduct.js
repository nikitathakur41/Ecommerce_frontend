import React, { useEffect } from "react";
import { useParams,useNavigate } from "react-router";
const UpdateProduct=()=>{
    const[name,setName]=React.useState('');
    const[price,setPrice]=React.useState('');
    const[category,setCategort]=React.useState('');
    const[company,setCompany]=React.useState('');
    const params = useParams();
    const navigate = useNavigate();
    
    useEffect(()=>{
        console.warn(params)
        getProductDetails();
    },[])
  
    const getProductDetails=async()=>{
        console.warn(params)
        let result = await fetch(`http://localhost:5000/product/${params.id}`)
        result = await result.json();
        //console.warn(result)
        setName(result.name)
        setPrice(result.price)
        setCategort(result.category)
        setCompany(result.company)
    }

    const updateProduct=async()=>{

     //console.warn(name,price,category,company)
     let result =  await fetch(`http://localhost:5000/product/${params.id}`,{
         method:"Put",
         body: JSON.stringify({name,price,category,company}),
         headers: {
           "Content-Type": "application/json",
         },
     });
     result = await result.json();
     navigate('/')
    }
    
    return(
        <div className="product">
            <h1>UPDATE PRODUCT</h1>
            <input type = "text" placeholder="Enter Product Name" onChange={(e)=>setName(e.target.value)}value={name}/>
           
            <input type = "text" placeholder="Enter Product Price" onChange={(e)=>setPrice(e.target.value)}value={price}/>
          
            <input type = "text" placeholder="Enter Product Category" onChange={(e)=>setCategort(e.target.value)}value={category}/>
           
            <input type = "text" placeholder="Enter Product Company" onChange={(e)=>setCompany(e.target.value)}value={company}/>
       
           <button onClick={updateProduct} type ="button">UPDATE</button>
        </div>
    )
}
export default UpdateProduct;