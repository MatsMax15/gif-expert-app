import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('')

	const onInputChange = ({ target }) => {
		setInputValue(target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault()

		const value = inputValue.trim()

		if (value.length <= 1) return

		onNewCategory({ newCategory: value })
		setInputValue('')
	}

	return (
		<form action='' onSubmit={onSubmit}>
			<input
				type='text'
				className='w-full p-2 bg-transparent border-b text-slate-300 border-slate-500 focus:outline-none focus:border-slate-400 mb-4'
				placeholder='Buscar'
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	)
}
