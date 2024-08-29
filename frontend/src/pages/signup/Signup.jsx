import React from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

const Signup = () => {
  const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

const {loading,signup}=useSignup()

const handleCheckboxChange=(gender)=>{
  setInputs({...inputs,gender})
}

const handleSubmit=async (e)=>{
  e.preventDefault()
  await signup(inputs)

}


  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto h-screen">
      {/* glassmorphism */}
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5">
      <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup <span className="text-purple-700">ConvoNest</span>
        </h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label className="label p-2">
              <span className="text-white label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered input-primary w-full max-w-xs"
              value={inputs.fullName}
              onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-white label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="input input-bordered input-primary w-full max-w-xs"
              value={inputs.username}
              onChange={(e)=>setInputs({...inputs,username:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-white label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered input-primary w-full max-w-xs"
              value={inputs.password}
              onChange={(e)=>setInputs({...inputs,password:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-white label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered input-primary w-full max-w-xs"
              value={inputs.confirmPassword}
              onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
            />
          </div>

          {/* Gender */}
          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>


          <Link to="/login" className="text-white text-sm hover:underline hover:text-blue-500 mt-2 inline-block">
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 bg-purple-600 hover:bg-purple-700 text-white border-none shadow-md" disabled={loading}>
              {loading?<span className="loading loading-spinner"></span>:"Sign Up"}</button>
          </div>
        </form>

        </div>
        </div>
  )
}

export default Signup


//ui
// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const Signup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto h-screen">
//       {/* glassmorphism */}
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5">
//       <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Signup <span className="text-purple-700">ConvoNest</span>
//         </h1>
//         <form>
//         <div>
//             <label className="label p-2">
//               <span className="text-white label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               className="input input-bordered input-primary w-full max-w-xs"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-white label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="johndoe"
//               className="input input-bordered input-primary w-full max-w-xs"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-white label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="input input-bordered input-primary w-full max-w-xs"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-white label-text">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="input input-bordered input-primary w-full max-w-xs"
//             />
//           </div>

//           {/* Gender */}
//           <GenderCheckbox/>


//           <a href="#" className="text-white text-sm hover:underline hover:text-blue-500 mt-2 inline-block">
//             Already have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2 bg-purple-600 hover:bg-purple-700 text-white border-none shadow-md">Sign Up</button>
//           </div>
//         </form>

//         </div>
//         </div>
//   )
// }

// export default Signup