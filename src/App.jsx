import Nav from './components/Nav'
import MainContent from './components/MainContent'
import NewsContent from './components/NewsContent'
import Interesting from './components/Interesting'

function App() {
	return (
		<div className='App max-w-7xl mx-auto space-y-7'>
			<Nav />
			<div className='grid grid-cols-12 gap-x-7'>
				<div className='col-span-8'>
					<MainContent />
				</div>
				<div className='col-span-4'>
					<NewsContent />
				</div>
				<Interesting />
			</div>
		</div>
	)
}

export default App
