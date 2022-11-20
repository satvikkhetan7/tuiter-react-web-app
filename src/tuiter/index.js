import React from "react";
import HomeComponent from "./home";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import whoReducer from "./reducers/who-reducer";

const Tuiter = () => {
    const store = configureStore(
        {reducer: {who: whoReducer, tuitsData: tuitsReducer, profile: profileReducer}});
    return (
        <>
        <Provider store={store}>
            <HomeComponent/>
        </Provider>
        </>
    )
};

export default Tuiter