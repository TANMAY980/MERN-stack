import "./App.css"
import FormInput from './component/FormInput'
import { useState } from "react";

const App = () => {
  const[values,setValues]=useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",
    
  });
  const inputs=[
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      erroemessage:"username should be 3-16 charechters and shoudn't include special charachter!",
      label:"Username",
      pattern:"^[A-Za-z0-9]{5,20}$",
      required:true,
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errormessage:"it should be valid email",
      label:"Email",
      required:true,
    },
    {
      id:3,
      name:"bithday",
      type:"date",
      placeholder:"Birthday",
      label:"Birthday",
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errormessage:"password should be 10-25 charecters and include at least one letter, 1 number, 1 special character ",
      label:"Password",
      pattern:"^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*).*$",
      required:true,
    },
    {
      id:5,
      name:"confirm password",
      type:"password",
      placeholder:"Confirm Password",
      erroemessage:"password don't match!",
      label:"Confirm Password",
      pattern:values.password,
      required:true,
    }
    
  ];
  const hadleSubmit=(e)=>{
    e.preventDefault();
  };
  const onChange =(e)=>{
    setValues({ ...values, [e.target.name]: e.target.value});
  };
  return (
    <div className="app">
      <form onSubmit={hadleSubmit}>
        <h1>Register</h1>
        {inputs.map((input)=>(
        <FormInput 
        key={input.id} 
        {...input} 
        value={values[input.name]} 
        onChange={onChange}/>
       ))}
        <button>Submit</button>
      </form>   
    </div>
  );
};

export default App
