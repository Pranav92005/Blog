import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"


export default function Auth({type}:{type:"signup"|"signin"}) {
  const [name ,setname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const navigate=useNavigate();

  async function sendRequest(){
    try{
    const response= await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"login"}`,{name,email,password});
    const jwt=await response.data.token;
    localStorage.setItem("token",jwt);
    navigate("/blogs");
    }
    catch{
alert("something went wrong")
    }
  }
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className=" md:flex md:justify-center">
        <div >
          <div className=" ml-20 text-xl  md:ml-0 md:text-3xl font-bold">
          {type==="signin"?" Account Login":"Create an account"}  
          </div>
          <div className="text-slate-400 md:ml-0 ml-16">
           {type==="signin"?"Don't have an account?":"Already have an account? "} 
            <Link className="pl-2 hover:text-black underline" to={type==="signin"?"/signup":"/signin"}>{type==="signin"?"signup":"signin"}</Link>
          </div>
        </div>
         
      </div>
    
      <div className=" mt-4 ml-20 md:ml-48 md:mt-6 flex flex-col md:gap-3" >
      {type==="signup"?<LabelledInput  value={name} label="Username" placeholder="Enter your username"  onchange={(e)=>{setname(e.target.value)}}/>:null}
      <LabelledInput  value={email} label="Email" placeholder="m@example.com"  onchange={(e)=>{setemail(e.target.value)}}/>
      <LabelledInput type={"password"} value={password} label="Password" placeholder="minimum 6 chars"  onchange={(e)=>{setpassword(e.target.value)}}/>
      <button  onClick={sendRequest} className="bg-black hover:bg-gray-700  text-white font-bold  w-52 md:w-96 h-10 mt-4 rounded">{type==="signin"?"sign in":"sign up"}</button>
</div>
    </div>
  )
}

interface LabelledInputProps {
  label: string,
  placeholder: string,
  onchange: (e: any) => void,
  value:string,
  type?:string

}


function LabelledInput({label,placeholder,onchange,value,type}:LabelledInputProps){
  return <div>
  <label  className="block mb-2 text-md font-medium text-gray-900">{label}</label>
  <input type={type||"text"} value={value} placeholder={placeholder} onChange={onchange}  id="large-input" className="block md:w-96 p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500    dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
        
  

}



 
