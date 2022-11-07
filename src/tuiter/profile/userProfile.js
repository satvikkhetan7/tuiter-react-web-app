import React from "react";
import {Link} from "react-router-dom";
import {faBirthdayCake, faCalendar, faLocation} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector} from "react-redux";


const UserProfile = () => {

    const profile = useSelector(state => state.profile);
    return(
        <>
            <div>
                <img className="wd-padding-top wd-profile-image rounded-circle" height="70px" width="60px"
                     src={profile.profilePicture} alt="spaceX"/>
                <h2>{profile.firstName} {profile.lastName}</h2>
                <span style={{color:"gray"}}>{profile.numOfTuits} Tuits</span>
            </div>
            <div>
                <img className="wd-padding-top wd-banner-image" height="100%" width="100%"
                     src={profile.bannerPicture} alt="spaceX"/>
            </div>
            <div>
                <Link to="/tuiter/edit-profile">
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold">
                        Edit Profile
                    </button>
                </Link>
            </div>
            <div className="pos-relative pt-5 float-left" align="left">
                <h4>{profile.firstName} {profile.lastName}</h4><br/>
                <span style={{color:"gray"}}>{profile.handle}</span><br/>
                <span>{profile.bio}</span><br/><br/>

                <div>
                    <FontAwesomeIcon icon={faLocation} />
                    <span className="ms-2 wd-text-gray">{profile.location}</span>&nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faBirthdayCake} />
                    <span className="ms-2 wd-text-gray">{profile.dateOfBirth}</span>&nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faCalendar}/>
                    <span className="ms-2 wd-text-gray">{profile.dateJoined}</span>
                </div>
                <div>
                    <span><b>{profile.followingCount}</b></span>
                    <span className="ms-2 wd-text-gray">Following</span>&nbsp;&nbsp;&nbsp;
                    <span><b>{profile.followersCount}</b></span>
                    <span className="ms-2 wd-text-gray">Followers</span>
                </div><br/>
                <div>
                    <span>{profile.website}</span>
                </div>
            </div>
        </>


    );
}
export default UserProfile;