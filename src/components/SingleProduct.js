import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { products } from './products/Products'
import{Tabs,Tab} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faPlus} from '@fortawesome/free-solid-svg-icons'
import { addToCart } from '../redux/ProductActions/ProductActioner'
import table from "../Images/table.jpg"

function SingleProduct() {
    const {id}=useParams()
    const product=products.find((item)=>item.id===id)
   
    const filteredProducts=products.filter((item)=>item.category===product.category)
    const dispatch=useDispatch()
    
  return (
    <div>
        <div>
        <h1   className="text-center d-flex align-items-center justify-content-center " style={{ backgroundImage: `url(${table})`, height:"100px"}}>{product.productName}</h1>

     <div className='row m-3' >
        <div className='col-md-6 d-flex justify-content-center align-items-center' >
            <img src={product.imgUrl} alt="product name" className='img-fluid  align-center m-0' />

        </div>
        <div className='col-md-6 mt-5'>
            <h1 className='display-4 fw-bold' >{product.productName}</h1>
            <div className='row'>
            <p className='col-md-2 fs-4 my-4'>{product.avgRating}</p>
            </div>
            <div className='row'>
                <p className='col-md-2 fw-bold fs-3 my-3'>${product.price}</p>
                <p className='col-md-2 fs-4 my-3'>category{product.category}</p>
            </div>
            <p className='fs-4 my-3'>{product.shortDesc}</p>
            <form>
                <input type='number' min={0}  value={1} style={{width:'4rem'}}  className='my-3'/>
                <br/>
                <br/>
            
            </form>
            <button className='btn btn-primary fw-bold fs-3' onClick={() => dispatch(addToCart(product))} >Add to cart</button>
            


        </div>
        
        
     </div>
     </div>
    <Tabs defaultActiveKey="description" id="product-tabs" className="mb-3">
        <Tab eventKey="description" title="Description">
        <p className='fs-4 m-3'>{product.description}</p>
        </Tab>
        <Tab eventKey="reviews" title="Reviews" className='m-3'>
        {
            product.reviews.map((item)=>{
                return(
                <div key={item} >
                    <p>John Doe</p>
                    <p className='text-primary'>{item.rating}(rating)</p>
                    <p>{item.text}</p>
                </div>
                )
            })
        }
        </Tab>
    </Tabs>

    <div>
        <h1 className='m-3'>You Might also like</h1>
        <div className='container '>
       <div className='row justify-content-center'>
        {filteredProducts.map((product) => {
            return (
                <div className='col-md-4' key={product.id}>
                 
                    <div className='card m-3 shadow '  >
                        
                        <img src={product.imgUrl} className="card-img-top img-fluid " alt="..." style={{height:'300px'}}/>
                        
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
                           
                    </div>
                    )})
                }
       </div>
      
    </div>


    </div>

    </div>
  )
}

export default SingleProduct
