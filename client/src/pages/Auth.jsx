import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Office} from "../assets";

const Auth = () => {
  const {user} = useSelector(state=> state.user)
  const [open,setOpen] = useState(false)
  const location = useLocation()
  let from = location?.state?.from?.path?.pathname || "/";

  if(user.token){ 
    // logged in
    return window.location.replace(from);
     
  }
  return (
    
    <div className='w-full'>
      <img src ={Office} alt ='Office' className ='object-cotain' />
    <SignUp open={open} setOpen={setOpen} />
    
    </div>
  )
}

export default Auth