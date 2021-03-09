import { TextField } from './TextField'
import { ColorButtons } from './ColorButtons'

export const BadgeForm = ({
	colorCombos,
	onChangeRecipient,
	onChangeReason,
	onChangeIcon,
	onChangeColorCombo,
}) => {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
			}}
		>
			<TextField name='recipient' onType={onChangeRecipient} />
			<TextField name='reason' onType={onChangeReason} />
			<TextField name='icon' onType={onChangeIcon} />

			<ColorButtons
				colorCombos={colorCombos}
				onChangeColorCombo={onChangeColorCombo}
			/>
		</form>
	)
}
