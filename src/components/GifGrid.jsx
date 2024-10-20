import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs({ category })

	return (
		<>
			<div className='mb-12'>
				<h3 className='text-2xl mb-4 uppercase bg-slate-600 rounded-xl text-center p-2'>
					{category}
				</h3>

				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
					{isLoading && (
						<>
							<div className='animate-pulse bg-slate-600 rounded-xl h-48'></div>
							<div className='animate-pulse bg-slate-600 rounded-xl h-48'></div>
						</>
					)}

					{images.map((image) => (
						<GifItem key={image.id} {...image} />
					))}
				</div>
			</div>
		</>
	)
}
