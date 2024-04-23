import React from 'react';
import MasterLayout from "../components/MasterSharedComponents/MasterLayout.jsx";
import CreateFoodForm from "../components/CreateFoodForm/CreateFoodForm.jsx";

const CreateFoodPage = () => {
    return (
        <MasterLayout>
        <CreateFoodForm/>
        </MasterLayout>
    );
};

export default CreateFoodPage;