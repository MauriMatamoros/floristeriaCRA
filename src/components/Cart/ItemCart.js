import React, { useState } from 'react'
import { connect } from 'react-redux'
import './styles/styles.css'

import { removeProduct } from '../../redux/actions/cart'

const ItemCart = ({ id, name, price, image, quantity, removeProduct }) => {
	const [quantityState, setQuantityState] = useState(quantity)
	return (
		<>
			<div className='container-fluid'>
				<div className='row mt-2 mb-2'>
					<div className='col-lg-3 col-12 p-3'>
						<div className='text-center'>
							<img src={image} style={styles.imagen} alt='imagen' />
						</div>
					</div>
					<div className='col-lg-9 col-12 pt-4 cart-item'>
						<div className='cart-item-align'>
							<h6>{name}</h6>
							<p>{price}</p>
						</div>
						<div className='cart-item-input justify-content-between mt-3'>
							<div className='row p-0 m-0 cart-item-input-row'>
								<button
									className='btn btn-outline-link btn-custom m-0'
									onClick={() => setQuantityState((prevState) => prevState + 1)}
								>
									<p className='h4 font-weight-bold'>+</p>
								</button>
								<input
									value={quantityState}
									type='numeric'
									className='form-control input-count mt-0'
									//value='0'
								/>
								<button
									className='btn btn-outline-link btn-custom m-0'
									onClick={() => setQuantityState((prevState) => prevState - 1)}
								>
									<p className='h4 font-weight-bold'>-</p>
								</button>
							</div>
							<button
								type='button'
								className='btn btn-link'
								onClick={() => removeProduct(id)}
							>
								<p className='text-muted'>REMOVER</p>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const styles = {
	imagen: { width: 100, height: 100, borderRadius: 10 }
}

export default connect(null, { removeProduct })(ItemCart)
