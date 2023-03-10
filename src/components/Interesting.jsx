import items from '../data/items'
import Item from './Item'

function Interesting() {
	return (
		<section className='space-y-6 lg:space-y-0 xl:py-4 py-10 gap-3 xl:gap-x-7 xl:grid-cols-12 lg:grid grid-cols-8'>
			{items.map(item => {
				return (
					<Item
						key={item.id}
						image={item.image}
						id={item.id}
						title={item.title}
						desc={item.desc}
					/>
				)
			})}
		</section>
	)
}

export default Interesting
