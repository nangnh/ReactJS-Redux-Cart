import * as types from './../constants/ActionTypes'

const data = JSON.parse(localStorage.getItem('CART'))

const initialState = data ? data : []

const findProductInCart = (cart, id) => {
	let result = -1
	cart.forEach((item, index) => {
		if (item.product.id === id) {
			result = index
		}
	});
	return result
}

const cart = (state = initialState, action) => {
	let index = -1;

	switch (action.type) {
		case types.ADD_TO_CART:
			index = findProductInCart(state, action.product.id)
			if (index === -1) {
				state.push({
					product: action.product,
					quantity: action.quantity
				})
			} else {
				state[index].quantity += action.quantity
			}
			localStorage.setItem('CART', JSON.stringify(state))
			return [...state]

		case types.REMOVE_PRODUCT_IN_CART:
			index = findProductInCart(state, action.id)
			if (index !== -1) {
				state.splice(index, 1)
			}
			localStorage.setItem('CART', JSON.stringify(state))
			return [...state]

		case types.UPDATE_PRODUCT_IN_CART:
			index = findProductInCart(state, action.id)
			if (index !== -1) {
				state[index].quantity += action.quantity
				if (state[index].quantity <= 0) state.splice(index, 1)
			}
			localStorage.setItem('CART', JSON.stringify(state))
			return [...state]

		default:
			return [...state]
	}
}

export default cart