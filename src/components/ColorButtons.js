import { ColorButton } from './ColorButton'

export const ColorButtons = ({ colorCombos }) => {
	return (
		<>
			<label>Color</label>
			<br />
			{colorCombos.map((colorCombo, index) => (
				<ColorButton
					text={index + 1}
					foreground={colorCombo.foreground}
					background={colorCombo.background}
				/>
			))}
		</>
	)
}
