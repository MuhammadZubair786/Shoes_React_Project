import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa'
import { GlobalContext } from "../Config/GlobalStats"
import React, { useContext, useEffect, useState } from "react"
import Logo from '../image/logo1.png'



function Navbar() {
    const { Cards } = useContext(GlobalContext)

    const [card, setcard] = useState(0)

    useEffect(() => {
        setcard(Cards.length)
    }, [Cards])




    return (
        <div>

            <div className="container-fluid"  >
                <div className='row' >
                    <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: '#F2F3F4' }} >
                        <div className='col col-lg-10'>
                            {/* <a className="navbar-brand" href="#" >Navbar</a> */}
                            <img src={Logo} style={{ width: '120px', marginTop: '-20px' }} />
                            <button className="navbar-toggler text-center" style={{ float: 'right', marginRight: '-10px' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>


                        </div>
                        <div className=" col col-lg-2 collapse navbar-collapse text-center" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontSize: '15px', fontWeight: 'bold' }}>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to='/' style={{ color: '#F82F8D' }}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/product' style={{ color: '#F82F8D' }}>Product</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to='/cart' style={{ color: '#F82F8D' }}>
                                        <FaShoppingCart style={{ fontSize: '25px' }} />
                                        <sup> <span style={{ fontSize: '15px', color: 'blue' }}>{card}</span></sup></Link>
                                </li>


                            </ul>





                        </div>

                    </nav>
                </div>

            </div>
        </div>



    )
}

export default Navbar