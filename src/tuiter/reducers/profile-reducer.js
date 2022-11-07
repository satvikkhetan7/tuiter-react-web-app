import ProfileData from '../data/profile.json'

const profileReducer = (state = ProfileData, action) => {
    switch (action.type) {
        case 'profileUpdate':
            const newProfile = {
                ...state, ...action.profileChange
            };
            return newProfile;

        default:
            return state;
    }
}

export default profileReducer;