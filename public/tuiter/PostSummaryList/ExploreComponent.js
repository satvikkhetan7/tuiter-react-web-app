import posts from "./index.js";
import PostSummaryItem from "./PostSummaryItem.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="mt-1 mb-3 input-icons"">
                                <div>
            <input class="col-10 col-md-10 col-xl-10 mt-1 mb-1 wd-search-color-gray wd-rounded-corners-all-around wd-margin-left" id="text-fields-search" placeholder=" &#128269  Search Tuiter"/>
            <i class="col-1 col-md-1 col-xl-1 mt-1 mb-1 float-end fa fa-cog fa-2x" style="color: white"></i>
        </div>
                        <a class="wd-margin-right wd-float-right mt-1" href="explore-settings.html">
                        </a>
                    </div>
                            <div class="pt-1">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link text-muted" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-muted" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-muted" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-muted" href="#" >Sports</a>
                </li>
                <li class="nav-item d-none d-sm-block d-lg-block d-xl-block d-xxl-block">
                    <a class="nav-link active text-muted" href="#" >Entertainment</a>
                </li>
            </ul>
        </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
           </ul>
           <img src="../images/teslabot.jpg"
                             width="90%"/>
           
           <div class="bottom-left">Tesla Bot</div>
           
           <ul>
           <br> 
           ${
        posts.map(post => {
            return(PostSummaryItem(post));
        }).join('')
    }
           </ul>
           
    `);
}
export default ExploreComponent;
