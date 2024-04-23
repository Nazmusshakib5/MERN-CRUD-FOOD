import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import '../../assets/css/style.css'
import ListLoader from "../../Loader/ListLoader.jsx";

const AllFood = () => {
    const [food,setFood]=useState([]);
    useEffect(() => {
        (async ()=>{
           await getFoodData();
        })()
    }, []);
    async function getFoodData(){
        let res=await axios.get('http://localhost:5040/api/read');
        setFood(res.data['data']);
    }
    async function deleteData(id){
        let res=await axios.get(`http://localhost:5040/api/delete/${id}`)
        await getFoodData();
    }
    console.log(food);
    return (
        <div style={{height:"85vh"}} className='ms-4'>
            <div className='container'>
                <p className='mt-4 mb-3 fw-bold fs-4 txt-color'>All Food List</p>
                <div className='row '>
                    {
                        food.length===0?(<ListLoader/>):(
                        food.map((item,i) => <div className="col-md-3 mb-3" key={i}>
                        <div className="card">
                            <img className='card-img-top' style={{height:'200px'}} src={item['image']} alt='image'/>
                            <div className='card-body'>
                            <p>{item['name']}</p>
                            <div className='d-flex gap-5'>
                                <Link to={`/update/${item['_id']}`} className=' btn btn-outline-success rounded-2 text-decoration-none
                              px-3'>Edit</Link>
                                <button onClick={()=>deleteData(item['_id'])} className=' btn btn-outline-danger rounded-2 text-decoration-none
                              px-3'>Delete</button>
                            </div>
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    );
};

export default AllFood;