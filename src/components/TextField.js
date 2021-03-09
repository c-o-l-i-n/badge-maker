export const TextField = ({ name }) => {
	const nameCapitalized = capitalize(name)
	return (
		<>
			<label htmlFor={name}>{nameCapitalized}</label>
			<input
				id={`${name}-field`}
				type='text'
				name={name}
				placeholder={`Badge ${nameCapitalized}`}
			/>
		</>
	)
}

const capitalize = (string) => {
	const words = string.split(' ')
	const capitalizedWords = words.map(
		(word) => word[0].toUpperCase() + word.substr(1)
	)
	return capitalizedWords.join(' ')
}

TextField.defaultProps = {
	name: 'Text Field',
}
