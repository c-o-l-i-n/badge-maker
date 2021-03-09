export const ColorButton = ({ index, onChangeColorCombo }) => {
	return (
		<button
			onClick={() => {
				onChangeColorCombo(index)
			}}
		>
			{index + 1}
		</button>
	)
}
