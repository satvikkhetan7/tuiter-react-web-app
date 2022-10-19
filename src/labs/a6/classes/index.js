import "./index.css";
function Classes(){
    const color="blue";
    const dangerous=true;
    return(
        <div>
            <h2>Classes</h2>
            <div className={`${dangerous ? 'wd-bg-red' : 'rd-bg-green'} wd-fg-black wd-padding-10px`}>
                Dangerous background
            </div>
            <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
                Dynamic blue background
            </div>
            <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
                Yellow Background
            </div>
            <div className="wd-bg-blue wd-fg-black wd-padding-10px">
                Blue background
            </div>
            <div className="wd-bg-red wd-fg-black wd-padding-10px">
                Red background
            </div>
        </div>
    );
}
export default Classes;