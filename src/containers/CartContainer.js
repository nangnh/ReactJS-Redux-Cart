import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import CartItem from './../components/CartItem'
import CartResult from './../components/CartResult'
import Cart from './../components/Cart'
import * as Message from './../constants/Message'
import {actChangeMsg, actRemoveProductInCart, actUpdateProductInCart} from "../actions";


class CartContainer extends Component {
	render() {
		const {cart} = this.props

		return <Cart>{this.showCartItem(cart)}{this.showTotalAmount(cart)}</Cart>
	}

	showCartItem = cart => {
		let { removeProductInCart, onChangeMessage, onUpdateProductInCart } = this.props
		let result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>

		if (cart.length > 0) {
			result = cart.map((item, index) => {
				return <CartItem
					key={index}
					product={item.product}
					quantity={item.quantity}
					removeProductInCart={removeProductInCart}
					onChangeMessage={onChangeMessage}
					onUpdateProductInCart={onUpdateProductInCart}
				/>
			})
		}

		return result
	}

	showTotalAmount = cart => {
		return <CartResult cart={cart}/>
	}

}

CartContainer.propTypes = {
	cart: PropTypes.arrayOf(PropTypes.shape({
			product: PropTypes.shape({
				id: PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
				image: PropTypes.string,
				description: PropTypes.string,
				price: PropTypes.number.isRequired,
				inventory: PropTypes.number,
				rating: PropTypes.number
			}),
			quantity: PropTypes.number.isRequired
		})
	).isRequired
}

const mapStateToProps = state => {
	return {
		cart: state.cart
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		removeProductInCart: (id) => {
			dispatch(actRemoveProductInCart(id))
		},
		onChangeMessage: (message) => {
			console.log(message)
			dispatch(actChangeMsg(message))
		},
		onUpdateProductInCart: (id, quantity) => {
			dispatch(actUpdateProductInCart(id, quantity))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
