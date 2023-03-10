import Nav from './components/Nav'
import MainContent from './components/MainContent'
import NewsContent from './components/NewsContent'
import Interesting from './components/Interesting'
import Footer from './components/Footer'

function App() {
	return (
		<div className='App bg-Off_white p-5 lg:p-[5.1rem]'>
			<div className='max-w-6xl lg:mx-auto xl:space-y-9 font-Inter'>
				<Nav />
				<main className='grid grid-cols-1 xl:grid-cols-12 xl:gap-x-8 py-4'>
					<div className='col-span-8'>
						<MainContent />
					</div>
					<div className='col-span-4 mt-16 xl:mt-0'>
						<NewsContent />
					</div>
				</main>
				<Interesting />
			</div>
			<Footer />
		</div>
	)
}

export default App
