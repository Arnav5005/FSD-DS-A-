import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [uname,setUname]=useState("") // username
    const [pass,setPass]=useState("") // password
    const [error,setError]=useState("")
    const navigate=useNavigate();
    function handleLogin(){
        e.preventDefault() // to prevent the forwarding of form due to onSubmit
        if(uname==="admin" && pass==="manager"){
            navigate("/admin")
        }
        else if(uname==="user" && pass==="abes"){
            navigate("/user")
        }
        else{
            setError("Authentication Error: Check user credentials")
            navigate("/")
        }
    }
  return (
    <div classname="login">
        <h1>SignIn here</h1>
        <h2 style={{color:"red"}}>{error}</h2>
        <form onSubmit={handleLogin}>
            UserName: 
            <input type="text" 
            value={uname} 
            placeholder="Enter the username"
            onChange={(e)=>setUname(e.target.value)}/>
            <br />
            Password: 
            <input type="password" 
            value={pass} 
            placeholder="Enter the password"
            onChange={(e)=>setPass(e.target.value)}/>
            <br />
            <button>SignIn</button>
            <button>Reset</button>
        </form>
    </div>
  )
}

export default Login
