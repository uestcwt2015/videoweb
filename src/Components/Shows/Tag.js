import React, {Component} from 'react';
import {Tag, Icon} from 'antd';
import '../css/tag.css';
import {withRouter} from 'react-router';

class TagBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: ["校庆", "电子科技大学", "网监办", "招生宣传", "校园"],
			isShow: false
		}

		this.showTag = this.showTag.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}


	componentDidMount() {
		//fetch API
	}

	handleClick(e) {
		this.props.router.push({
			pathname: '/list/' + e.target.innerText,
			state: {
				tag: e.target.innerText
			}
		})
	}

	showTag() {
		let container = this.refs.container;

		this.setState({
			isShow: !this.state.isShow
		})

		let style = this.state.isShow ? '3rem' : 'auto';
		container.style.height = style;
	}

	render() {
		let colors = ["pink", "red", "orange", "green", "cyan", "blue", "purple"];

		return (
			<div className="tag_container" ref="container">
				<span className="tag_name">{this.props.name}</span> 
				<Icon type={this.state.isShow ? "up" : "down"} className="show_button" onClick={this.showTag} />
				{
					this.state.name.map((e, i) => (
						<Tag key={i} color={colors[i%7]} onClick={this.handleClick}>{this.state.name[i]}</Tag>
					))
				}
			</div>
		);
	}
}

export default withRouter(TagBox);