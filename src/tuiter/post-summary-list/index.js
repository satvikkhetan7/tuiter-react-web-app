import React from "react";
import {useSelector} from "react-redux";
import PostSummaryItem
    from "./post-summary-item";
import who from "../data/who.json";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <div className="row">
            {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={who._id} post={post}/> )
            }
        </div>
    );
};
export default PostSummaryList;