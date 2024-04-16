import { data } from '../assets/data';
import styled from 'styled-components';

const Container = styled.header`
.container-items {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
}

.item {
	border-radius: 10px;
}

.item:hover {
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.item img {
	width: 100%;
	height: 300px;
	object-fit: cover;
	border-radius: 10px 10px 0 0;
	transition: all 0.5s;
}

.item figure {
	overflow: hidden;
}

.item:hover img {
	transform: scale(1.2);
}

.info-product {
	padding: 15px 30px;
	line-height: 2;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.price {
	font-size: 18px;
	font-weight: 900;
}

.info-product button {
	border: none;
	background: none;
	background-color: #000;
	color: #fff;
	padding: 15px 10px;
	cursor: pointer;
}

.cart-empty {
	padding: 20px;
	text-align: center;
}

.hidden {
	display: none;
}

.btn-clear-all {
	border: none;
	background-color: #000;
	color: #fff;
	padding: 15px 0;
	display: block;
	width: 100%;
	margin-top: 10px;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	font-family: inherit;
	cursor: pointer;
  font-size: 16px;
  transition: all .3s ease;
}

.btn-clear-all:hover{
  background-color: #333;
  transform: scale(1.03);
  border-radius: 0;
}
`;
export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

	return (
		<Container>
			<div className='container-items'>
				{data.map(product => (
					<div className='item' key={product.id}>
						<figure>
							<img src={product.img} alt={product.nameProduct} />
						</figure>
						<div className='info-product'>
							<h2>{product.nameProduct}</h2>
							<p className='price'>${product.price}</p>
							<button onClick={() => onAddProduct(product)}>
								Añadir al carrito
							</button>
						</div>
					</div>
				))}
			</div>
		</Container>

	);
};