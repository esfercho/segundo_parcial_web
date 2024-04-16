import { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
header {
	display: flex;
	justify-content: space-between;
	padding: 30px 0 40px 0;
}

.container-icon {
	position: relative;
}

.count-products {
	position: absolute;
	top: 55%;
	right: 0;

	background-color: #000;
	color: #fff;
	width: 25px;
	height: 25px;

	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
}

#contador-productos {
	font-size: 12px;
}

.container-cart-products {
	position: absolute;
	top: 50px;
	right: 0;

	background-color: #fff;
	width: 400px;
	z-index: 1;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
}

.cart-product {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 30px;

	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.info-cart-product {
	display: flex;
	justify-content: space-between;
	flex: 0.8;
}

.titulo-producto-carrito {
	font-size: 20px;
}

.precio-producto-carrito {
	font-weight: 700;
	font-size: 20px;
	margin-left: 10px;
}

.cantidad-producto-carrito {
	font-weight: 400;
	font-size: 20px;
}

.icon-close {
	width: 25px;
	height: 25px;
}

.icon-close:hover {
	stroke: red;
	cursor: pointer;
}

.cart-total {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 0;
	gap: 20px;
}

.cart-total h3 {
	font-size: 20px;
	font-weight: 700;
}

.total-pagar {
	font-size: 20px;
	font-weight: 900;
}

.hidden-cart {
	display: none;
}
`;
export const Header = ({
	allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
}) => {
	const [active, setActive] = useState(false);

	const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

	return (
		<HeaderContainer>
<header>
			<h1>Tienda</h1>

			<div className='container-icon'>
				<div
					className='container-cart-icon'
					onClick={() => setActive(!active)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon-cart'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
					<div className='count-products'>
						<span id='contador-productos'>{countProducts}</span>
					</div>
				</div>

				<div
					className={`container-cart-products ${
						active ? '' : 'hidden-cart'
					}`}
				>
					{allProducts.length ? (
						<>
							<div className='row-product'>
								{allProducts.map(product => (
									<div className='cart-product' key={product.id}>
										<div className='info-cart-product'>
											<span className='cantidad-producto-carrito'>
												{product.quantity}
											</span>
											<p className='titulo-producto-carrito'>
												{product.nameProduct}
											</p>
											<span className='precio-producto-carrito'>
												${product.price}
											</span>
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='icon-close'
											onClick={() => onDeleteProduct(product)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

							<div className='cart-total'>
								<h3>Total:</h3>
								<span className='total-pagar'>${total}</span>
							</div>

							<button className='btn-clear-all' onClick={onCleanCart}>
								Vaciar Carrito
							</button>
						</>
					) : (
						<p className='cart-empty'>El carrito está vacío</p>
					)}
				</div>
			</div>
		</header>
		</HeaderContainer>
		
	);
};