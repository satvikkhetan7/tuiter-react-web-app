import React, {useEffect} from "react";
import TuitItem from "./TuitItem";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(findTuitsThunk())
    }, [])
    return(
        <div className="row">
            <ul className="list-group">
                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
            </ul>

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