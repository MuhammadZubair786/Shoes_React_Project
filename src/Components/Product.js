import StarBorderIcon from '@material-ui/icons/StarBorder';
import shoes from '../Config/Shoes.json'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import './Home.css'

function Product() {
    return (

        <div className='container-fluid ' >
            <div className='row ' >


                <div className='col col-lg-12 text-center' style={{color:'green'}}>
                    <br />
                    <StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon />
                    <b style={{ fontSize: '22px',color:'black' }}>TRENDING SHOES</b>
                    <StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon />



                
            </div>
        </div>
          <div className='container-fluid'>
          <div className='row'>
              {Object.keys(shoes).map((key, i) => {
                  return (<div className='col col-lg-3 col-md-4 col-sm-6 col-12' style={{ marginTop: '30px' }} key={i}>
                      <div className="card text-center" style={{ width: '18rem', height: '100%' }}>
                          <Link to={`/product/${key}`} style={{ textDecoration: 'none' }}>
                              <img className="card-img-top" src={shoes[key].img} alt="Card image cap" style={{ height: '300px',backgroundColor:'#EEEEEE' }} />
                              <div className="card-body">
                                  <div style={{ color: 'green' }}>
                                      <StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon />
                                  </div>
                                  <b className="card-title">{shoes[key].name}</b><br />
                                  <b>${shoes[key].price}</b>

                              </div>
                          </Link>

                      </div>



                  </div>)
              })}
          </div>
      </div>
      <Footer/>
      </div>




    )
}

export default Product