/* eslint-env jquery */
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import ExploreComponent from "../PostSummaryList/ExploreComponent.js";
import PostItem from "../PostList/PostItem.js";
function exploreComponent() {
    $('#wd-explore').append(`
  <div class="row wd-padding-top wd-padding-left-12 wd-bg-color-black">
   <div class="col-2 col-md-2 col-xl-2 mt-1 mb-1">
    ${NavigationSidebar()}
   </div>
   <div class="col-6 col-md-7 col-xl-7 mt-1 mb-1">
    ${PostItem()}
   </div>
   <div class="col-2 col-md-0 col-xl-3 d-none d-xl-block d-xxl-block">
    ${ExploreComponent()}
   </div>
  </div>
   `);
}
$(exploreComponent);