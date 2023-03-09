function ButtonMenu({ isActive, setIsActive }) {
	return (
		<button
			className='z-10 md:hidden'
			onClick={() => {
				setIsActive(!isActive)
			}}>
			{isActive ? (
				<svg width='32' height='31' xmlns='http://www.w3.org/2000/svg'>
					<g fill='#00001A' fillRule='evenodd'>
						<path d='m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z' />
						<path d='M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z' />
					</g>
				</svg>
			) : (
				<svg width='40' height='17' xmlns='http://www.w3.org/2000/svg'>
					<g fill='#00001A' fillRule='evenodd'>
						<path d='M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z' />
						<path d='M0 0h40v3H0z' />
					</g>
				</svg>
			)}
		</button>
	)
}

export default ButtonMenu
