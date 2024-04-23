import React from 'react';
import '../../assets/css/style.css'

const Navbar = () => {
    return (
        <div style={{height: "10vh",width:'100%'}} className='border-bottom  border-secondary-subtle p-0 d-flex'>
            <div style={{height:"40px",width:"40px"}} className='circle d-flex justify-content-center align-items-center ms-5 my-auto  bg-color'>
                <div><h4 className='text-white mt-1 text-center'>G</h4></div>
            </div>
            <div className='my-auto '>
                <p className='my-auto ms-2 fw-bold txt-color fs-6'>CRUD food</p>
            </div>
        </div>
    );
};

export default Navbar;