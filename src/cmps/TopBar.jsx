import React, { Component } from 'react'

import { ReactComponent as RigthArrow } from '../assets/icons/right-arrow.svg'
import { ReactComponent as LeftArrow } from '../assets/icons/left-arrow.svg'
import { ReactComponent as DownArrow } from '../assets/icons/down-arrow.svg'
import { ReactComponent as User } from '../assets/icons/user.svg'

export class TopBar extends Component {
	render() {
		return (
			<div className="top-bar">
				<header className="top-bar-menu flex">
					<div className="navigate-btns flex">
						<button className="btn back-btn" title="Go back">
							<LeftArrow />
						</button>
						<button className="btn forward-btn" title="Go forward">
							<RigthArrow />
						</button>
					</div>
					<button className="user-manu-container flex flex-center">
						<div className="user-svg-container flex flex-center">
							<User className="user-svg" />
						</div>
						<span className="username">Lior</span>
						<DownArrow className="arrow down" />
					</button>
				</header>
			</div>
		)
	}
}
