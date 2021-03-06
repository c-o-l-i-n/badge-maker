import { useState, useEffect } from 'react'
import './App.css'
import { BadgeForm } from './components/BadgeForm'
import { BadgeArea } from './components/BadgeArea'
import { Footer } from './components/Footer'

const App = () => {
	const root = document.documentElement

	const colorCombos = [
		{
			foreground: 'yellowgreen',
			background: 'blue',
		},
		{
			foreground: 'red',
			background: 'yellow',
		},
		{
			foreground: 'black',
			background: 'white',
		},
		{
			foreground: 'white',
			background: 'purple',
		},
	]

	const [recipient, setRecipient] = useState('Your Friend')
	const [reason, setReason] = useState('This Really Cool Badge')
	const [icon, setIcon] = useState('star')

	const onChangeColorCombo = (colorComboIndex) => {
		const colorCombo = colorCombos[colorComboIndex]
		root.style.setProperty('--badge-foreground-color', colorCombo.foreground)
		root.style.setProperty('--badge-background-color', colorCombo.background)
	}

	useEffect(() => {
		onChangeColorCombo(0)
	})

	return (
		<>
			<h1>Badge Maker</h1>
			<BadgeForm
				colorCombos={colorCombos}
				onChangeRecipient={setRecipient}
				onChangeReason={setReason}
				onChangeIcon={setIcon}
				onChangeColorCombo={onChangeColorCombo}
			/>
			<BadgeArea recipient={recipient} reason={reason} icon={icon} />
			<Footer />
		</>
	)
}

export default App
