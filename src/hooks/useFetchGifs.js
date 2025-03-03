import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ({ category }) => {
	const [images, setImages] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const getImages = async () => {
			const { gifs } = await getGifs({ category })
			setImages(gifs)
			setIsLoading(false)
		}

		getImages()
	}, [category])

	return { images, isLoading }
}
