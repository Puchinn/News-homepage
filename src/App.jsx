import Nav from './components/Nav'
import MainContent from './components/MainContent'
import NewsContent from './components/NewsContent'
import Interesting from './components/Interesting'
import Footer from './components/Footer'

function App() {
	return (
		<div className='App bg-Off_white p-4 flex 2xl:h-screen items-center justify-center'>
			<div>
				<div className='max-w-5xl lg:mx-auto xl:space-y-7 font-Inter'>
					<Nav />
					<div className='grid grid-cols-1 xl:grid-cols-12 xl:gap-x-7 py-4'>
						<div className='col-span-8'>
							<MainContent />
						</div>
						<div className='col-span-4 mt-16 xl:mt-0'>
							<NewsContent />
						</div>
					</div>
					<Interesting />
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default App
