import * as types from './../constants/ActionTypes'

export const actAddToCart = (product, quantity) => {
	return {
		type: types.ADD_TO_CART,
		product,
		quantity
	}
}

export const actChangeMsg = (message) => {
	return {
		type: types.CHANGE_MESSAGE,
		message: message
	}
}

export const actRemoveProductInCart = (id) => {
	return {
		type: types.REMOVE_PRODUCT_IN_CART,
		id
	}
}

export const actUpdateProductInCart = (id, quantity) => {
	return {
		type: types.UPDATE_PRODUCT_IN_CART,
		id,
		quantity
	}
}