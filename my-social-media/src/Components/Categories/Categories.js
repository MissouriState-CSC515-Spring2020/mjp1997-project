import React from 'react';
import './Categories.css';
import FoodCategory from './ComponentImages/foodMPCategory.jpg';
import GamingCategory from './ComponentImages/gamingCategory.jpg'
import SportsCategory from './ComponentImages/sportsCategory.jpg'
import { Link } from 'react-router-dom';
const Categories = (props) => {
	return (
		<div>
			<nav>
				<div className='row'>
					<div className='col s4'>
						<Link to='/sportscategory'>
							<div>Food</div>
						</Link>
					</div>
					<div className='col s4'>
						<Link to='/sportscategory'>
							<div>Gaming</div>
						</Link>
					</div>
					<div className='col s4'>
						<Link to='/sportscategory'>
							<div>Sports</div>
						</Link>
					</div>
				</div>
			</nav>
		</div >
	)
}
export default Categories