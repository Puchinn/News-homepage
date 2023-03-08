function Article({ titulo, desc }) {
	return (
		<article>
			<h2 className='text-Off_white text-xl hover:text-Soft_Orange hover:cursor-pointer'>
				{titulo}
			</h2>
			<p className='text-Grayish_blue'>{desc}</p>
		</article>
	)
}

export default Article
