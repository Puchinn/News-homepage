import Article from './Article'
import news from '../data/news'

function NewsContent() {
	return (
		<section className='p-5 bg-Very_dark_blue'>
			<h1 className='text-4xl font-semibold text-Soft_Orange'>New</h1>
			{news.map(item => {
				return <Article key={item.title} titulo={item.title} desc={item.desc} />
			})}
		</section>
	)
}

export default NewsContent
