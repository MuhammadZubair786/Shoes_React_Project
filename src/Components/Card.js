import { GlobalContext } from "../Config/GlobalStats"
import React, { useContext, useEffect, useState } from "react"
import GradeIcon from '@material-ui/icons/Grade';
import { Button } from '@material-ui/core'
import {Link} from 'react-router-dom'

function Card() {

    const { Cards } = useContext(GlobalContext)

    const { deleteCart } = useContext(GlobalContext)

    const [card_price, set_price] = useState(0)

    console.log(Cards)

    const delete_fun = (id) => {
        console.log(id)
        deleteCart(id)

    }

    useEffect(() => {
        let price = 0
        for (var i = 0; i < Cards.length; i++) {
            price = price + Cards[i].price
        }

        console.log(price)
        set_price(price)


    }, [deleteCart])

    console.log("price :", card_price)






    return (
        <div className='container-fluid'>
            <div className="row">
                <div className='col col-lg-12 col-sm-12 col-md-12 col-12' style={{ textAlign: 'right' }} >
                    <h5>Total Price : ${card_price}</h5>

                </div>
            </div>

            <div className='row'>

                <div className='col  col-lg-12 col-sm-12 col-md-12 col-12 text-center'>
                    <h4><GradeIcon /><GradeIcon /><GradeIcon /><GradeIcon /><GradeIcon />&nbsp;&nbsp;YOUR CART&nbsp;&nbsp;<GradeIcon /><GradeIcon /><GradeIcon /><GradeIcon /><GradeIcon /></h4>
                </div>
            </div>

            <div className='container text-center'>

                {Cards.map((key, i) => {

                    return (

                        <div className='row' style={{ marginTop: '3%' }} key={i}>
                            <div className='col col-lg-3  col-sm-3 col-6 col-md-3' >
                                <img src={key.img} style={{ width: '100px', border: '3px solid gray' }} alt="Image" />

                            </div>
                            <div className='col col-lg-3  col-sm-3 col-6 col-md-3 ' style={{ marginTop: '3%' }}>

                                <h4>{key.product_name}</h4>
                            </div>
                            <div className='col col-lg-3  col-sm-3 col-6 col-md-3 ' style={{ marginTop: '3%' }}>

                                <h4>${key.price}</h4>
                            </div>
                            <div className='col col-lg-3  col-sm-3 col-6 col-md-3 ' style={{ marginTop: '3%' }}>

                                <Button variant="contained" color="primary" style={{ borderRadius: '20px', boxShadow: ' 0px 5px 5px #888, 0px -5px 5px #888' }} onClick={() => { delete_fun(key.id) }}>
                                    Delete Product
                                </Button>
                            </div>
                            <div className='col col-lg-12 col-lg-12 col-sm-12 col-12 col-12 text-center'>
                                <hr style={{ height: '-10px' }} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <br />
            <br />

            {Cards.length ?


            <div className='container'>
                <div className='row'>
                    <div className='col col-lg-12 text-center'>
                        <Button variant="contained" style={{ borderRadius: '20px', backgroundColor: '#F32648', color: 'white', boxShadow: ' 0px 5px 5px #888, 0px -5px 5px #888' }} >
                           <Link to='/Checkout' style={{color:'white',textDecoration:'none'}}>Check Out</Link> 
                      </Button>
                    </div>
                </div>
            </div>
            :
            null
            }


        </div>
    )
}

export default Card