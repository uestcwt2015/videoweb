import React from 'react';
import {Carousel} from 'antd';

export default function Carousels(props) {
	return (
		<Carousel autoplay={props.notice.length > 1 ? true : false} autoplaySpeed={5000} className="carousel" >
			{
				props.notice.map((e, i) => {
					return (
						<img key={i} data-href={e.url} src={e.image} alt={e.alt} className="carousel_image" onClick={this.handleClick}/>
					)
			 	})
			}
		</Carousel>
	)
}


