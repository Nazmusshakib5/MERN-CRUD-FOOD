import React from 'react';
import MasterLayout from "../components/MasterSharedComponents/MasterLayout.jsx";
import AllFood from "../components/AllFoods/AllFood.jsx";


const Homepage = () => {
    return (
        <MasterLayout>
           <AllFood/>
        </MasterLayout>
    );
};

export default Homepage;