function MainContent() {
	return (
		<section>
			<img
				src='../../public/images/image-web-3-desktop.jpg'
				className='object-cover w-full'
				alt='web-3-image'
			/>
			<div className='md:flex pt-6'>
				<h1 className='text-4xl md:text-6xl pb-3 font-bold flex-1 text-Very_dark_blue'>
					The Bright Future of Web 3.0?
				</h1>
				<div className='md:px-4  space-y-5 md:space-y-10 flex-1'>
					<p className='text-Dark_grayish_blue'>
						We dive into the next evolution of the web that claims to put the power of the
						platforms back into the hands of the people. But is it really fulfilling its
						promise?
					</p>
					<button className='py-3 px-7 text-white bg-Soft_Red hover:bg-Very_dark_blue'>
						<span className='tracking-[0.2rem] font-semibold'>READ MORE</span>
					</button>
				</div>
			</div>
		</section>
	)
}

export default MainContent
