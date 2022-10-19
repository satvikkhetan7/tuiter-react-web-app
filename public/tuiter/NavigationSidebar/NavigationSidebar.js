const NavigationSidebar = () => {
    return(`
        <div>
            <ul class="list-group">
                <a href="#" class="list-group-item list-group-item-action text-white bg-black">
                    <i class="fab fa-twitter"></i>&nbsp
                </a>
                <a href="home.html" class="list-group-item list-group-item-action text-white bg-black">
                    <i class="fa fa-home wd-bg-color-black"></i>&nbsp
                    <span class="d-none d-xl-inline d-xxl-inline wd-bg-color-black">Home</span>
                </a>
                <a href="explore.html" class="list-group-item list-group-item-action active text-white bg-black">
                    <i class="fa fa-hashtag"></i>&nbsp
                    <span class="d-none d-xl-inline d-xxl-inline">Explore</span>
                </a>
                <a href="notifications.html" class="list-group-item list-group-item-action text-white bg-black">
                    <i class="fa fa-bell"></i>&nbsp
                    <span class="d-none d-xl-inline d-xxl-inline">Notifications</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action text-white bg-black">
                    <i class="fa fa-envelope"></i>&nbsp
                    <span class="d-none d-xl-inline d-xxl-inline">Messages</span>
                </a>
                <a href="bookmarks.html" class="list-group-item list-group-item-action text-white bg-black">
                    <i class="fa fa-bookmark"></i>&nbsp
                    <span class="d-none d-xl-inline d-xxl-inline">Bookmark</span>
                </a>
                <a href="lists.html" class="list-group-item list-group-item-action text-white bg-black">
                    <i class="fa fa-list"></i> &nbsp
                    <span class="d-none d-xl-inline d-xxl-inline">List</span>
                </a>
                <a href="profile.html" class="list-group-item list-group-item-action text-white bg-black">
                    <i class="fa fa-user"></i>&nbsp
                    <span class="d-none d-xl-inline d-xxl-inline">Profile</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action text-white bg-black">
                    <i class="fa fa-info-circle"></i>&nbsp
                    <span class="d-none d-xl-inline d-xxl-inline">More</span>
                </a>
            </ul>
        </div>
        <br>
        <button class="btn btn-primary override-bs-tweet">
            Tweet
        </button>
    `);
}
export default NavigationSidebar;