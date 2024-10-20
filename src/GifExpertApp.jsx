import { useState } from 'react'

import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
	const [categories, setCategories] = useState([])

	const handleAddCategory = ({ newCategory }) => {
		const isExist = categories.includes(newCategory)

		if (isExist) return

		setCategories([newCategory, ...categories])
	}

	return (
		<>
			<div className='w-full p-8'>
				<div className='border-b mb-4 flex justify-between p-2'>
					<h1 className='text-2xl'>Gif Expert App</h1>
				</div>

				<AddCategory onNewCategory={handleAddCategory} />

				{categories.length === 0 && (
					<p className='text-muted'>No hay categorias</p>
				)}

				{categories.map((category) => {
					return <GifGrid key={category} category={category} />
				})}
			</div>
		</>
	)
}
