import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Product from '../components/Product'
import { ListProducts } from '../productsData'

const Home = () => {
	const [products] = useState(ListProducts);
	const [cart, setCart] = useState([]);

	const handleAddToCart = (idProduct) => {
		if(!cart.includes(idProduct)){
			setCart([...cart, idProduct]);
		}
	}
	
	const handleRemoveFromCart = (idProduct) => {
		if(cart.includes(idProduct)){
			setCart(cart.filter(item => item !== idProduct));
		}
	}

	const renderFeaturedProduct = () => {
		const featuredProducts = products.filter(product => product.isFeatured);
		return (
			<section id="featured-products">
			<h1>Featured products</h1>
			<div className="products">
				{
					featuredProducts.length > 0 ? featuredProducts.map(p => 
					<Product product={p} 
						key={p.id} 
						handleAddToCart={handleAddToCart} 
						handleRemoveFromCart={handleRemoveFromCart} 
						cart={cart}
					/>) : <p>No products yet!</p>
				}
			</div>
		</section>
		);
	};
	
	const renderProducts = () => {
		const productsFiltred = products.filter(product => !product.isFeatured);
		return (
			<section id="list-products">
				<h1>Products</h1>
				<div className="products">
				{
					productsFiltred.length > 0 ?
					productsFiltred.map(p => 
					<Product 
						product={p} 
						key={p.id} 
						handleAddToCart={handleAddToCart} 
						handleRemoveFromCart={handleRemoveFromCart} 
						cart={cart}
					/>)
					:
					<p>No product Yet!</p>
				}
				</div>
			</section>
		);
	};

	return (
	<React.Fragment>
		<Header products={products} cart={cart}/>
		<div id="main">
			<div className="container">
				{renderFeaturedProduct()}
				{renderProducts()}
			</div>
		</div>
		<Footer />
	</React.Fragment>
	)
}

export default Home
