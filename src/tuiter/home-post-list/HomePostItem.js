import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBorderAll,
    faCheckCircle,
    faComment,
    faHeart,
    faHome,
    faRetweet,
    faUpload
} from "@fortawesome/free-solid-svg-icons";
const HomePostItem = ({
                      post = {
                          userImage: './images/java.png',
                          name: 'Java',
                          handle: 'java',
                          time: '2h',
                          title: 'Java is again in the race',
                          image: './images/java.png',
                      }
                  }) => {
    return(<>
        <div>
            <img className="wd-padding-top wd-bookmark-img"
                 src={post.userImage} alt="spaceX"/>
            <span className="wd-padding-left-12">{post.name}</span>&nbsp;<FontAwesomeIcon icon={faCheckCircle} />
            <span className="wd-padding-left-12 wd-author-handle">@{post.handle}</span>
            <span className="wd-padding-left-12 wd-author-handle">{post.time}</span>

            <p>{post.title}</p>
            <div className="wd-round-border">
                <img className="wd-padding-top wd-bookmark-big-img wd-rounded-corners-all-around"
                     src={post.image}/>
            </div>
            <br/>
            <div>
                <a className=" wd-padding-left-64" href="templink.html">
                    <span><FontAwesomeIcon icon={faComment} /></span><span className="wd-padding-left-12">123</span>
                </a>
                <a className="wd-padding-left-64" href="templink.html">
                    <span><FontAwesomeIcon icon={faRetweet} /></span><span className="wd-padding-left-12">453</span>
                </a>
                <a className="wd-icon-red wd-padding-left-64" href="templink.html">
                    <span><FontAwesomeIcon icon={faHeart} /></span><span className="wd-padding-left-12">1298</span>
                </a>
                <a className="wd-padding-left-64" href="templink.html">
                    <span><FontAwesomeIcon icon={faUpload} /></span><span className="wd-padding-left-12">77</span>
                </a>
            </div>
            <br/>
            <hr/>
        </div>
    </>);
}
export default HomePostItem;