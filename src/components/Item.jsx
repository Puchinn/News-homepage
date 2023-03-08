function Item({ image, id, title, desc }) {
	return (
		<div className='flex col-span-4'>
			<img src={image} width={110} height={90} alt={title} />
			<div className='px-5'>
				<span className='text-3xl text-Grayish_blue font-bold'>{id}</span>
				<h2 className='text-Very_dark_blue font-bold hover:cursor-pointer hover:text-Soft_Red'>
					{title}
				</h2>
				<p className='text-Dark_grayish_blue'>{desc}</p>
			</div>
		</div>
	)
}

export default Item
