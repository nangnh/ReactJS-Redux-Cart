import React, {Component} from 'react';
import * as Message from './../constants/Message'

class CartItem extends Component {
	render() {
		const {product, quantity} = this.props

		return (
			<tr>
				<th scope="row">
					<img
						src={product.image}
						alt="" className="img-fluid z-depth-0"/>
				</th>
				<td>
					<h5>
						<strong>{product.name}</strong>
					</h5>
				</td>
				<td>{product.price}$</td>
				<td className="center-on-small-only">
					<span className="qty">{quantity} </span>
					<div className="btn-group radio-group" data-toggle="buttons">
						<label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
							   onClick={() => this.updateProductInCart(product.id, -1)}>
							<a href="#/">—</a>
						</label>
						<label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
							   onClick={() => this.updateProductInCart(product.id, 1)}>
							<a href="#/">+</a>
						</label>
					</div>
				</td>
				<td>{product.price * quantity}$</td>
				<td>
					<button type="button"
							className="btn btn-sm btn-primary waves-effect waves-light"
							data-toggle="tooltip" data-placement="top"
							title="" data-original-title="Remove item"
							onClick={() => this.removeProductInCart(product.id)}>
						X
					</button>
				</td>
			</tr>

		);
	}

	removeProductInCart = (id) => {
		const message = Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS
		this.props.removeProductInCart(id)
		this.props.onChangeMessage(message)
	}

	updateProductInCart = (id, quantity) => {
		const message = Message.MSG_UPDATE_CART_SUCCESS
		this.props.onUpdateProductInCart(id, quantity)
		this.props.onChangeMessage(message)
	}
}

export default CartItem;
