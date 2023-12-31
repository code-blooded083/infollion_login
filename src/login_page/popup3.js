import React from 'react'
import "./popup-style.css"
const Popup3 = (props) => {
  return (props.trigger)?(
    <>
    <div className="popup">
        <div className="popup-inner">
            <button onClick={()=>props.setTrigger(false)} className="close-btn">Close</button>
            {props.children}
        </div>
    </div>
    </>
  ):"";
}

export default Popup3