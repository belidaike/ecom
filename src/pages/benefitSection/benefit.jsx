import React from 'react'
import './benefit.css'
import { GrSecure } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";

const Benefit = () => {
    return (
        <div className='benefit'>
            <ul className='benefit-ul'>
                <li><h1><FaShippingFast size={50} /> Fast Delivery</h1><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptates ad nulla sit molestiae, eaque rerum harum ab aspernatur molestias id nam assumenda doloribus doloremque corrupti illum itaque dolores officiis?</li>
                <li><h1>Your Credential is <GrSecure size={50} /></h1><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto veniam dignissimos deserunt recusandae ut! Numquam quidem beatae, dolor quisquam eum dolorem laudantium, culpa maxime nostrum soluta tempore autem veritatis!</li>
                <li><h1>So many Discounts!<MdOutlineDiscount size={50} /></h1><br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet quos explicabo provident sint sunt cum rem. Neque, exercitationem autem minima ex, id harum ipsa molestiae, necessitatibus deleniti suscipit natus?</li>
            </ul>
        </div>
    )
}

export default Benefit
