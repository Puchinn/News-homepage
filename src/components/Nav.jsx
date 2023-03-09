import ButtonMenu from './ButtonMenu'
import { useState } from 'react'

function Nav() {
	const [isActive, setIsActive] = useState(false)

	return (
		<header className='flex flex-col justify-between max-w-7xl mx-auto md:items-end'>
			<div className='flex justify-between'>
				<h1 className='text-5xl font-bold text-Very_dark_blue'>W.</h1>
				<ButtonMenu isActive={isActive} setIsActive={setIsActive} />
			</div>

			{isActive && (
				<div className='fixed left-0 w-screen h-screen top-0 grid grid-cols-5 bg-Very_dark_blue bg-opacity-50'>
					<div className='col-span-2'></div>
					<div className='flex flex-col text-Very_dark_blue col-span-3 gap-y-3 pl-3 bg-Off_white py-32 [&_>a:hover]:text-Soft_Red'>
						<a href='#'>Home</a>
						<a href='#'>New</a>
						<a href='#'>Popular</a>
						<a href='#'>Trending</a>
						<a href='#'>Categories</a>
					</div>
				</div>
			)}
			<nav className='space-x-6 hidden text-Dark_grayish_blue [&_>a:hover]:text-Soft_Red'>
				<a href='#'>Home</a>
				<a href='#'>New</a>
				<a href='#'>Popular</a>
				<a href='#'>Trending</a>
				<a href='#'>Categories</a>
			</nav>
		</header>
	)
}

export default Nav
