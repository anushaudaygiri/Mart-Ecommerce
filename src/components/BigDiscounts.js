import React from 'react'
import { discoutProducts } from './products/Products'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faPlus} from '@fortawesome/free-solid-svg-icons'
import { addToCart } from '../redux/ProductActions/ProductActioner'
import {Link} from "react-router-dom"

function BigDiscounts() {
  const dispatch=useDispatch()

  return (
    <div className='container '>
        <h1 className='text-center mb-3'>Big Discounts</h1>
       <div className='row justify-content-center'>
        {discoutProducts.map((product) => {
            return (
                <div className='col-md-4' key={product.id}>
                  <Link to={`/SingleProduct/${product.id}`}>
                    <div className='card m-3 shadow '  >
                        <span className='rounded-pill bg-info m-2' style={{width:'4rem'}}>{product.discount}%off</span>
                        <img src={product. imgUrl} className="card-img-top img-fluid " alt="..." style={{height:'300px'}}/>
                        
                        <div className='card-body d-flex justify-content-between align-items-center'>
                            <div>
                            <h5 className='card-title'>{product.productName}</h5>
                           <span style={{ color: '#FFD700'}}><FontAwesomeIcon icon={faStar} /></span>
                           <span style={{ color: '#FFD700'}}><FontAwesomeIcon icon={faStar} /></span>
                           <span style={{ color: '#FFD700'}}><FontAwesomeIcon icon={faStar} /></span>
                           <span style={{ color: '#FFD700'}}><FontAwesomeIcon icon={faStar} /></span>
                           <span style={{ color: '#FFD700'}}><FontAwesomeIcon icon={faStar} /></span>
                            <p className='card-text fs-3' >${product.price}</p>
                            </div>
                            <button className='rounded-circle fs-3 text-primary bg-light' style={{height:'50px', width:'50px'}} onClick={() => dispatch(addToCart(product))}><FontAwesomeIcon icon={faPlus} /></button>
                            
                            </div>
                            </div>
                            </Link>
                    </div>
                    )})
                }
       </div>
      
    </div>
  )
}

export default BigDiscounts
