import React from 'react';
import './App.css';
import RecentPics from './Components/RecentPics/RecentPics'
import SportsCategory from './Components/SportsCategory/SportsCategory'
import PictureDescription from './Components/Description/Description'
// import Categories from './Components/Categories/Categories';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from './Components/Categories/Categories';
function App() {
	return (
		<Router>
			<div className="App">
				<Categories></Categories>
				<Switch>
					<Route path='/sportscategory' component={SportsCategory}></Route>
					<Route path='/home' component={RecentPics}></Route>
					<Route path='/pictureDescription' component={PictureDescription}></Route>
					<Route path='/' exact component={RecentPics}></Route>
				</Switch>
			</div>
		</Router >
	);
}
export default App;