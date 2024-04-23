import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import UpdateFoodPage from "./pages/UpdateFoodPage.jsx";
import CreateFoodPage from "./pages/CreateFoodPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/update/:id' element={<UpdateFoodPage/>}/>
                <Route path='/create' element={<CreateFoodPage/>}/>
            </Routes>

        </BrowserRouter>
    );
};

export default App;