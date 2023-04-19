import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

//CMPS
import { TopBar } from './cmps/TopBar'
import { MainNav } from './cmps/MainNav'
import { PlayingBar } from './cmps/PlayingBar'

function App() {
	return (
		<Router>
			<div className="App">
				<div className="main-app">
					<TopBar />
					<MainNav />
					<PlayingBar />
					<div className="main-root"> main root</div>
				</div>
			</div>
		</Router>
	)
}

export default App
