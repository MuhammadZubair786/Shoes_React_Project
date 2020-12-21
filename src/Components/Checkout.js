import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '@material-ui/core'


  

function Checkout(props) {

    const [name,setname]= useState('')
    const [email,setemail]= useState('')
    const [contact,setcontact]= useState('')
    const [address,setaddress]= useState('')

    

    const handleChange= (e) =>{
        e.preventDefault()
        console.log("Name :",name)
        console.log("Email :",email)
        console.log("Contact :",contact)
        console.log("Address :",address)




        
    }



    
    return (
        <div className='container'>
            <br/>
            <div className='row'>
                <div className='col col-lg-3 col-md-6 '>

                </div>
                <div className='col col-lg-6 col-md-6 col-sm-12 col-12 text-center'>
                    <div>
                   <b> Please fill in all required fields</b>
                    </div>
                    <br/>

                    <form onSubmit={handleChange}>
                    
                <TextField id="standard-basic" label="Name*" value={name} onChange={(e)=>setname(e.target.value)}   type='text' required/>
                <br/>
                <TextField id="standard-basic" label="Email*"  value={email} onChange={(e)=>setemail(e.target.value)}   type='email' style={{marginTop:'4%'}} required/>
                <br/>
                <TextField id="standard-basic" label="Phone Number*" value={contact} onChange={(e)=>setcontact(e.target.value)}    type='number' style={{marginTop:'4%'}} required/>
                <br/>
                <TextField id="standard-basic" label="Shipping Address*" value={address} onChange={(e)=>setaddress(e.target.value)}    type='email' style={{marginTop:'4%'}} required/>
                <RadioGroup>
               <div style={{marginTop:'4%'}}>
               <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
               <FormControlLabel value={'Cash'} control={<Radio />} label="Cash on Delivery" />
               </div>

               </RadioGroup>

               <Button variant="contained" style={{ borderRadius: '10px', backgroundColor: '#F32648', color: 'white', boxShadow: ' 0px 5px 5px #888, 0px -5px 5px #888' }} type='onSubmit'>
                    Submit
                </Button>

                </form>



                </div>
                <div className='col col-lg-3'>

                </div>
            </div>

        </div>
    )
}


export default Checkout