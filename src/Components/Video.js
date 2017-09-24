import React, {Component} from 'react';
import {Player, ControlBar, CurrentTimeDisplay, TimeDivider, VolumeMenuButton} from 'video-react';
import "../../node_modules/video-react/dist/video-react.css"; // import css
import "../css/video.css";

import HLSSource from './HLSSource';

class Video extends Component {
    constructor(props) {
        super(props);

        this.state = {
        	src: "//living.stuhome.com/szw/mine.m3u8"
        }
    }

    render() {
        return (
        	<div className="video_container">
				<Player>
		            <HLSSource isVideoChild src={this.state.src} height={80} preload={"auto"} />
		            <ControlBar>
				        <CurrentTimeDisplay order={4.1} />
				        <TimeDivider order={4.2} />
				        <VolumeMenuButton disabled />
				    </ControlBar>
		        </Player>
		        <div className="video_info">
		        	<p>巴拉巴拉一堆介绍</p>
		        </div>
	        </div>
        );
    }
}

export default Video;
