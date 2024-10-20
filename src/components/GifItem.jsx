export const GifItem = ({ title, url }) => {
	return (
		<>
			<div className=''>
				<div className='shadow shadow-slate-500 rounded-xl'>
					<img src={url} alt={title} className='rounded-t-xl' />
					<h4 className='font-light text-center text-sm p-2 bg-slate-600 rounded-b-xl uppercase'>
						{title}
					</h4>
				</div>
			</div>
		</>
	)
}
