import React, { Component } from 'react'

export class PlayingBar extends Component {
	render() {
		return (
			<div className="playing-bar">
				<footer className="playing-bar-container">
					playlist bar
					<div className="song-details"></div>
					<div className="audio-track"></div>
					<div className="audio-settings"></div>
				</footer>
			</div>
		)
	}
}
