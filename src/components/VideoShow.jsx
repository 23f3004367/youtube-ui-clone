import "../App.css"
function VideoShow({ src, time, channel_img, video_title, channel_name, channel_views, video_Post_on, index }) {
  return (
    <div className="video" data-index={index}>
        <div className="video_img_time">
            <img className="video_img" src={src}/>
            <div className="video_time">{time}</div>
        </div>
        <div className="about-grid">
            <div className="channel_img_box">
              <img
                className="channel_img"
                src={channel_img}
              />
            </div>
            <div className="video_text">
              <p className="video_title">
                {video_title}
              </p>
              <p className="youtuber_channel">{channel_name}</p>
              <p className="video_status">{channel_views} &#8226; {video_Post_on}</p>
            </div>
        </div>
    </div>
    
    )
}
export default VideoShow