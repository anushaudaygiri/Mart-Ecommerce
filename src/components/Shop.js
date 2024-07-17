import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faPlus} from '@fortawesome/free-solid-svg-icons'
import { addToCart } from '../redux/ProductActions/ProductActioner'
import { products } from './products/Products'
import { Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { selectContent } from '../redux/ProductActions/ProductActioner'

function Shop() {
    const filterName=useSelector((state)=>state.ProductData.selectedContent)
    const FilterProducts=products.filter((item)=>item.category===filterName )
    const dispatch=useDispatch()
  return (
    <div>
         <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='bg-primary px-5'>
      {filterName ?  `${filterName}`:'Filter By Category' }
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>{dispatch(selectContent('sofa'))}}>sofa</Dropdown.Item>
        <Dropdown.Item onClick={()=>{dispatch(selectContent('watch'))}}>watch</Dropdown.Item>
        <Dropdown.Item onClick={()=>{dispatch(selectContent('chair'))}} >chair</Dropdown.Item>
        <Dropdown.Item onClick={()=>{dispatch(selectContent('wireless'))}}>wireless</Dropdown.Item>
        <Dropdown.Item onClick={()=>{dispatch(selectContent('mobile'))}}>mobiles</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        <div className='container '>
        
       <div className='row justify-content-center'>
        {FilterProducts.map((product) => { 
            return (
                <div className='col-md-4' key={product.id}>
                 
                    <div className='card m-3 shadow '  >
                        
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
                            <button className='rounded-circle fs-3 text-primary bg-light' style={{height:'50px', width:'50px'}} onClick={() => dispatch(addToCart(product))}><FontAwesomeIcon icon={faPlus} /></button>
                            
                            </div>
                            </div>
                           
                    </div>
                    )})
                }
       </div>
      
    </div>
    </div>
  )
}

export default Shop
