import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Icon, Table } from 'semantic-ui-react'

import Spinner from '../Spinner/Spinner'
import { getGallery } from '../../redux/actions/gallery'
import GalleryItem from './GalleryItem'

const GalleryList = ({ galleries, loadingGallery, getGallery }) => {
	useEffect(() => {
		getGallery()
	}, [getGallery])
	return loadingGallery ? (
		<Spinner />
	) : (
		<>
			<Table celled striped>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell colSpan='3'>Gallery</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{galleries.length > 0 ? (
						galleries.map((image) => <GalleryItem key={image.id} {...image} />)
					) : (
						<Table.Row>
							<Table.Cell collapsing>
								<Icon name='add' /> Add Gallery
							</Table.Cell>
						</Table.Row>
					)}
				</Table.Body>
			</Table>
		</>
	)
}

const mapStateToProps = ({ gallery }) => ({
	galleries: gallery.galleries,
	loadingGallery: gallery.loading
})

export default connect(
	mapStateToProps,
	{ getGallery }
)(GalleryList)
