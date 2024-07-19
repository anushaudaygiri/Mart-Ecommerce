import React from 'react'
import Slider from './Slider'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar,faCreditCard,faShieldHalved,faHeadset} from '@fortawesome/free-solid-svg-icons'
import BigDiscounts from '../BigDiscounts'
import Newarraivals from '../Newarraivals'
import BestSales from '../BestSales'
import Footer from '../footer/Footer'



function Home() {
    
       
  return (
    <div>
       
         <div className='bg-light'>
      <Slider/>
      </div>
    

<div className='container'>
    <div className='row justify-content-center m-4' style={{ display: 'flex', flexWrap: 'nowrap' }}>
        <div className='col-md-2 m-1 text-center' style={{ backgroundColor: '#fdefe6', flex: '1',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="rounded-circle bg-light text-center d-flex align-items-center justify-content-center m-3 "  style={{height:'40px' ,width:'40px'}}>

           <FontAwesomeIcon icon={faCar} />
            </div>
            <h5>Free Delivery</h5>
            <p>Lorem ipsum dolor sit amet.</p>
        </div> 
        <div className='col-md-2 m-1 text-center' style={{ backgroundColor: '#ceebe9', flex: '1' ,display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div className="rounded-circle bg-light text-center d-flex align-items-center justify-content-center  m-3"  style={{height:'40px' ,width:'40px'}}>
            <FontAwesomeIcon icon={faCreditCard} />
</div>
            <h5>Safe Payment</h5>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='col-md-2 m-1 text-center' style={{ backgroundColor: '#e2f2b2', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div className="rounded-circle bg-light text-center d-flex align-items-center justify-content-center m-3 "  style={{height:'40px' ,width:'40px'}}>
         <FontAwesomeIcon icon={faShieldHalved} />
            </div>
            <h5>Secure Payment</h5>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='col-md-2 m-1 text-center' style={{ backgroundColor: '#d6e5fb', flex: '1',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
           
            <div className="rounded-circle bg-light text-center d-flex align-items-center justify-content-center m-3"  style={{height:'40px' ,width:'40px'}}><p><FontAwesomeIcon icon={faHeadset} /></p></div>
           
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
    <BestSales />
</div>
<div>
    <Footer/>
</div>


      </div>
   
  )
}

export default Home


