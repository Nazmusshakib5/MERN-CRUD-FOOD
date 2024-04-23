import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import '../../assets/css/style.css'
import ListLoader from "../../Loader/ListLoader.jsx";

const AllFood = () => {
    const [food,setFood]=useState([]);
    const [refresh,setRefresh]=useState(true)
    useEffect(() => {
        (async ()=>{
           await getFoodData();
           setRefresh(false)
        })()
    }, []);
    async function getFoodData(){
        let res=await axios.get('http://localhost:5040/api/read');
        setFood(res.data['data'])

    }
    async function deleteData(id){
        let res=await axios.get(`http://localhost:5040/api/delete/${id}`)
        await getFoodData();
    }
    return (
        <div style={{height:"85vh"}} className='ms-4'>
            <div className='container'>
                <p className='mt-4 mb-3 fw-bold fs-4 txt-color'>All Food List</p>
                <div className='row '>
                    {
                        food.length===0?(refresh?(<ListLoader/>):(<div className='d-flex justify-content-center
                        align-items-center' style={{height:'70vh'}}>
                            <p className='mt-4 mb-3 fw-bold fs-4 text-center text-success'>No Food Item To Show <br/> Create Some</p>
                        </div>)) : (
                            food.map((item, i) => <div className="col-md-3 mb-3" key={i}>
                        <div className="card position-relative">
                            <div style={{height:'30px',right:'15px',top:'15px'}} className='px-2 py-1 rounded-3 bg-price text-white position-absolute
                             '><p>Tk : {item['price']}</p></div>
                            <img className='card-img-top' style={{height:'200px'}} src={item['image']} alt='image'/>
                            <div className='card-body'>
                            <p>{item['name']}</p>
                            <div className='d-flex gap-3'>
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