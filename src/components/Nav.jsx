function Nav() {
	return (
		<header className='flex justify-between max-w-7xl mx-auto items-end'>
			<h1 className='text-6xl font-bold'>W.</h1>
			<nav className='space-x-6 text-gray-600 [&_>a:hover]:text-Soft_Red'>
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
