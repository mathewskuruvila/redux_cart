import react from 'react';
import { FaCartPlus } from "react-icons/fa";
import './Header.css'
const Header= ()=>{
    return(
        <header>
        <div className='container'>
            <h1>Redux pro</h1>
            <FaCartPlus className='icon'/>
        </div>
        </header>
    )
}

export default Header;