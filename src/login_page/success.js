import React from 'react'
import "./success-style.css"
import arrow from "./arrow-left.png"
const Success = (props) => {
  return (
    <><div className="myDiv1"><p className='successPara1'>Login Successful!</p><br></br><p className='successPara2'>Welcome to Infollion!</p><a className='successLink' onClick={()=>props.setTrigger(false)} >Back to Login</a><a onClick={()=>props.setTrigger(false)}><img className='successArrow' src={arrow} alt="img" /></a></div>
    </>
  )
}

export default Success;