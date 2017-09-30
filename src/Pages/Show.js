import React from 'react';
import Video from '../Components/Video.js';
import TagBox from '../Components/Tag.js';
import HistoryVideoList from '../Components/HistoryVideoList.js';

export default function Show(props) {
    return(
        <div>
        	<header className="page_header">啦啦啦这里是Header</header>
        	<Video src={props.location.state.src}/>
        	<TagBox name="相关标签"/>
        	<HistoryVideoList name="相关视频"/>
        	<footer className="page_footer">©StarStudio</footer>
        </div>
    );
}