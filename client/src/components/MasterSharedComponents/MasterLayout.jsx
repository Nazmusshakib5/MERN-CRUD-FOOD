import Navbar from "./Navbar.jsx";
import React from "react";
import SideBar from "./SideBar.jsx";
import '../../assets/css/style.css'

const MasterLayout = (props) => {
    return (
        <div className='container-fluid'>

            {/*<div style={{height:"7vh"}} className='row'>*/}
            {/*    <Navbar/>*/}
            {/*</div>*/}

            <div className='row'>
                <div className='col-2 sideBackGround p-0'>
                    <SideBar/>
                </div>
                <div className='col-10 p-0'>
                    <div style={{height:"10vh"}} className='border-bottom  border-secondary-subtle'></div>
                    {props.children}
                </div>
            </div>
        </div>

    );
};

export default MasterLayout;