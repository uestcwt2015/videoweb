import React from 'react';
import Video from '../Components/Video.js';
import Tag from '../Components/Tag.js';
import HistoryVideoList from '../Components/HistoryVideoList.js';

export default function App(props) {
    return(
        <div>
        	<Video />
        	<Tag />
        	<HistoryVideoList />
        </div>
    );
}
