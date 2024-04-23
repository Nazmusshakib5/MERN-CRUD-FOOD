import React from 'react';
import MasterLayout from "../components/MasterSharedComponents/MasterLayout.jsx";
import UpdateFoodForm from "../components/UpdateFoodForm/UpdateFoodForm.jsx";

const UpdateFoodPage = () => {
    return (
        <MasterLayout>
          <UpdateFoodForm/>
        </MasterLayout>
    );
};

export default UpdateFoodPage;