import React from 'react';
import './RecentPics.css';
import BluesParade from './ComponentImages/blues_parade.jpg';
import BluesCup from './ComponentImages/blues_cup.jpg';
import RuneScapeVoid from './ComponentImages/runescape_void.jpg'
import Healthy from './ComponentImages/healthy.jpg'
import Molina from './ComponentImages/molina.jpg'
import Adrian from './ComponentImages/nathan_adrian_ol.jpg'
import Chipotle from './ComponentImages/chipotle.jpg'
import StanleyCup from './ComponentImages/stanley_cupp.jpg'
import MW2 from './ComponentImages/mw2.jpg'
import Illini from './ComponentImages/illini.jpg'
import Roost from './ComponentImages/roostspf.jpg'
import FoodCategory from './ComponentImages/foodMPCategory.jpg';
import GamingCategory from './ComponentImages/gamingCategory.jpg'
import SportsCategory from './ComponentImages/sportsCategory.jpg'
import { Link } from 'react-router-dom';
const RecentPics = (props) => {
	return (
		<div>
			<h2 className='center-align'>Welcome to Mitch's Social Media Hub!
		<i className="material-icons" id='iconSize'>share</i>
			</h2>
			<div className="row">
				<h4 className='categoryHead'>
					______'s Recent Videos
				</h4>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={BluesParade} className='imgStyle' alt='Blues Parade'></img>
				</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={BluesCup} className='imgStyle' alt='Blues Cup Win'></img>
				</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={RuneScapeVoid} className='imgStyle' alt='RS Void'></img>
				</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={Healthy} className='imgStyle' alt='Healthy Food'></img>
				</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={Molina} className='imgStyle' alt='Yadi Molina'></img>
				</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={Adrian} className='imgStyle' alt='Yadi Molina'></img>
				</Link>
				</div>
			</div>
			<div className="row">
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={Chipotle} className='imgStyle' alt='Blues Parade'></img>
				</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={StanleyCup} className='imgStyle' alt='Blues Cup Win'></img>
				</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={MW2} className='imgStyle' alt='RS Void'></img>
				</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={Illini} className='imgStyle' alt='Healthy Food'></img>
				</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={Roost} className='imgStyle' alt='Yadi Molina'></img>
				</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={Adrian} className='imgStyle' alt='Yadi Molina'></img>
				</Link>
				</div>
			</div>
		</div >
	)
};

export default RecentPics;
