import React, {Component} from 'react';
import '../css/video_list.css';

class HistoryVideoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [
				{
					status: '巴拉巴拉巴拉巴拉',
					wathedNum: '233',
					img: 'http://cdn.starstudio.org/static/joker/default/default_avatar.jpeg',
					src: ''
				},
				{
					status: '哔哩哔哩哔哩哔哩',
					wathedNum: '2333',
					img: 'http://cdn.starstudio.org/static/joker/default/default_avatar.jpeg',
					src: ''
				},
				{
					status: '嘿哈嘿哈嘿哈嘿哈',
					wathedNum: '2233',
					img: 'http://cdn.starstudio.org/static/joker/default/default_avatar.jpeg',
					src: ''
				},
				{
					status: '啊哈啊哈啊哈啊哈',
					wathedNum: '223',
					img: 'http://cdn.starstudio.org/static/joker/default/default_avatar.jpeg',
					src: ''
				}
			]
		}
	}

	componentDidMount() {
		//fetch API
	}

	render() {
		return (
			<ul className="history_video_list">
				{
					this.state.items.map((e, i) => {
						return (
							<li className="history_video_list_item" key={i}>
								<img alt="img" className="history_video_list_img" src={e.img} />
								<p className="history_video_list_text">{e.status}</p>
								<span className="history_video_list_watchNum">{e.wathedNum}</span>
							</li>
						)
					})
				}
			</ul>
		);
	}
}

export default HistoryVideoList;