import React from 'react'
import { discoutProducts } from './products/Products'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faPlus} from '@fortawesome/free-solid-svg-icons'
import { addToCart } from '../redux/ProductActions/ProductActioner'
import {Link} from "react-router-dom"
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BigDiscounts() {




  const dispatch=useDispatch()

  return (
    <>
    
    <div className='container '>
    <ToastContainer autoClose={4000}/>
        <h1 className='text-center mb-3'>Big Discounts</h1>
       <div className='row justify-content-center'>
        {discoutProducts.map((product) => {
            return (
                <div className='col-md-4' key={product.id}>
                 
                    <div className='card m-3 shadow '  >
                        <span className='rounded-pill bg-info m-2' style={{width:'4rem'}}>{product.discount}%off</span>
                        <Link to={`/SingleProduct/${product.id}`}>  <img src={product.imgUrl} className="card-img-top img-fluid " alt="..." style={{height:'300px'}}/> </Link>
                        
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
                            <button className='rounded-circle fs-3 text-primary bg-light' style={{height:'50px', width:'50px'}} onClick={() =>{ dispatch(addToCart(product)); 
                            toast.success("Product has been added to cart")}}><FontAwesomeIcon icon={faPlus} /></button>
                            
                            </div>
                            </div>
                           
                    </div>
                    )})
                  }
       </div>
      
    </div>
    </>
  )
}

export default BigDiscounts



// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
// import { addToCart } from '../redux/ProductActions/ProductActioner';
// import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { discoutProducts } from './products/Products';

// function BigDiscounts() {
//   const dispatch = useDispatch();

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//     toast.success('Product has been added to cart');
//   };

//   return (
//     <>
//       <div className='container'>
//         <ToastContainer autoClose={4000} />
//         <h1 className='text-center mb-3'>Big Discounts</h1>
//         <div className='row justify-content-center'>
//           {discoutProducts.map((product) => (
//             <div className='col-md-4' key={product.id}>
//               <div className='card m-3 shadow'>
//                 <span className='rounded-pill bg-info m-2' style={{ width: '4rem' }}>
//                   {product.discount}%off
//                 </span>
//                 <Link to={`/SingleProduct/${product.id}`}>
//                   <img src={product.imgUrl} className='card-img-top img-fluid' alt='...' style={{ height: '300px' }} />
//                 </Link>
//                 <div className='card-body d-flex justify-content-between align-items-center'>
//                   <div>
//                     <h5 className='card-title'>{product.productName}</h5>
//                     <span style={{ color: '#FFD700' }}>
//                       <FontAwesomeIcon icon={faStar} />
//                     </span>
//                     <span style={{ color: '#FFD700' }}>
//                       <FontAwesomeIcon icon={faStar} />
//                     </span>
//                     <span style={{ color: '#FFD700' }}>
//                       <FontAwesomeIcon icon={faStar} />
//                     </span>
//                     <span style={{ color: '#FFD700' }}>
//                       <FontAwesomeIcon icon={faStar} />
//                     </span>
//                     <span style={{ color: '#FFD700' }}>
//                       <FontAwesomeIcon icon={faStar} />
//                     </span>
//                     <p className='card-text fs-3'>${product.price}</p>
//                   </div>
//                   <button
//                     className='rounded-circle fs-3 text-primary bg-light'
//                     style={{ height: '50px', width: '50px' }}
//                     onClick={() => handleAddToCart(product)}
//                   >
//                     <FontAwesomeIcon icon={faPlus} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default BigDiscounts;

