const PostItem = () => {
    return(`
         <div class="row">
             <div class="card bg-black">
                <div class="card-body">
                    <label>Elon Musk<i class="fas fa-check-circle"></i><label style="font-size: smaller" class="text-muted">&nbsp;September 24, 2021</label></label><br/>
                    <label>Amazing show about moon mission</label><br/>
                    <img src="../images/astro.jpeg" style="width: 90%; height: 90%"></img>
                </div>
            </div>
            <div class="card bg-black">
                <div class="card-body">
                    <label>New your times<i class="fas fa-check-circle"></i><label style="font-size: smaller" class="text-muted">&nbsp;September 24, 2021</label></label><br/>
                    <label>Met gala happening this week</label><br/>
                    <img src="../images/met.jpeg" style="width: 90%; height: 90%"></img>
                </div>
            </div>
        </div>
    `);
}

export default PostItem;