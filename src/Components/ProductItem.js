import { useParams } from "react-router-dom"
import Shoes from '../Config/Shoes.json'
import { Carousel } from 'react-bootstrap'
import Footer from "./Footer"
import { Button } from '@material-ui/core'
import React, { useContext } from "react"
import { GlobalContext } from "../Config/GlobalStats"



function ProductItem() {

  const { addCart } = useContext(GlobalContext)

  const { Cards } = useContext(GlobalContext)

  let { id } = useParams()
  console.log(id)
  // console.log(Shoes[id])



  const add_cart = (id) => {
    // alert(Shoes[id].name)
    // console.log(Shoes[id])

    const data = Shoes[id]
    let check = 0

    for (var i = 0; i < Cards.length; i++) {
      if (Cards[i].id === data.id) {
        check = 1
        break
      }
    }


    if (check === 0) {



      const data_cart = {
        id: data.id,
        product_name: data.name,
        price: Number(data.price),
        img: data.img,



      }

      console.log(data_cart)
      addCart(data_cart)
    }
    else {
      alert("Item already exist.")
    }


  }


  return (
    <div>
      <div className='container' style={{ marginTop: '2%', }}>
        <div className='row' >
          <div className='col col-lg-6  ' >
            {/* <img src={Shoes[id].img} style={{width:'500px'}}/>  */}
            <Carousel style={{ backgroundColor: '#EEEEEE', marginLeft: '10%' }} >
              <Carousel.Item >
                <img
                  className="d-block text-center w-100"
                  src={Shoes[id].img}
                  alt="First slide"
                  style={{ height: '400px' }}
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Shoes[id].img1}
                  alt="Third slide"
                  style={{ height: '400px' }}

                />


              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Shoes[id].img2}
                  alt="Third slide"
                  style={{ height: '400px' }}
                />


              </Carousel.Item>
            </Carousel>
          </div>
          <div className='col col-lg-6 col-md-8 col-sm-12 col-12 ' style={{ marginTop: '3%' }}>
            <h5 style={{ textAlign: 'center' }}>{Shoes[id].name}</h5>
            <h6 style={{ textAlign: 'center', marginTop: '1%' }}><s>{Shoes[id].old_price}</s>&emsp;<b>{Shoes[id].price}</b></h6>

            <p>Nike, originally known as Blue Ribbon Sports founded in 11964. Inspiring the world's athletes, Nike delivers innovative sports products, experiences, and services. Nike is a Top Sports international brand which deals in the...
                      </p>
            <div style={{ textAlign: 'center' }}>
              <Button variant="contained" color="secondary" style={{ borderRadius: '20px', boxShadow: ' 0px 5px 5px #888, 0px -5px 5px #888' }} onClick={() => { add_cart(id) }}>
                Add to Cart
                      </Button>
            </div>

          </div>
        </div>


        <br /> <br />

      </div>
      <Footer />

    </div>

  )
}

export default ProductItem