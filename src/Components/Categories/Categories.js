import React from 'react';
import './Categories.css';
import FoodCategory from './ComponentImages/foodMPCategory.jpg';
import GamingCategory from './ComponentImages/gamingCategory.jpg'
import SportsCategory from './ComponentImages/sportsCategory.jpg'
import { Link } from 'react-router-dom';
const Categories = (props) => {
	return (
		<div>
			<title>Sports Category</title>
			<nav>
				<div className='row'>
					<div className='col s4'>
						<Link to='/popularHockeyVids'>
							<div>Popular Hockey</div>
						</Link>
					</div>
					<div className='col s4'>
						<Link to='/recentHockeyVids'>
							<div>New Hockey Videos</div>
						</Link>
					</div>
					<div className='col s4'>
						<Link to='/videoDetails'>
							<div>Video Details</div>
						</Link>
					</div>
				</div>
			</nav>
		</div >
	)
}
export default Categories