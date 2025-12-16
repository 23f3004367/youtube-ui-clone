import './App.css'
import TopHeader from "./components/TopHeader"
import LeftHeader from "./components/LeftHeader"
import VideoShow from "./components/VideoShow"
// import { useState } from 'react'


function App() {
  // const [content, setContent] = useState([])
  const content = [
    {
      src:"https://i.ytimg.com/vi/p1QU3kLFPdg/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCnxuRiVlwwfIWUI0t-nSFxwCq7Rg",
      time:"14:30",
      channel_img:"https://yt3.ggpht.com/ytc/AMLnZu8GIzgoQ2ynUtqqsa1-dCCaJ9yIp6qczSoCDgD9=s68-c-k-c0x00ffffff-no-rj",
      video_title:"How to put an HTML website online (on the Internet) - 2022",
      channel_name:"SuperSimpleDev",
      channel_views:"101K views",
      video_Post_on:"5 months ago"
    },
    {
      src:"https://i.ytimg.com/vi/fKopy74weus/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBtp_7CzIK44Mt-h1NUpyWaXeR1Ew",
      time:"03:25",
      channel_img:"https://yt3.ggpht.com/l6ARvvtI4GWlZMV0nMCoatBy6NjJIB_PVK4ZTEpImbspN57kMaSqMHskIPXkgxsiISB0inbO9J4=s88-c-k-c0x00ffffff-no-rj",
      video_title:"Imagine Dragons - Thunder",
      channel_name:"ImagineDragons",
      channel_views:"2.3B views",
      video_Post_on:"8 years ago"
    },
    {
      src:"https://i.ytimg.com/vi/fnlJw9H0xAM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDVV67mmVecph3Vat1TpeSkWJ86NA",
      time:"04:52",
      channel_img:"https://yt3.ggpht.com/fn5hgnPgI7SS8przRsemtRr-ITzvevKWerxkk9soKwgiK5jcCN0hh2mHiWgmcjUK-Bqo6K2-BUA=s88-c-k-c0x00ffffff-no-rj",
      video_title:"NF - The Search",
      channel_name:"NFrealmusic",
      channel_views:"319M views",
      video_Post_on:"6 years ago"
    },
    {
      src:"https://i.ytimg.com/vi/BqSxjmvXzzY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLChFbfATuDgigFqdV6Dub7ztO708Q",
      time:"04:36",
      channel_img:"https://yt3.ggpht.com/ytc/AIdro_mQsjhVR2BqEbwlykAPOjonmlxKXnwfWCDvH0x7Q9s64jo=s68-c-k-c0x00ffffff-no-rj",
      video_title:"57 Years Apart - A Boy And a Man Talk About Life",
      channel_name:"Facts",
      channel_views:"38M views",
      video_Post_on:"10 years ago"
    },
    {
      src:"https://i.ytimg.com/vi/fKopy74weus/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBtp_7CzIK44Mt-h1NUpyWaXeR1Ew",
      time:"03:25",
      channel_img:"https://yt3.ggpht.com/l6ARvvtI4GWlZMV0nMCoatBy6NjJIB_PVK4ZTEpImbspN57kMaSqMHskIPXkgxsiISB0inbO9J4=s88-c-k-c0x00ffffff-no-rj",
      video_title:"Imagine Dragons - Thunder",
      channel_name:"ImagineDragons",
      channel_views:"2.3B views",
      video_Post_on:"8 years ago"
    },
    
    {
      src:"https://i.ytimg.com/vi/fnlJw9H0xAM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDVV67mmVecph3Vat1TpeSkWJ86NA",
      time:"04:52",
      channel_img:"https://yt3.ggpht.com/fn5hgnPgI7SS8przRsemtRr-ITzvevKWerxkk9soKwgiK5jcCN0hh2mHiWgmcjUK-Bqo6K2-BUA=s88-c-k-c0x00ffffff-no-rj",
      video_title:"NF - The Search",
      channel_name:"NFrealmusic",
      channel_views:"319M views",
      video_Post_on:"6 years ago"
    },
    {
      src:"https://i.ytimg.com/vi/BqSxjmvXzzY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLChFbfATuDgigFqdV6Dub7ztO708Q",
      time:"04:36",
      channel_img:"https://yt3.ggpht.com/ytc/AIdro_mQsjhVR2BqEbwlykAPOjonmlxKXnwfWCDvH0x7Q9s64jo=s68-c-k-c0x00ffffff-no-rj",
      video_title:"57 Years Apart - A Boy And a Man Talk About Life",
      channel_name:"Facts",
      channel_views:"38M views",
      video_Post_on:"10 years ago"
    },
    {
      src:"https://i.ytimg.com/vi/p1QU3kLFPdg/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCnxuRiVlwwfIWUI0t-nSFxwCq7Rg",
      time:"14:30",
      channel_img:"https://yt3.ggpht.com/ytc/AMLnZu8GIzgoQ2ynUtqqsa1-dCCaJ9yIp6qczSoCDgD9=s68-c-k-c0x00ffffff-no-rj",
      video_title:"How to put an HTML website online (on the Internet) - 2022",
      channel_name:"SuperSimpleDev",
      channel_views:"101K views",
      video_Post_on:"5 months ago"
    },
    {
      src:"https://i.ytimg.com/vi/BqSxjmvXzzY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLChFbfATuDgigFqdV6Dub7ztO708Q",
      time:"04:36",
      channel_img:"https://yt3.ggpht.com/ytc/AIdro_mQsjhVR2BqEbwlykAPOjonmlxKXnwfWCDvH0x7Q9s64jo=s68-c-k-c0x00ffffff-no-rj",
      video_title:"57 Years Apart - A Boy And a Man Talk About Life",
      channel_name:"Facts",
      channel_views:"38M views",
      video_Post_on:"10 years ago"
    },
    {
      src:"https://i.ytimg.com/vi/p1QU3kLFPdg/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCnxuRiVlwwfIWUI0t-nSFxwCq7Rg",
      time:"14:30",
      channel_img:"https://yt3.ggpht.com/ytc/AMLnZu8GIzgoQ2ynUtqqsa1-dCCaJ9yIp6qczSoCDgD9=s68-c-k-c0x00ffffff-no-rj",
      video_title:"How to put an HTML website online (on the Internet) - 2022",
      channel_name:"SuperSimpleDev",
      channel_views:"101K views",
      video_Post_on:"5 months ago"
    },
    {
      src:"https://i.ytimg.com/vi/fnlJw9H0xAM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDVV67mmVecph3Vat1TpeSkWJ86NA",
      time:"04:52",
      channel_img:"https://yt3.ggpht.com/fn5hgnPgI7SS8przRsemtRr-ITzvevKWerxkk9soKwgiK5jcCN0hh2mHiWgmcjUK-Bqo6K2-BUA=s88-c-k-c0x00ffffff-no-rj",
      video_title:"NF - The Search",
      channel_name:"NFrealmusic",
      channel_views:"319M views",
      video_Post_on:"6 years ago"
    },
    {
      src:"https://i.ytimg.com/vi/fKopy74weus/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBtp_7CzIK44Mt-h1NUpyWaXeR1Ew",
      time:"03:25",
      channel_img:"https://yt3.ggpht.com/l6ARvvtI4GWlZMV0nMCoatBy6NjJIB_PVK4ZTEpImbspN57kMaSqMHskIPXkgxsiISB0inbO9J4=s88-c-k-c0x00ffffff-no-rj",
      video_title:"Imagine Dragons - Thunder",
      channel_name:"ImagineDragons",
      channel_views:"2.3B views",
      video_Post_on:"8 years ago"
    },

  ]
  const renderContent = content.map((cont, index) => {
  return <div key={index}><VideoShow {...cont} index={index} /></div>
})
  return (
      <div>
        < TopHeader />
        <div className="container">
          < LeftHeader />
          <div className="video_grid" id="video_list">
            {renderContent}
          </div>
        </div>
      </div>
  )
}

export default App
