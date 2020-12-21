import CopyrightIcon from '@material-ui/icons/Copyright';
import { FaFacebook,FaGithub } from "react-icons/fa"
import Logo from '../image/logo1.png'



function Footer(){
  
    return(
        <div className='continer-fluid' style={{marginTop:'40px',backgroundColor:'#EAEDED'}}>
            <br/>
            <br/>
            <div className='container'>
                <div className='row'>
                    <div className='col col-lg-4 '>
                 
             
                        <img src={Logo} style={{width:'150px',marginTop:'-15%'}}/>
                        
                     
                    </div>
                    <div className='col col-lg-5 text-center'>
                        <b><CopyrightIcon/>Made By Muhammad Zubair Minhas</b>
                    </div>
                    <div className='col col-lg-3 text-center'>
                        <FaFacebook style={{fontSize:'30px'}}/>
                        <FaGithub style={{fontSize:'30px',marginLeft:'10px'}}/>
                    </div>
                </div>
                 
            </div>
            <br/>
         

            
        </div>
    )
}

export default Footer