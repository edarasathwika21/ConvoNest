import React from 'react'

const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                <span className='text-white label-text'>Male</span>
                <input type="checkbox" className="checkbox bg-slate-700 border-gray-400 checked:bg-purple-600 checked:border-purple-600 focus:ring-purple-500 focus:ring-offset-0 hover:border-white"
                checked={selectedGender==='male'}
                onChange={()=>onCheckboxChange("male")}/>
                </label>
        </div>

        <div className='from-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                <span className='text-white label-text'>Female</span>
                <input type="checkbox" className="checkbox bg-slate-700 border-gray-400 checked:bg-purple-600 checked:border-purple-600 focus:ring-purple-500 focus:ring-offset-0 hover:border-white"
                 checked={selectedGender==='female'}
                 onChange={()=>onCheckboxChange("female")}/>

                </label>

        </div>
        
    </div>
  )
}

export default GenderCheckbox


//ui
// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
//         <div className='form-control'>
//             <label className={'label gap-2 cursor-pointer'}>
//                 <span className='text-white label-text'>Male</span>
//                 <input type="checkbox" className="checkbox bg-slate-700 border-gray-400 checked:bg-purple-600 checked:border-purple-600 focus:ring-purple-500 focus:ring-offset-0 hover:border-white"/>
//                 </label>
//         </div>

//         <div className='from-control'>
//             <label className={'label gap-2 cursor-pointer'}>
//                 <span className='text-white label-text'>Female</span>
//                 <input type="checkbox" className="checkbox bg-slate-700 border-gray-400 checked:bg-purple-600 checked:border-purple-600 focus:ring-purple-500 focus:ring-offset-0 hover:border-white"/>

//                 </label>

//         </div>
        
//     </div>
//   )
// }

// export default GenderCheckbox