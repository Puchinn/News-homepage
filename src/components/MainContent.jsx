import image from '../assets/images/image-web-3-desktop.jpg'

function MainContent() {
	return (
		<section>
			<img src={image} alt='web-3-image' />
			<div className='flex'>
				<h1 className='text-6xl font-bold'>The Bright Future of Web 3.0?</h1>
				<div className='p-4 flex flex-col justify-between items-start'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore dignissimos
						doloremque incidunt enim tempore eius iste aperiam voluptatum et dicta
						laudantium perspiciatis doloribus, voluptas eligendi porro rem voluptate dolorem
						nemo minus numquam ullam ipsum adipisci magnam fugiat. Non, pariatur delectus!
					</p>
					<button className='py-2 px-7 text-white bg-Soft_Red'>
						<span className='tracking-[0.2rem] font-semibold'>READ MORE</span>
					</button>
				</div>
			</div>
		</section>
	)
}

export default MainContent
