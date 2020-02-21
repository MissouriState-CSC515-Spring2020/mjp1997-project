import React from 'react';
import './Description.css';
import BluesParade from './ComponentImages/blues_parade.jpg';

const PicDescription = () => {
	return (
		<div>
			<title>Image Description</title>
			<div className='row'>
				<div className='col s4'></div>
				<div className='col s4'>
				<h4>Picture Description</h4>
					<img src={BluesParade} className='imgStyle'></img>
				</div>
				<div className='col s4'></div>
			</div>
			<div className='center-align'> The Blues are cup champs! Pictured is the Blues roster celebrating with the Stanley Cup in front of thousands of St. Louisans!</div>
		</div>
	)
}
export default PicDescription;
