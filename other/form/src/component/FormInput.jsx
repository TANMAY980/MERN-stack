import "./formInput.css";
import { useState } from "react";
const FormInput = (props) => {
    const[focused,setFocused]=useState("false");
    const{label,errormessage,onChange,id,...inputProps}=props
    const handleFocus=(e)=>{
      setFocused(true);
    }
  
  return (
    <div className="formInput">
      <label >{label}</label>
      <input {...inputProps} 
      onChange={onChange} 
      onBlur={handleFocus} 
      onFocus={()=>inputProps.name === "confirmPassword" && setFocused(true)}
      focused={focused.toString()}/>
      <span>{errormessage}</span>
    </div>
  )
}

export default FormInput
