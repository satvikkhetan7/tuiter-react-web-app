const PostSummaryItem = (post) => {
    return(`
        <div class="card bg-black">
            <div class="card-body">
                <div class="row">
                    <div class="col-10 wd-p-white">
                        <label>${post.title}<i class="fas fa-check-circle"></i><label style="font-size: smaller" class="text-muted">&nbsp;September 24, 2021</label></label><br/>
                        <label>${post.topic}</label>
                    </div>
                    <div class="col-2">
                        <img src=${post.image} style="width: 50px; height: 50px"></img>
                    </div>
                </div>
            </div>
        </div>
    `);
}
export default PostSummaryItem;


