import { Badge } from './Badge'

export const BadgeArea = ({ recipient, reason, icon }) => {
	return (
		<div id='badge-area'>
			<h1>{recipient}</h1>
			<p>has earned</p>
			<Badge icon={icon} />
			<h2>"{reason}"</h2>
		</div>
	)
}

BadgeArea.defaultProps = {
	recipient: 'Your Friend',
	reason: 'This Really Cool Badge',
	icon: 'star',
}
