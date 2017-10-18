import React, {Component} from 'react';
import Carousels from './Shows/Carousels';

class CarouselContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notice: []
		}
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<Carousels notices={this.state.notices} />
		)
	}
}