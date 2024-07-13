import React from 'react'
import Slider from './Slider'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar,faCreditCard,faShieldHalved,faHeadset} from '@fortawesome/free-solid-svg-icons'
import BigDiscounts from '../BigDiscounts'
import Newarraivals from '../Newarraivals'
import Footer from '../footer/Footer'


function Home() {
    
       
  return (
    <div>
         <div className='bg-light'>
      <Slider/>
      </div>
    

<div className='container'>
    <div className='row justify-content-center m-4' style={{ display: 'flex', flexWrap: 'nowrap' }}>
        <div className='col-md-2 m-1 text-center' style={{ backgroundColor: '#fdefe6', flex: '1' }}>
            <div>

            <p className='mt-1'><FontAwesomeIcon icon={faCar} /></p>
            </div>
            <h5>Free Delivery</h5>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='col-md-2 m-1 text-center' style={{ backgroundColor: '#ceebe9', flex: '1' }}>
            <div className="rounded-circle d-flex justify-content-center align-items-center bg-primary text-white" style={{ width: '50px', height: '50px' }}>
  <FontAwesomeIcon icon={faCreditCard} />
</div>
            <h5>Safe Payment</h5>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='col-md-2 m-1 text-center' style={{ backgroundColor: '#e2f2b2', flex: '1' }}>
            <div>
            <p className='mt-1'><FontAwesomeIcon icon={faShieldHalved} /></p>
            </div>
            <h5>Secure Payment</h5>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='col-md-2 m-1 text-center' style={{ backgroundColor: '#d6e5fb', flex: '1' }}>
           
            <span className='mt-1 rounded-circle bg-light text-center display-8' style={{height:'50px',width:'50px'}}><FontAwesomeIcon icon={faHeadset} /></span>
           
            <h5>Money Back Guarantee</h5>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
</div>
<div className='bg-light'>
    <BigDiscounts/>
    
</div>
<div>
    <Newarraivals/>
</div>
<div>
    <Footer/>
</div>


      </div>
   
  )
}

export default Home


