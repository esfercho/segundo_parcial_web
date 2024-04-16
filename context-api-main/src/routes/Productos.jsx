import { useState } from 'react';
import { Header } from '../components/header';
import { ProductList } from '../components/productList';
import styled from 'styled-components';

const Container = styled.header`
*::after,
*::before,
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	margin: 0 auto;
	max-width: 1200px;
	font-family: 'Lato';
	color: #333;
}

.icon-cart {
	width: 40px;
	height: 40px;
	stroke: #000;
}

.icon-cart:hover {
	cursor: pointer;
}

img {
	max-width: 100%;
}
`;
export default function Productos() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	return (
        <Container>
<>
			<Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
		</>
        </Container>
		
	);
}