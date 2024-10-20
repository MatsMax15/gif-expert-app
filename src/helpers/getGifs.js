export const getGifs = async ({ category }) => {
	const APY_KEY = 'RySVVTtKECM8FzyUxFxIxKHPkn8luOZV'
	const limit = 12
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${APY_KEY}&q=${category}&limit=${limit}`

	const resp = await fetch(url)

	const { data } = await resp.json()

	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images.downsized_medium.url,
		}
	})

	return { gifs }
}
