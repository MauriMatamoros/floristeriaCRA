import React from 'react'
import { Form, Button, TextArea, Container, Input } from 'semantic-ui-react'

const SendEmail = () => {
	return (
		<Container style={{ marginTop: '2em', marginBottom: '2em' }}>
			<Form>
				<Form.Field
					control={Input}
					name='media'
					label='Media'
					content='Select Image'
					type='file'
					accept='image/*'
					// onChange={handleChange}
				/>
				<Form.Field
					control={TextArea}
					name='description'
					label='Description'
					placeholder='Description'
					type='text'
					// onChange={handleChange}
					// value={product.description}
				/>
				<Form.Field
					control={Button}
					color='blue'
					icon='pencil alternate'
					content='Submit'
					type='submit'
					// disabled={disabled || loading}
				/>
			</Form>
		</Container>
	)
}

export default SendEmail
