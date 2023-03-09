import Nav from './components/Nav'
import MainContent from './components/MainContent'
import NewsContent from './components/NewsContent'
import Interesting from './components/Interesting'

function App() {
	return (
		<div className='App bg-Off_white py-3'>
			<div className='max-w-5xl mx-auto space-y-10 font-inter'>
				<Nav />
				<div className='grid grid-cols-12 gap-x-7 py-4'>
					<div className='col-span-8'>
						<MainContent />
					</div>
					<div className='col-span-4'>
						<NewsContent />
					</div>
				</div>
				<Interesting />
			</div>
		</div>
	)
}

export default App
