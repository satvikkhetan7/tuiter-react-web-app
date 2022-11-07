import {useDispatch} from "react-redux";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', post});
    };
    return (
        <span onClick={likeTuit}>
    {
        post.liked &&
        <FontAwesomeIcon icon={faHeart} />
    }
            {
                !post.liked &&
                <i className="far fa-heart me-1 wd-padding-right-12"></i>
            }

            {post.likes}
    </span>
    );
}
export default TuitStats;