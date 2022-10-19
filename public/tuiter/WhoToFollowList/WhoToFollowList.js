import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
        <div class="list-group ms-1 me-1 bg-black">
            <ul class="list-group">
                    ${
            who.map(w => {
                return(WhoToFollowListItem(w));
            }).join('')
        }
            </ul>
        </div>
`); }
export default WhoToFollowList;

