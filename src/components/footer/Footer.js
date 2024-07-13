import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBagShopping } from '@fortawesome/free-solid-svg-icons'
function Footer(){
        return(
            <div >
            <div className='row bg-primary'>
                <div className='col-md-3 pl-2 ' >
                    <h2 className='text-light'><FontAwesomeIcon icon={faBagShopping} />Mart</h2>
                    <p style={{width:'10rem'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Auctor libero id et,in gravida.Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
                    </p>

                </div>
                <div className='col-md-3'>
                    <h2 className='text-light'>About Us</h2>
                    <p>Careers</p>
                    <p>Our Stories</p>
                    <p>Our Cares</p>
                    <p>Terms & conditions</p>
                    <p>Privacy Policy</p>

</div>
<div className='col-md-3'>
    <h2 className='text-light'>Customer Care</h2>
    <p>Help Center</p>
    <p>How to Buy</p>
    <p>Track Your Order</p>
    <p>Corporate & Bulk Purchasing</p>
    <p>Returns & Refunds</p>

                </div>
                <div className='col-md-3'>
                    <h2 className='text-light'>Contact Us</h2>
                    <p>70 Washing Square</p>
                    <p>South, New York, NY 10012, United States</p>
                    <p>Email: example@gmail.com</p>
                    <p>Phone: +1 1123 456 780</p>

                </div>


            </div>
            </div>

        )

}
export default Footer