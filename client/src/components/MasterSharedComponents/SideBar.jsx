import React from 'react';
import Navbar from "./Navbar.jsx";
import { NavLink} from "react-router-dom";

const SideBar = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <Navbar/>
            <div style={{width:'80%',minHeight:'90vh'}} className='d-flex flex-column align-items-center'>
                <div className='w-100'>
                    <p className='text-secondary ms-3 mt-5'>MENU</p>
                    <NavLink to={'/create'} className={({isActive})=>`
                    d-flex w-100 ${isActive?'back-opacity-color  txt-color ':'text-secondary text-secondary'} text-decoration-none rounded-2 align-items-center p-2
                    `}>
                        <span className='ms-2'><i className="bi bi-cart-dash-fill"></i></span>
                        <span className='ms-2 '>Create Food</span>
                    </NavLink>
                    <NavLink to={'/'} className={({isActive})=>`
                    d-flex w-100 ${isActive?'back-opacity-color  txt-color ':'text-secondary text-secondary'} text-decoration-none rounded-2 align-items-center p-2
                    `}>
                        <span><i className="bi bi-file-earmark-text ms-2"></i></span>
                        <span className='ms-2'>All Food</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default SideBar;