import './Home.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import shoes from '../Config/home_data.json'
import { Link } from 'react-router-dom'
import {Button} from '@material-ui/core'
import Footer from '../Components/Footer'




function Home() {
    console.log(shoes)
    console.log(Object.keys(shoes))
    return (
        <div >
            <div className='container-fluid ' >
                <div className='row ' >
                    <div className='col col-lg-12  col-12 col-sm-12 col-12 img ' >
                        <br /><br />



                    </div>

                    <div className='col col-lg-12 col-12 col-md-12 col-sm-12  text-center' style={{color:'green'}}>
                        <br />
                        <StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon />
                        <b style={{ fontSize: '22px',color:'black' }}>TRENDING SHOES</b>
                        <StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon />



                    </div>
                </div></div>
            <div className='container ' style={{justifyContent:'center'}}>
                <div className='row'>
                    {Object.keys(shoes).map((key, i) => {
                        return (<div className='col col-lg-4 col-12 col-md-6 col-sm-6' style={{ marginTop: '30px' }}  key={i}>
                            <div className="card text-center cardd" style={{ width: '18rem', height: '100%' }}>
                                <Link to={`/product/${key}`} style={{ textDecoration: 'none' }}>
                                    <img className="card-img-top" src={shoes[key].img} alt="Card image cap" style={{ height: '400px',backgroundColor:'#EEEEEE ' }} />
                                    <div className="card-body">
                                        <div style={{ color: 'green' }}>
                                            <StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon />
                                        </div>
                                        <b className="card-title">{shoes[key].name}</b><br />
                                        <b>{shoes[key].price}</b>

                                    </div>
                                </Link>

                            </div>



                        </div>)
                    })}
                </div>
            </div>

            <div className='container' style={{marginTop:'5%'}}>
                <div className='row'>
                    <div className='col col-lg-12 text-center'>
                        <Link to='/product'>
                    <Button variant="contained" color="primary" style={{borderRadius:'20px',boxShadow: ' 0px 5px 5px #888, 0px -5px 5px #888'}}>
                        More Product
                    </Button>
                    </Link>
                    </div>
                </div>

            </div>


            <Footer/>












        </div>
    )
}

export default Home