import './App.css'
import { BadgeForm } from './components/BadgeForm'

const textFields = ['recipient', 'reason', 'icon']
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

function App() {
	return (
		<>
			<h1>Badge Maker</h1>
			<BadgeForm textFields={textFields} colorCombos={colorCombos} />
		</>
	)
}

export default App
