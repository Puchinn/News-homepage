function NewsContent() {
	return (
		<section className='p-5 bg-Very_dark_blue h-full flex flex-col justify-around'>
			<h1 className='text-4xl font-semibold text-Soft_Orange'>New</h1>
			<article className='space-y-2 py-4 pb-8 border-b'>
				<h2 className='text-Off_white font-bold text-xl hover:text-Soft_Orange hover:cursor-pointer'>
					Hydrogen VS Electric Cars
				</h2>
				<p className='text-Grayish_blue'>
					Will hydrogen-fueled cars ever catch up to EVs?
				</p>
			</article>
			<article className='space-y-2 py-4 pb-8 border-b'>
				<h2 className='text-Off_white font-bold text-xl hover:text-Soft_Orange hover:cursor-pointer'>
					The Downsides of AI Artistry
				</h2>
				<p className='text-Grayish_blue'>
					What are the possible adverse effects of on-demand AI image generation?
				</p>
			</article>
			<article className='space-y-2 py-4'>
				<h2 className='text-Off_white font-bold text-xl hover:text-Soft_Orange hover:cursor-pointer'>
					Is VC Funding Drying Up?
				</h2>
				<p className='text-Grayish_blue'>
					Private funding by VC firms is down 50% YOY. We take a look at what that means.
				</p>
			</article>
		</section>
	)
}

export default NewsContent
