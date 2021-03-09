export const Badge = ({ icon }) => {
	return (
		<div className='fa-stack fa-4x badge'>
			<i className='fa fa-circle fa-stack-2x badge-background'></i>
			<i className='fa fa-circle-o fa-stack-2x badge-foreground'></i>
			<i
				id='icon'
				className={`fas fa-${icon || 'star'} fa-stack-1x badge-foreground`}
			></i>
		</div>
	)
}
