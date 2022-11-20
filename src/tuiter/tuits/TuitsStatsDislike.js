import {useDispatch} from "react-redux";
import {faThumbsDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStatsDislike = ({post}) => {
    const dispatch = useDispatch();
    const dislikeTuit = () => {
        dispatch(updateTuitThunk({
            ...post,
            dislikes: post.dislikes + 1
        }));
    };
    return (
            <span onClick={dislikeTuit}>
            {
                post.disliked &&
                <FontAwesomeIcon icon={faThumbsDown} />
            }
                {
                    !post.disliked &&
                    <i className="far fa-heart me-1 wd-padding-right-12"></i>
                }

                {post.dislikes}
        </span>
    );
}
export default TuitStatsDislike;