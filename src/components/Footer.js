import React from 'react'

export const Footer = () => {
	return (
		<footer>
			<p>&copy; {new Date().getFullYear()} Colin Williams</p>
			<p>
				Icons by{' '}
				<a href='https://fontawesome.com/' target='_blank' rel='noreferrer'>
					Font Awesome
				</a>
			</p>
		</footer>
	)
}
