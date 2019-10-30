import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CardCategory = props => {
  const { image, title } = props.array
  return (
    <div style={{ height: 250 }}>
      <Card href={`/${title}`}>
        <Image src={image} ui={false} width={'100%'} height={160} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
        </Card.Content>
      </Card>
    </div>
  )
}

export default CardCategory
