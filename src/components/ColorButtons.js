import { ColorButton } from './ColorButton'

export const ColorButtons = ({ colorCombos, onChangeColorCombo }) => {
	return (
		<>
			<label>Color</label>
			<br />
			{colorCombos.map((colorCombo, index) => (
				<ColorButton
					key={index}
					index={index}
					onChangeColorCombo={onChangeColorCombo}
				/>
			))}
		</>
	)
}
