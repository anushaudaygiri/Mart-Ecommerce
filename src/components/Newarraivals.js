import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faPlus} from '@fortawesome/free-solid-svg-icons'
import { products } from './products/Products'

function Newarraivals() {
  const newArrivals=products.filter((item)=>item.category==='mobile' || item.category==='wireless')
  return (
    <div className='container '>
        <h1 className='text-center mb-3'>New Arraivals</h1>
       <div className='row justify-content-center'>
        {newArrivals.map((product) => {
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
                            <button className='rounded-circle fs-3 text-primary bg-light' style={{height:'50px', width:'50px'}}><FontAwesomeIcon icon={faPlus} /></button>
                            
                            </div>
                            </div>
                    </div>
                    )})
                }
       </div>
      
    </div>
  )
}

export default Newarraivals
