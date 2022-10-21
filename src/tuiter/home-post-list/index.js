import React from "react";
import posts from "./postitems.json";
import HomePostItem from "./HomePostItem";

const HomePostItemList = () => {
    return(
        <div className="row">
            {
                posts.map(post => {
                    return(
                        <HomePostItem post={post} />
                    );
                })
            }
        </div>
    );
}

export default HomePostItemList;
