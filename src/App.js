import React from 'react';
import './App.css';
import RecentPics from './Components/RecentPics/RecentPics'
import SportsCategory from './Components/SportsCategory/SportsCategory'
import PictureDescription from './Components/Description/Description'
import Posts from './Components/Posts/Posts'
import RecentHockey from './Components/RecentHockey/RecentHockey'
import VideoDetails from './Components/VideoDetails/VideoDetails'
// import Categories from './Components/Categories/Categories';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from './Components/Categories/Categories';
function App() {
	return (
		<Router>
			<div className="App">
			<Categories></Categories>
				{
				<Switch>
					<Route path='/videoDetails' component={VideoDetails}></Route>
					<Route path='/popularHockeyVids' component={Posts}></Route>
					<Route path='/recentHockeyVids' component={RecentHockey}></Route>
					<Route path='/' exact component={Posts}></Route>
				</Switch> }
			</div>
		</Router >
	);
}
export default App;