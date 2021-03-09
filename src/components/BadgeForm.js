import { TextField } from './TextField'
import { ColorButtons } from './ColorButtons'

export const BadgeForm = ({ textFields, colorCombos }) => {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
			}}
		>
			{textFields.map((textField) => (
				<TextField name={textField} />
			))}
			<ColorButtons colorCombos={colorCombos} />
		</form>
	)
}
