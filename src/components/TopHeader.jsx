import "../App.css"
function TopHeader(){
    return(
    <div className="header">
      <div className="left_section">
        <img
          className="hamburger_menu"
          src="https://img.icons8.com/material-outlined/344/menu.png"
        />
        <img
          className="youtube_logo"
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube2_colored_svg-128.png"
        />
      </div>
      <div className="middle_section">
        <input className="Search_box" type="text" placeholder="Search" />
        <img
          className="search_logo"
          src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
        />
        <img
          className="voice_search_icon"
          src="https://www.kindpng.com/picc/m/25-254069_search-voice-voice-search-icon-png-transparent-png.png"
        />
      </div>
      <div className="right_section">
        <div className="create_option">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope div"
            style={{
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%",
            }}
          >
            <g className="style-scope">
              <path
                d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
                className="style-scope"
              ></path>
            </g>
          </svg>
          {/* <!--css-build:shady--> */}
        </div>
        <div className="ball_icon_container">
          <img
            className="bell_icon"
            src="https://static.vecteezy.com/system/resources/previews/001/505/138/original/notification-bell-icon-free-vector.jpg"
          />
          <div className="notification_numbers">
            <div>9+</div>
          </div>
        </div>
        <div>
          <img
            className="user_img"
            src="https://lh3.googleusercontent.com/ogw/AOh-ky1ameWrF6ucEyo_q8eE8IModJijUYBjsSFxweSHcq4=s32-c-mo"
          />
        </div>
      </div>
    </div>
    )
}
export default TopHeader