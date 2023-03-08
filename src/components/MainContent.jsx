import image from '../assets/images/image-web-3-desktop.jpg'

function MainContent() {
	return (
		<section>
			<img src={image} alt='web-3-image' />
			<div className='flex w-full'>
				<h1 className='text-6xl font-bold flex-1'>The Bright Future of Web 3.0?</h1>
				<div className='p-4 flex flex-col justify-between items-start flex-1'>
					<p>
						We dive into the next evolution of the web that claims to put the power of the
						platforms back into the hands of the people. But is it really fulfilling its
						promise?
					</p>
					<button className='py-2 px-7 text-white bg-Soft_Red hover:bg-Very_dark_blue'>
						<span className='tracking-[0.2rem] font-semibold'>READ MORE</span>
					</button>
				</div>
			</div>
		</section>
	)
}

export default MainContent
