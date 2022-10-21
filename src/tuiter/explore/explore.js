import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const MidComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
                </div>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a className="nav-link active" href="templink.html">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="templink.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="templink.html">News</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="./images/teslabot.jpg" className="w-100" alt="./images/teslabot.jpg"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    Tesla Bot</h1>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default MidComponent;