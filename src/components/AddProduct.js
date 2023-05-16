import React from "react";
import'./AddProduct.css';
const AddProduct=()=>{
    const[name,setName]=React.useState('');
    const[price,setPrice]=React.useState('');
    const[category,setCategort]=React.useState('');
    const[company,setCompany]=React.useState('');
    const[error,setError]=React.useState(false);

    const addProduct=async()=>{

       if(!name || !price || !category || !company){
           setError(true);
           return false;
       }


        console.warn(name,price,category,company)
        const userId =JSON.parse(localStorage.getItem('user'))._id;
        let result= await fetch("http://localhost:5000/add_product",{
            method: "Post",
            body: JSON.stringify({name,price,category,company}),
            headers: {
              "Content-Type": "application/json",
            },
        });
        result = await result.json();
        console.warn(result);
    
    }
    
    
    return(
        <div className="product">
            <h1>ADD PRODUCT</h1>
            <input type = "text" placeholder="Enter Product Name" onChange={(e)=>setName(e.target.value)}value={name}/>
           { error && !name && <span className="invalid-input">Enter Valid Name</span>}
            <input type = "text" placeholder="Enter Product Price" onChange={(e)=>setPrice(e.target.value)}value={price}/>
            { error && !price && <span className="invalid-input">Enter Valid Price</span>}
            <input type = "text" placeholder="Enter Product Category" onChange={(e)=>setCategort(e.target.value)}value={category}/>
            { error && !category && <span className="invalid-input">Enter Valid Category</span>}
            <input type = "text" placeholder="Enter Product Company" onChange={(e)=>setCompany(e.target.value)}value={company}/>
            { error && !company &&<span className="invalid-input">Enter Valid Company</span>}
           <button onClick={addProduct} type ="button">ADD</button>
        </div>
    )
}
export default AddProduct;