import React, {Component} from 'react';
import {Player, LoadingSpinner, ControlBar, CurrentTimeDisplay, TimeDivider, VolumeMenuButton} from 'video-react';
import { Carousel } from 'antd';
import "../../node_modules/video-react/dist/video-react.css"; // import css
import "../css/video.css";

import HLSSource from './HLSSource';

class Video extends Component {
    constructor(props) {
        super(props);

        this.state = {
        	src: this.props.src,
        	initHeight: 168,
        	notice: [
				{
					url: 'http://www.video.uestc.edu.cn/Index/VideoDetailPage?pid=0&cid=27&vid=2292',
					image: 'http://www.video.uestc.edu.cn/upload/processimg/2017/7/9137d6b86ad9e8c5104b5c7edd0554a01499244483.jpg',
					alt: '直播1'
				},
				{
					url: 'http://www.video.uestc.edu.cn/Index/VideoDetailPage?pid=0&cid=47&vid=2291',
					image: 'http://www.video.uestc.edu.cn/upload/processimg/2017/7/b4af376a678845f44c535a4697ddad3b1499244406.jpg',
					alt: '直播1'
				},
				{
					url: 'http://www.video.uestc.edu.cn/Index/VideoDetailPage?pid=0&cid=27&vid=2278',
					image: 'http://www.video.uestc.edu.cn/upload/processimg/2017/6/cc62bb1d2856e0d1501169d7d6a09d5e1498707378.jpg',
					alt: '直播3'
				},
        	]
        }

		this.handleClick = this.handleClick.bind(this);
    }

	handleClick(e) {
		window.location.href=e.target.getAttribute('data-href');
	}

    render() {
        return (
        	<div className="video_container">
	        	{
	        		this.state.notice.length && this.props.src === undefined ? 
	        		<Carousel autoplay={this.state.notice.length > 1 ? true : false} autoplaySpeed={5000} className="carousel" >
						{
							this.state.notice.map((e, i) => {
								return (
									<img key={i} data-href={e.url} src={e.image} alt={e.alt} className="carousel_image" onClick={this.handleClick}/>
								)
	 						})
						}
				    </Carousel>
					:
					<Player playsInline={true} poster="./images/videobg.png">
			            <LoadingSpinner />
			            <HLSSource isVideoChild src={this.state.src}/>
			            <ControlBar>
					        <CurrentTimeDisplay order={4.1} />
					        <TimeDivider order={4.2} />
					        <VolumeMenuButton disabled />
					    </ControlBar>
			        </Player>
		    	}
		        <div className="video_info">
		        	<p>巴拉巴拉一堆介绍</p>
		        </div>

	        </div>
        );
    }
}

export default Video;
