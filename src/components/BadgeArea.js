import { Badge } from './Badge'

export const BadgeArea = ({ recipient, reason, icon }) => {
	return (
		<div id='badge-area'>
			<h1>{recipient}</h1>
			<p>has recieved</p>
			<Badge icon={icon} />
			<h2 className='caplitalized'>"{reason}"</h2>
		</div>
	)
}

BadgeArea.defaultProps = {
	recipient: 'Colin',
	reason: 'created a react app',
	icon: 'star',
}
