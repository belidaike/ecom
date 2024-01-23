import { Link, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import './navbar.css'
import { useContext } from 'react';
import { ShopContext } from '../context/shop-context';

const Navbar = (props) => {
    const { handleChange } = useContext(ShopContext)
    const navigate = useNavigate()

    return (
        <nav>
            <h1 className='nav-logo' onClick={() => navigate('/')}>Lorem</h1>
            <input type="search" className='nav-search' placeholder='Search Here' onChange={handleChange} />
            <ul>
                <Link to='/cart'><li><FaShoppingCart size={45} /></li></Link>

            </ul>
        </nav >
    )
}

export default Navbar
