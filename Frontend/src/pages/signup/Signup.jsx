import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto h-screen">
      {/* glassmorphism */}
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5">
      <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup <span className="text-purple-700">ConvoNest</span>
        </h1>
        <form>
        <div>
            <label className="label p-2">
              <span className="text-white label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered input-primary w-full max-w-xs"
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
            />
          </div>

          {/* Gender */}
          <GenderCheckbox/>


          <a href="#" className="text-white text-sm hover:underline hover:text-blue-500 mt-2 inline-block">
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 bg-purple-600 hover:bg-purple-700 text-white border-none shadow-md">Sign Up</button>
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