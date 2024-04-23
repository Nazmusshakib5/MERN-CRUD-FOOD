import React from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreateFoodForm = () => {
    let navigate=useNavigate();
    const createData= async (event)=>{
        event.preventDefault();
        let formData=new FormData(event.target);
        let name=formData.get('foodName');
        let code=formData.get('foodCode');
        let image=formData.get('foodImage');
        let category=formData.get('foodCategory');
        let quantity=formData.get('foodQuantity');
        let price=formData.get('foodPrice');

        await axios.post('http://localhost:5040/api/create',{name:name,code:code,image:image,category:category,
        quantity:parseFloat(quantity),price:parseFloat(price)})

        navigate('/');
    }

    return (
        <div style={{height: "85vh"}} className='ms-4 me-4'>
            <div className='container'>
                <p className='mt-4 mb-4 fw-bold txt-color fs-4'>Create Food Item</p>
                <form onSubmit={createData}>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="form-group">
                                <label className='mb-1' htmlFor="foodName">Food Name</label>
                                <input style={{height: '50px'}} name="foodName" className="form-control"/>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className="form-group">
                                <label className='mb-1' htmlFor="foodCode">Food Code</label>
                                <input style={{height: '50px'}} name="foodCode" className="form-control"/>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className="form-group">
                                <label className='mb-1' htmlFor="foodImage">Food Image</label>
                                <input style={{height: '50px'}} name="foodImage" className="form-control"/>
                            </div>
                        </div>

                        <div className='col-md-4 mt-4'>
                            <div className="form-group">
                                <label className='mb-1' htmlFor="foodCategory">Food Category</label>
                                <input style={{height: '50px'}} name="foodCategory" className="form-control"/>
                            </div>
                        </div>

                        <div className='col-md-4 mt-4'>
                            <div className="form-group">
                                <label className='mb-1' htmlFor="foodQuantity">QTY</label>
                                <input style={{height: '50px'}} name="foodQuantity" className="form-control"/>
                            </div>
                        </div>

                        <div className='col-md-4 mt-4'>
                            <div className="form-group">
                                <label className='mb-1' htmlFor="foodPrice">Price</label>
                                <input style={{height: '50px'}} name="foodPrice" className="form-control"/>
                            </div>
                        </div>

                    </div>
                    <button style={{backgroundColor:'#5A67BA'}} type="submit" className="btn btn-primary px-5 py-2 mt-5">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreateFoodForm;