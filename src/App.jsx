import { TopBar } from './cmps/TopBar'
import { MainNav } from './cmps/MainNav'
import { PlayingBar } from './cmps/PlayingBar'
function App() {
	return (
		<div className="App">
			<div className="main-app">
				<TopBar />
				<MainNav />
				<PlayingBar />
				<div className="main-root"> main root</div>
			</div>
		</div>
	)
}

export default App
