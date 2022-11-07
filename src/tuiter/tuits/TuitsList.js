import React from "react";
import TuitItem from "./TuitItem";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const tuits = useSelector(
        state => state.tuits);
    return(
        <div className="row">
            {
                tuits.map(post => {
                    return(
                        <TuitItem post={post} />
                    );
                })
            }
        </div>
    );
}
export default TuitsList;