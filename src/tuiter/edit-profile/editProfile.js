import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditProfile = () => {

    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const [profileChange, setProfileChange] = useState(profile);

    const updateFirstName = (event) => {
        const FirstName = event.target.value;
        const newProfile = {
            ...profileChange,
            firstName: FirstName
        };

        setProfileChange(newProfile);
    }

    const updateLastName = (event) => {
        const LastName = event.target.value;
        const newProfile = {
            ...profileChange,
            lastName: LastName
        };
        setProfileChange(newProfile);
    }

    const updateBio = (event) => {
        const Bio = event.target.value;
        const newProfile = {
            ...profileChange,
            bio: Bio
        };
        setProfileChange(newProfile);
    }

    const updateLocation = (event) => {
        const Location = event.target.value;
        const newProfile = {
            ...profileChange,
            location: Location
        };
        setProfileChange(newProfile);
    }

    const updateDateOfBirth = (event) => {
        const DateOfBirth = event.target.value;
        const newProfile = {
            ...profileChange,
            dateOfBirth: DateOfBirth
        };
        setProfileChange(newProfile);
    }

    const updateWebsite = (event) => {
        const Website = event.target.value;
        const newProfile = {
            ...profileChange,
            website: Website
        };
        setProfileChange(newProfile);
    }

    const assertChanges = (event) => {
        dispatch({type: 'profileUpdate', profileChange})
    }

    return(
        <>
            <div>
                <img className="wd-padding-top wd-banner-image" height="100%" width="100%"
                     src={profile.bannerPicture} alt="spaceX"/>
            </div>
            <div>
                <img className="wd-padding-top wd-profile-image rounded-circle" height="70px" width="60px"
                     src={profile.profilePicture} alt="spaceX"/>
            </div>
            <div>
                <Link to="/tuiter/profile">
                    <button align = "left" className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bol">
                        X
                    </button>
                </Link>
            </div>
            <div>
                <Link to="/tuiter/profile">
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bol" onClick={assertChanges}>
                        Save
                    </button>
                </Link>
            </div>

            <div className="mt-5" align="left">
                <h4>First Name</h4>
                <input value={profileChange.firstName} onChange={updateFirstName} className="form-control"/>
                <br/>
                <h4>Last Name</h4>
                <input value={profileChange.lastName} onChange={updateLastName} className="form-control"/>
                <br/>
                <h4>Bio</h4>
                <input value={profileChange.bio} onChange={updateBio} className="form-control"/>
                <br/>
                <h4>Location</h4>
                <input value={profileChange.location} onChange={updateLocation} className="form-control"/>
                <br/>
                <h4>Date of Birth</h4>
                <input value={profileChange.dateOfBirth} onChange={updateDateOfBirth} className="form-control"/>
                <br/>
                <h4>Website</h4>
                <input value={profileChange.website} onChange={updateWebsite} className="form-control"/>
            </div>
        </>
    );
}
export default EditProfile;