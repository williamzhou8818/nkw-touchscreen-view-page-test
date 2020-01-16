import React, {Fragment} from  'react';
import { Player , ControlBar, BigPlayButton} from 'video-react';

import './nkwVideos.scss';
import { toggleFullscreen } from 'video-react/lib/actions/player';

const NkwVideo = () => { 
     

    return (
        <Fragment>
              <div className="nkw_videos_detail_header">
                <h1>NKW Group Videos</h1>
              </div> 

              <div className="video_warper">
              <div className="vidoes_list"> 
                    <div >
                        <Player 
                        poster="http://localhost:5000/videos/NKW_video_poster.png"
                        src="http://localhost:5000/videos/NKWFreshafreshapproachfor%20armersinPapuaNewGuinea.mp4"

                        >
                            <BigPlayButton position="center" className="my-class"  />
                                  {/* <ControlBar autoHide={false} className="my-class"/> */}

                        </Player>
                    </div>
                    <div >
                        <Player 
                        
                        poster="http://localhost:5000/videos/mdf_partner_poster.png"
                        src="http://localhost:5000/videos/NKWFreshafreshapproachfor%20armersinPapuaNewGuinea.mp4"
                        >
                            <BigPlayButton position="center" className="my-class"  />
                        </Player>
                    </div>
              </div>

              </div>
        </Fragment>
    )

}


export default NkwVideo;




//  src url 

// http://localhost:5000/videos/NKWFreshafreshapproachfor%20armersinPapuaNewGuinea.mp4