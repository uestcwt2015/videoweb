import React from 'react';
import HistoryVideoList from '../Components/HistoryVideoList.js';

export default function List(props) {
    return(
        <div>
        	<header className="page_header">啦啦啦这里是Header</header>
        	<HistoryVideoList name="视频列表"/>
        	<footer className="page_footer">©StarStudio</footer>
        </div>
    );
}