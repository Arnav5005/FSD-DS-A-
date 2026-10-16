// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [formData,setFormData] = useState({
//     name:"",
//     email:"",
//     password:""
//   })

//   useEffect(()=>{
//     console.log("form data update", formData)
//   },[formData])

//   const handleChange=(e)=>{
//     setFormData({
//       ...formData,
//       [e.target.name]:e.target.value,
//     })
//   }

//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     alert("registration successfully");
//     console.log(formData);
//   }


//   return (
//     <div>
//       <form onSubmit={handleSubmit}>                   
//         <input type='text' name='name' placeholder='enter name' value={formData.name} onChange={handleChange} required/>
//         <br/>
//         <input type='email' name='email' placeholder='enter your email' value={formData.email} onChange={handleChange} required/>
//         <br/>
//         <input type='password' name='password' placeholder='enter password' value={formData.password} onChange={handleChange} required/>
//         <br />
//         <button type='submit'>Submit</button>

//       </form>
//     </div>
//   )
// }

// export default App

// useRef

import React,{useRef} from 'react'

const App = () => {

  const count=useRef(0);

  function handleClick(){
    count.current++;
    console.log(count.current)
  }

  return (
    <div>
      <button onClick={handleClick}>
        Increment
      </button>
    </div>
  )
}

export default App
