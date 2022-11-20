import {useDispatch} from "react-redux";
import {faHeart, faThumbsDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch(updateTuitThunk({
            ...post,
            likes: post.likes + 1
        }));
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