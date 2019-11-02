import React, { useState, useEffect } from 'react'
import {
	Form,
	Input,
	TextArea,
	Button,
	Image,
	Message,
	Header,
	Icon,
	Select
} from 'semantic-ui-react'
import { connect } from 'react-redux'

import database, { storage } from '../firebase'
import { getTypes } from '../redux/actions/productTypes'
import Spinner from '../components/Spinner/Spinner'

const CreateProduct = ({ getTypes, types, loadingSpinner }) => {
	const INITIAL_PRODUCT = {
		name: '',
		description: '',
		price: '',
		media: '',
		type: ''
	}
	const [product, setProduct] = useState(INITIAL_PRODUCT)
	const [mediaPreview, setMediaPreview] = useState('')
	const [success, setSuccess] = useState(false)
	const [loading, setLoading] = useState(false)
	const [disabled, setDisabled] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		const isProduct = Object.values(product).every((element) =>
			Boolean(element)
		)
		isProduct ? setDisabled(false) : setDisabled(true)
	}, [product])

	useEffect(() => {
		getTypes()
	}, [getTypes])

	const handleChange = (e) => {
		const { name, value, files } = e.target
		if (name === 'media') {
			setProduct((prevState) => ({ ...prevState, media: files[0] }))
			setMediaPreview(window.URL.createObjectURL(files[0]))
		} else {
			setProduct((prevState) => ({
				...prevState,
				[name]: value
			}))
		}
	}

	const handleTypeChange = (e, { value }) => {
		setProduct((prevState) => ({
			...prevState,
			type: value
		}))
	}

	const handleImageUpload = async (productId) => {
		await storage
			.ref(`products/${productId}-${product.media.name}`)
			.put(product.media)
	}

	const handleSubmit = async (e) => {
		try {
			e.preventDefault()
			setLoading(true)
			setError('')
			const payload = {
				name: product.name,
				description: product.description,
				images: [product.media.name],
				price: product.price,
				type: product.type
			}
			const { key } = await database.ref('products').push(payload)
			await handleImageUpload(key)
			setProduct(INITIAL_PRODUCT)
			setSuccess(true)
		} catch (error) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}

	return loadingSpinner ? (
		<Spinner />
	) : (
		<>
			<Header as='h2' block>
				<Icon name='add' color='orange' />
				Create New Product
			</Header>
			<Form
				loading={loading}
				error={Boolean(error)}
				onSubmit={handleSubmit}
				success={success}
			>
				<Message
					success
					icon='check'
					header='Success!'
					content='Your product has been posted.'
				/>
				<Message error header='Oops!' content={error} />
				<Form.Group widths='equal'>
					<Form.Field
						control={Input}
						name='name'
						label='Name'
						placeholder='Name'
						type='text'
						onChange={handleChange}
						value={product.name}
					/>
					<Select
						placeholder='Seleccione el tipo...'
						options={types.map((type) => ({
							key: type.id,
							value: type.name,
							text: type.name
						}))}
						onChange={handleTypeChange}
					/>
					<Form.Field
						control={Input}
						name='price'
						label='Price'
						placeholder='Price'
						min='0.00'
						step='0.01'
						type='number'
						onChange={handleChange}
						value={product.price}
					/>
					<Form.Field
						control={Input}
						name='media'
						label='Media'
						content='Select Image'
						type='file'
						accept='image/*'
						onChange={handleChange}
					/>
				</Form.Group>
				<Image src={mediaPreview} rounded centered size='small' />
				<Form.Field
					control={TextArea}
					name='description'
					label='Description'
					placeholder='Description'
					type='text'
					onChange={handleChange}
					value={product.description}
				/>
				<Form.Field
					control={Button}
					color='blue'
					icon='pencil alternate'
					content='Submit'
					type='submit'
					disabled={disabled || loading}
				/>
			</Form>
		</>
	)
}

const mapStateToProps = ({ productTypes: { types, loading } }) => ({
	types,
	loadingSpinner: loading
})

export default connect(
	mapStateToProps,
	{ getTypes }
)(CreateProduct)
