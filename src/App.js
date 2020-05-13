import React, {Suspense, lazy} from 'react';
import './App.css';
import RecentPics from './Components/RecentPics/RecentPics'
import SportsCategory from './Components/SportsCategory/SportsCategory'
import PictureDescription from './Components/Description/Description'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from './Components/Categories/Categories';
// import Posts from './Components/Posts/Posts'
// import RecentHockey from './Components/RecentHockey/RecentHockey'
// import VideoDetails from './Components/VideoDetails/VideoDetails'
// import Categories from './Components/Categories/Categories';
const Posts = lazy(() => import('./Components/Posts/Posts'));
const VideoDetails = lazy(() => import('./Components/VideoDetails/VideoDetails'));
const RecentHockey = lazy(() => import('./Components/RecentHockey/RecentHockey'));

function App() {
	return (
		<Router>
			<Categories></Categories>
			<Suspense fallback ={<div>Loading..</div>}>
			<div className="App">				{
				<Switch>
					<Route path='/videoDetails' component={VideoDetails}></Route>
					<Route path='/popularHockeyVids' component={Posts}></Route>
					<Route path='/recentHockeyVids' component={RecentHockey}></Route>
					<Route path='/' exact component={Posts}></Route>
				</Switch> }
			</div>
			</Suspense>
		</Router >
	);
}
export default App;