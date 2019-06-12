import React, {Component} from 'react';
import * as Message from './../constants/Message'

class Product extends Component {
	render() {
		const {product} = this.props;
		return (
			<div className="col-lg-4 col-md-6 mb-r">
				<div className="card text-center card-cascade narrower">
					<div className="view overlay hm-white-slight z-depth-1">
						<img
							src={product.image}
							className="img-fluid" alt={product.name}/>
						<a href="#/">
							<div className="mask waves-light waves-effect waves-light" href="#/"></div>
						</a>
					</div>
					<div className="card-body">
						<h4 className="card-title">
							<strong>
								<a href="#/">{product.name}</a>
							</strong>
						</h4>
						<ul className="rating">
							<li>{this.showRatings(product.rating)}</li>
						</ul>
						<p className="card-text">
							{product.description}
						</p>
						<div className="card-footer">
							<span className="left">{product.price}$</span>
							<span className="right">
                                            <a className="btn-floating blue-gradient" data-toggle="tooltip"
											   data-placement="top" title="" data-original-title="Add to Cart"
											   href="#/" onClick={()=> this.onAddToCart(product)}>
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </span>
						</div>
					</div>
				</div>
			</div>
		);
	}

	onAddToCart = product => {
		const message = Message.MSG_ADD_TO_CART_SUCCESS

		this.props.onAddToCart(product)
		this.props.onChangeMessage(message)
	}

	showRatings(rating) {
		let result = [];
		if (rating > 0) {
			for (let i = 1; i <= 5; i++) {
				if (i <= rating) {
					result.push(<i key={i} className="fa fa-star"/>);
				} else {
					result.push(<i key={i} className="fa fa-star-o"/>);
				}
			}
		}
		return result;
	}

}

export default Product;
