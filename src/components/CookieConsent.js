import React, {Component} from 'react'
import classNames from 'classnames';

// Components
import Container from './Container'

class CookieConsent extends Component {
	render() {
		return (
			<div className={classNames('cookie-consent', {'cookie-consent--accepted': ''})}>
				<Container>
					<p className="cookie-consent__text">We use cookies to help deliver the best experience possible.</p>
					<button className="cookie-consent__accept">Accept</button>
				</Container>
			</div>
		)
	}
}

export default CookieConsent