import { NavLink } from 'react-router-dom'
import { useState } from 'react'

//SVG
import { ReactComponent as Logo } from '../assets/icons/full-logo.svg'
import { ReactComponent as Home } from '../assets/icons/home.svg'
import { ReactComponent as Search } from '../assets/icons/search.svg'
import { ReactComponent as Libraray } from '../assets/icons/library.svg'
import { ReactComponent as Plus } from '../assets/icons/plus.svg'
import { ReactComponent as Heart } from '../assets/icons/heart.svg'

export function MainNav() {
	const [navWidth, setNavWidth] = useState(200)

	const changeNavWidth = (ev) => {
		// console.log(ev.target.value)
		setNavWidth(ev.target.value)
		// console.log(navWidth)
	}
	// style={{ width: `${navWidth}px` }}
	return (
		<nav className="main-nav flex" style={{ width: `${navWidth}px` }}>
			<div className="main-nav-container flex">
				{/*  */}

				<div className="logo">
					<NavLink to="/">
						<Logo />
					</NavLink>
				</div>
				<ul className="nav-main-list clean-list">
					<li>
						<NavLink to="/" className="flex">
							<Home className="link-icon" />
							<span>home</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/" className="flex">
							<Search className="link-icon" />
							<span>search</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/" className="flex">
							<Libraray className="link-icon" />
							<span>your library</span>
						</NavLink>
					</li>
				</ul>

				<div className="second-nav-container flex">
					<div className="create-playlist">
						<NavLink to="/" className="flex">
							<div className="plus container flex flex-center">
								<Plus className="link-icon" />
							</div>
							<span>Create Playlist</span>
						</NavLink>
					</div>
					<div className="liked-songs">
						<NavLink to="/" className="flex">
							<div className="heart container flex flex-center">
								<Heart className="link-icon" />
							</div>
							<span>Liked Songs</span>
						</NavLink>
					</div>

					<div className="space-conainer">
						<hr />
					</div>

					<div className="playlist-list">
						<ul className="clean-list">
							<li className="playlist-item">
								<NavLink to="/">My Playlist #1</NavLink>
							</li>
							<li className="playlist-item">
								<NavLink to="/">My Playlist #2</NavLink>
							</li>
						</ul>
					</div>
				</div>

				{/*  */}
			</div>

			<div className="layout-resizer">
				<label className="layout-resize">
					resize main navigation
					{navWidth}
					<input
						type="range"
						min="120"
						max="384"
						step="10"
						value={navWidth}
						onChange={changeNavWidth}
					/>
				</label>
			</div>
		</nav>
	)
}
