import React, { useState } from 'react'
import "./style.css"
import image from "./image.jpg"
import arrow from "./arrow-left.png"
import google from "./google1.png"
import linkedin from "./linkedin.png"
import mailLogo from "./mail-logo.png"
import myLogo from "./my-logo.png"
import passLogo from "./pass-logo.png"
import axios from "axios"
import Popup from "./popup"
import Popup2 from "./popup2"
import Popup3 from "./popup3"
import Popup4 from "./popup4"
import Success from "./success"

const Login = () => {
    const [ButtonPop, setbuttonPop] = useState(false);
    const [success, setSuccess] = useState(false);
    const [ButtonPop2, setButtonPop] = useState(false);
    const [ButtonPop3, setButtonPop2] = useState(false);
    const [ButtonPop4, setButtonPop3] = useState(false);
    const [userValue, setUserValue] = useState({ username: "" })
    const [formValue, setFormValue] = useState({ email: "", password: "" })
    const [userValue2, setUserValue2] = useState({ username2: "", otp: "" })
    const [userValue3, setUserValue3] = useState({ username3: "", pass3: "", cnfmpass1: "" })
    const [userValue4, setUserValue4] = useState({ username4: "", pass4: "", cnfmpass2: "" })
    const [border, setBorder] = useState(false);
    const handleBorder = () => {
        setBorder(true);
    }
    const handleUserValue = (e) => {
        const { name, value } = e.target;
        setUserValue({ ...userValue, [name]: value });
    }
    const handleUserSubmit = (e) => {
        e.preventDefault();
        axios.post("https://be-infollion.vercel.app/api/v1/users/generate-otp", {
            username: userValue.username

        }).then(res => console.log(res)).catch(err => console.log(err))
    }
    const handleUserValue2 = (e) => {
        const { name, value } = e.target;
        setUserValue2({ ...userValue2, [name]: value });

    }
    const handleUserSubmit2 = (e) => {
        e.preventDefault();
        axios.post("https://be-infollion.vercel.app/api/v1/users/verify-otp", {
            username: userValue2.username2,
            otp: userValue2.otp
        }).then(res => { console.log(res); setSuccess(true) }).catch(err => { console.log(err); alert("Login failed, please check the credentials") })

    }
    const handleUserValue3 = (e) => {
        const { name, value } = e.target;
        setUserValue3({ ...userValue3, [name]: value });

    }
    const handleUserValue4 = (e) => {
        const { name, value } = e.target;
        setUserValue4({ ...userValue4, [name]: value });

    }
    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
}

    const handleFormSubmit = (e) => {
        e.preventDefault();
        //   console.log(formValue)
        axios.post("https://be-infollion.vercel.app/api/v1/users/login", {
            username: formValue.email,
            password: formValue.password
        }).then(res => { console.log(res); setSuccess(true) }).catch(err => { console.log(err); alert("Login failed, please check the credentials") })
    }
    return (success) ? (<><Success trigger={success} setTrigger={setSuccess} ></Success></>) : (
        <>

            <div className="main">

                <div className="left">
                    <p className="link"  onClick={()=>alert("You need to Login first")}>Back to website</p>
                    <a  onClick={()=>alert("You need to Login first")}><img className="img2" src={arrow} alt="arrow" /></a>
                    <img className="img1" src={image}  />

                </div>
                <div className="right">

                    <img className="img3" src={myLogo} alt="logo" />
                    <div className="myDiv">
                        <p className="para">Login to Dashboard</p>
                        <div className="inputdiv"><img className="inputLogo1" src={passLogo} alt="logo" /><img className="inputLogo2" src={mailLogo} alt="logo" />
                            <form onSubmit={handleFormSubmit} method="post" >
                                <input className="input" type="text" placeholder="Email/Username" name="email" onClick={handleBorder} style={{ outline: border ? "none" : "" }} autoComplete='off' value={formValue.email} onChange={handleInput} required />
                                <input className="input" type="password" placeholder="Password" style={{ outline: border ? "none" : "" }} name="password" autoComplete='off' value={formValue.password} onChange={handleInput} required /><a className='forgotLink' ><p className="forgot">Forgot?</p></a><button className="buttons1" type="submit">Log in</button></form></div>
                        <div className="login"><p className="para2">OR</p><form onSubmit={handleUserSubmit} method='post'><button onClick={() => setbuttonPop(true)} className="buttons2" type="submit"  >Log in with OTP</button>

                            <Popup trigger={ButtonPop} setTrigger={setbuttonPop}><input className="popup-input" onClick={handleBorder} style={{ outline: border ? "none" : "" }} type="text" placeholder='Username' autoComplete='off' required name="username" value={userValue.username} onChange={handleUserValue} /><br></br>
                                <button className="popup-btn" type="submit" onClick={() => setButtonPop(true)}>Submit</button></Popup></form>
                            <Popup3 trigger={ButtonPop3} setTrigger={setButtonPop2}><input onClick={handleBorder} style={{ outline: border ? "none" : "" }} className="popup-input" type="text" placeholder='Enter your G-mail' autoComplete='off' required name="username3" value={userValue3.username3} onChange={handleUserValue3} /> <br></br><input onClick={handleBorder} style={{ outline: border ? "none" : "" }} type="password" className="popup-input" placeholder='Create a Password' autoComplete='off' required name="pass3" value={userValue3.pass3} onChange={handleUserValue3} /><br></br><input onClick={handleBorder} style={{ outline: border ? "none" : "" }} type="password" className="popup-input" placeholder='Confirm your Password' autoComplete='off' required name="cnfmpass1" value={userValue3.cnfmpass1} onChange={handleUserValue3} /><br></br> <button className="popup-btn" onClick={() => { window.location.reload(true); if (userValue3.pass3 !== userValue3.cnfmpass1) { alert("Passwords do not match") } }}>Submit</button></Popup3>
                            <Popup4 trigger={ButtonPop4} setTrigger={setButtonPop3}><input onClick={handleBorder} style={{ outline: border ? "none" : "" }} className="popup-input" type="text" placeholder='Your Linkedin username' autoComplete='off' required name="username4" value={userValue4.username4} onChange={handleUserValue4} /> <br></br><input onClick={handleBorder} style={{ outline: border ? "none" : "" }} type="password" className="popup-input" placeholder='Create a Password' autoComplete='off' required name="pass4" value={userValue4.pass4} onChange={handleUserValue4} /><br></br><input onClick={handleBorder} style={{ outline: border ? "none" : "" }} type="password" className="popup-input" placeholder='Confirm your Password' autoComplete='off' required name="cnfmpass2" value={userValue4.cnfmpass2} onChange={handleUserValue4} /><br></br> <button className="popup-btn" onClick={() => { window.location.reload(true); if (userValue4.pass4 !== userValue4.cnfmpass2) { alert("Passwords do not match") } }}>Submit</button></Popup4>
                            <form onSubmit={handleUserSubmit2} method='post' ><Popup2 trigger={ButtonPop2} setTrigger={setButtonPop}><input onClick={handleBorder} style={{ outline: border ? "none" : "" }} className="popup-input" type="text" placeholder='Username' autoComplete='off' required name="username2" value={userValue2.username2} onChange={handleUserValue2} /> <br></br><input onClick={handleBorder} style={{ outline: border ? "none" : "" }} type="text" className="popup-input" placeholder='OTP' autoComplete='off' required name="otp" value={userValue2.otp} onChange={handleUserValue2} /><br></br> <button className="popup-btn" type="submit">Submit</button></Popup2></form><p className="para3">Or Log in with</p></div>
                        <div className="signin"><a  onClick={() => setButtonPop2(true)}><img className="signimg1" src={google} alt="google sign in" /></a><a  onClick={() => setButtonPop3(true)}><img className="signimg2" src={linkedin} alt="linkedin login" /></a></div>
                    </div></div></div>
        </>
    )
}
export default Login;




