import React from 'react'

const Header = (props) => {
  const {cart} = props;
  return (
    <header id="header">
        <div className="container">
            <div className="logo">
                E-commerce app
            </div>
            <div className="cart">
                <a href='#'>Cart</a>
                <span>{cart.length}</span>
            </div>
        </div>  
    </header>
  )
}

export default Header
