import React from 'react';
import './SportsCategory.css';
import BluesParade from './ComponentImages/blues_parade.jpg';
import BluesCup from './ComponentImages/blues_cup.jpg';
import Molina from './ComponentImages/molina.jpg'
import Adrian from './ComponentImages/nathan_adrian_ol.jpg'
import StanleyCup from './ComponentImages/stanley_cupp.jpg'
import Illini from './ComponentImages/illini.jpg'
import BattleHawks from './ComponentImages/bhawkss.jpg'
import Tarasenko from './ComponentImages/tarasenk.jpg'
import Pietrangelo from './ComponentImages/pietrangelo.jpg'
import Perron from './ComponentImages/perro.jpg'
import Steen from './ComponentImages/alex_steen.jpg'
import Celebration from './ComponentImages/blues_cup_champs.jpg'
import Bortz from './ComponentImages/bortz.jpg'
import Thomas from './ComponentImages/rob_thomas.jpg'
import Oreilly from './ComponentImages/oreilly.jpg'
import Schwartz from './ComponentImages/schwartz.jpg'
import Parayko from './ComponentImages/parayko.jpg'
import { Link } from 'react-router-dom';

const SportsCategory = (props) => {
	return (
		<div>
			<div className="row">
				<h4 className='categoryHead'>
					Mitch's Sports Pics
				</h4>
				<div className="col s2">
					<a href='/layouts/picInfo.html'><img src={BluesCup} className='imgStyle' alt='Blues Parade'></img></a>
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
				<div className="col s2">
					<Link to='/pictureDescription'>
						<img src={StanleyCup} className='imgStyle' alt='Blues Cup Win'></img>
					</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={Illini} className='imgStyle' alt='RS Void'></img>
				</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={BattleHawks} className='imgStyle' alt='Healthy Food'></img>
				</Link>
				</div>
			</div>
			<div className="row">
				<div className="col s2">
					<Link to='/pictureDescription'>
						<img src={Tarasenko} className='imgStyle' alt='Blues Parade'></img>
					</Link>
				</div>
				<div className="col s2">
					<Link to='/pictureDescription'>
						<img src={Pietrangelo} className='imgStyle' alt='Blues Cup Win'></img>
					</Link>
				</div>
				<div className="col s2">
					<Link to='/pictureDescription'>
						<img src={Perron} className='imgStyle' alt='RS Void'></img>
					</Link>
				</div>
				<div className="col s2">
					<Link to='/pictureDescription'>
						<img src={Steen} className='imgStyle' alt='Healthy Food'></img>
					</Link>
				</div>
				<div className="col s2">
					<Link to='/pictureDescription'>
						<img src={Celebration} className='imgStyle' alt='Yadi Molina'></img>
					</Link>
				</div>
				<div className="col s2">
					<Link to='/pictureDescription'>
						<img src={BluesParade} className='imgStyle' alt='Yadi Molina'></img>
					</Link>
				</div>
			</div>
			<div className='row'>
				<div className='col s2'>
					<Link to='/pictureDescription'>
						<img src={Bortz} className='imgStyle' alt='Bortuzzo'></img>
					</Link>
				</div>
				<div className='col s2'>
					<Link to='/pictureDescription'>
						<img src={Thomas} className='imgStyle' alt='Thomas'></img>
					</Link>
				</div>
				<div className='col s2'>
					<Link to='/pictureDescription'>
						<img src={Oreilly} className='imgStyle' alt='OReilly'></img>
					</Link>
				</div>
				<div className='col s2'>
					<Link to='/pictureDescription'>
						<img src={Schwartz} className='imgStyle' alt='Schwartz'></img>
					</Link>
				</div>
				<div className='col s2'>
					<Link to='/pictureDescription'>
						<img src={Parayko} className='imgStyle' alt='Parayko'></img>
					</Link>
				</div>
				<div className='col s2'>
					<Link to='/pictureDescription'>
						<img src={Thomas} className='imgStyle' alt='Thomas'></img>
					</Link>
				</div>
			</div>
		</div>
	)
};

export default SportsCategory;
