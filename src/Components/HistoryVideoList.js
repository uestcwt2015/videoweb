import React, {Component} from 'react';
import '../css/video_list.css';
import {withRouter} from 'react-router';

class HistoryVideoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [
				{
					text: '成电校友捐建母校价值3亿元楼宇效果视频',
					watchedNum: '233',
					img: 'http://www.video.uestc.edu.cn/upload/processimgsmall/2017/9/e4da3b7fbbce2345d7772b0674a318d51506603553.jpg',
					src: '//living.stuhome.com/szw/mine.m3u8',
				},
				{
					text: '【视频】梦想自定义—电子科大2017招生宣传微电影',
					watchedNum: '2333',
					img: 'http://www.video.uestc.edu.cn/upload/processimgsmall/2017/6/1216cced15c00a63be58607787cf95381497511484.jpg',
					src: '//living.stuhome.com/szw/mine.m3u8',
				},
				{
					text: '带一本书来成电—图书馆馆长李泰峰',
					watchedNum: '2233',
					img: 'http://www.video.uestc.edu.cn/upload/processimgsmall/2017/6/8e1d7c642b637a6bd0bf893079aa25b01497837219.jpg',
					src: '//living.stuhome.com/szw/mine.m3u8',
				},
				{
					text: '格拉斯哥学院首届毕业典礼宣传片',
					watchedNum: '223',
					img: 'http://www.video.uestc.edu.cn/upload/processimgsmall/2017/6/cc8b3684e8dd51bce41398bc56e020d01498708622.jpg',
					src: '//living.stuhome.com/szw/mine.m3u8',
				},
				{
					text: '成电校友捐建母校价值3亿元楼宇效果视频',
					watchedNum: '233',
					img: 'http://www.video.uestc.edu.cn/upload/processimgsmall/2017/9/e4da3b7fbbce2345d7772b0674a318d51506603553.jpg',
					src: '//living.stuhome.com/szw/mine.m3u8',
				},
				{
					text: '【视频】梦想自定义—电子科大2017招生宣传微电影',
					watchedNum: '2333',
					img: 'http://www.video.uestc.edu.cn/upload/processimgsmall/2017/6/1216cced15c00a63be58607787cf95381497511484.jpg',
					src: '//living.stuhome.com/szw/mine.m3u8',
				},
				{
					text: '带一本书来成电—图书馆馆长李泰峰',
					watchedNum: '2233',
					img: 'http://www.video.uestc.edu.cn/upload/processimgsmall/2017/6/8e1d7c642b637a6bd0bf893079aa25b01497837219.jpg',
					src: '//living.stuhome.com/szw/mine.m3u8',
				},
				{
					text: '格拉斯哥学院首届毕业典礼宣传片',
					watchedNum: '223',
					img: 'http://www.video.uestc.edu.cn/upload/processimgsmall/2017/6/cc8b3684e8dd51bce41398bc56e020d01498708622.jpg',
					src: '//living.stuhome.com/szw/mine.m3u8',
				},
			]
		}

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		//fetch API

	}

	handleClick(e) {
		let dataSrc = e.target.getAttribute('data-href') || e.target.parentNode.getAttribute('data-href');
		console.log(dataSrc);
		this.props.router.push({
			pathname: 'show/1',
			state: {src: dataSrc}}
		);
	}

	render() {
		return (
			<div>
				{
					this.props.location.state ? <header className="list_header">这里是背景</header> : ''
				}
				<ul className="history_video_list">
					<span className="list_name">{this.props.name}</span> 
					{
						this.state.items.map((e, i) => {
							return (
								<li className="history_video_list_item" key={i} onClick={this.handleClick} data-href={e.src}>
									<img alt="img" className="history_video_list_img" src={e.img} />
									<p className="history_video_list_text">{e.text}</p>
									<span className="history_video_list_watchNum">{e.watchedNum}</span>
								</li>
							)
						})
					}
				</ul>
			</div>
		);
	}
}

export default withRouter(HistoryVideoList);