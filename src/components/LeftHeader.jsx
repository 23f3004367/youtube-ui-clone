import "../App.css"
function LeftHeader(){
    return(
        <div className="sidebar">
            <div className="sidebar_icon">
            <div>
                <span className="material-symbols-outlined"> home </span>
            </div>
            <div>Home</div>
            </div>
            <div className="sidebar_icon">
            <div>
                <span className="material-symbols-outlined"> subscriptions </span>
            </div>
            <div>Subscriptions</div>
            </div>
            <div className="sidebar_icon">
            <div>
                <span className="material-symbols-outlined"> explore </span>
            </div>
            <div>Explore</div>
            </div>
            <div className="sidebar_icon">
            <div>
                <span className="material-symbols-outlined"> video_library </span>
            </div>
            <div>Library</div>
            </div>
        </div>
    )
}
export default LeftHeader