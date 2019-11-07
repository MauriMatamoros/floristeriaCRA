import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CardCategory = (props) => {
	const { image, name } = props.array
	return (
		<div style={{ height: 250 }}>
			<Card href={`/${name}`}>
				<Image src={image} ui={false} width={'100%'} height={160} />
				<Card.Content>
					<Card.Header>{name}</Card.Header>
				</Card.Content>
			</Card>
		</div>
	)
}

export default CardCategory
