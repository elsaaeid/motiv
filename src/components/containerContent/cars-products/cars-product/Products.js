import {React, useState} from 'react';
import "../carsProducts.css"
import {AiOutlineHeart, AiTwotoneHeart} from "react-icons/ai";



const Products = ({ product }) => {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1)
  }

 const [likeActive, setLikeActive] = useState(<AiOutlineHeart />);

  const handleClick2 = () => {
    // Counter state is incremented
    setLikeActive(<AiTwotoneHeart style={{color: "#F84F56"}} />)
  }
  return (
        <div className='card-product'>
          <div class="card-header-product d-flex justify-start align-items-start flex-column">
            <div className='card-product-top d-flex justify-between align-items-center flex-row'>
              <div className="card-title-product">
                {product.title}
              </div>
              <div className="card-icon product-icon cursor-pointer" onClick={handleClick2} style={{color: product.colorLike}}>
              {likeActive}
              </div>
            </div>
            <div className='card-product-bottom'>
              <h4>{product.subTitle}</h4>
            </div>
          </div>
          <div class="card-body-product d-flex justify-center align-items-center">
          <div className="card-image">
            <img src={product.cardImg} alt={product.title} />
          </div>
          </div>
          <div className='card-footer-product d-flex justify-between align-items-center flex-row'>
            <div className='card-footer-left d-flex justify-start align-items-center flex-row'>
              <span className='product-account pr-5 d-flex justify-between align-items-center flex-row cursor-pointer' onClick={handleClick1}> {product.accountIcon} {counter}</span>
              <span className='product-engine d-flex justify-between align-items-center flex-row'> {product.engineIcon} {product.engineText}</span>
            </div>
            <div className='card-footer-right d-flex justify-end align-items-center'>
              <p className='product-price'> <span>{product.price}</span>{product.pricePer}</p>
            </div>
          </div>
        </div>
  );
};

export default Products;

