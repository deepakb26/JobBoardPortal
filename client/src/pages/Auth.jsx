import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Office} from "../assets";
import { SignUp } from "../components";

const Auth = () => {
  const {user} = useSelector((state)=> state.user) //state of user
  const [open,setOpen] = useState(true);  //state variables
  const location = useLocation()

  let from = location?.state?.from?.path?.pathname || "/";

/*  if(user.token){  
    // if logged in just reroute to where they came from 
    return window.location.replace(from); 
     
  }*/
  return (
    
    <div className='w-full'>
      <img src ={Office} alt ='Office' className ='object-cotain' />
    <SignUp open={open} setOpen={setOpen} />
    
    </div>
  )
}

export default Auth