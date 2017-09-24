import React, {Component} from 'react';
import {Link} from 'react-router';
import '../css/tag.css';

class Tag extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: ["美少女", "cosplay", "绝对领域", "宅舞", "ACG", "美少女", "cosplay", "绝对领域", "宅舞", "ACG"],
			isShow: false
		}

		this.showTag = this.showTag.bind(this);
	}


	componentDidMount() {
		//fetch API
	}

	showTag() {
		let container = this.refs.container;

		this.setState({
			isShow: !this.state.isShow
		})

		let style = this.state.isShow ? '1.8rem' : 'auto';
		container.style.height = style;
	}

	render() {
		return (
			<div className="tag_container" ref="container">
				<span className="show_button" onClick={this.showTag}>{this.state.isShow ? "收起" : "展开更多"}</span>
				{
					this.state.name.map((e, i) => (
						<Link key={i} className="tag_item">{e}</Link> 
					))
				}
			</div>
		);
	}
}

export default Tag;