import React from "react";
import HomeComponent from "./home";
import whoReducer
    from "./reducers/who-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";

const Tuiter = () => {
    const store = configureStore(
        {reducer: {who: whoReducer, tuits: tuitsReducer, profile: profileReducer}});
    return (
        <>
        <Provider store={store}>
            <HomeComponent/>
        </Provider>
        </>
    )
};

export default Tuiter