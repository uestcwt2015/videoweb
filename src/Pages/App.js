import React from 'react';
import Video from '../Components/Video.js';
import TagBox from '../Components/Tag.js';
import HistoryVideoList from '../Components/HistoryVideoList.js';

export default function App(props) {
    return(
        <div>
        	<header className="page_header">啦啦啦这里是Header</header>
        	<Video />
        	<TagBox name="标签筛选"/>
        	<HistoryVideoList name="推荐视频"/>
        	<footer className="page_footer">©StarStudio</footer>
        </div>
    );
}
