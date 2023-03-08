import items from '../data/items'
import Item from './Item'

function Interesting() {
	return (
		<section className='col-span-12 gap-x-7 grid grid-cols-12'>
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
