const WhoToFollowListItem = (w) => {

    return(`
        <div class="row">
            <div class="col-2">
                <a href="#" class="list-group-item bg-black">
                    <img src=${w.avatarIcon} style="height:25px; width: 25px"/>
                </a>
            </div>
            <div class="col-7">
                <a href="#" class="list-group-item text-white bg-black">${w.userName}<i class="fas fa-check-circle"></i><br/>
                <label class="text-muted" style="font-size: small">${w.handle}</label>
                </a>
            </div>
            <div class="col-3">
                <button class="btn btn-primary float-end" style="background-color: white; color: black; border-radius: 20px;">
                    Follow
                </button>
            </div>
        </div>
    `);
}
export default WhoToFollowListItem;
