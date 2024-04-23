import React from 'react';

const ListLoader = () => {
    return (
        <div className='container'>
            <div  className=' row d-flex justify-content-center'>
                <div style={{marginTop:'200px'}} className='col-md-2 text-center'>
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListLoader;