import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up <span className='text-blue-500'> ChatApp</span>
                </h1>
                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full name</span>
                        </label>
                        <input type='text' placeholder='Enter full name' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>username</span>
                        </label>
                        <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input type='password' placeholder='Enter password again' className='w-full input input-bordered h-10' />
                    </div>

                    {/* {Gender } */}
                    <GenderCheckbox />
                    <a href="#" className='text-sm hover: underline hover:text-blue-600 mt-2 inline-block'>
                        Already have any account?
                    </a>
                    <div>
                        <button className='btn btn-block btn-sm mt-2 border-slate-700'>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div >
        </div>
    )
}

export default Signup





// TEMPLATE CODE FOR SIGNUP...

// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const Signup = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                     Sign Up <span className='text-blue-500'> ChatApp</span>
//                 </h1>
//                 <form>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Full name</span>
//                         </label>
//                         <input type='text' placeholder='Enter full name' className='w-full input input-bordered h-10' />
//                     </div>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>username</span>
//                         </label>
//                         <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
//                     </div>
//                     <div>
//                         <label className='label'>
//                             <span className='text-base label-text'>Password</span>
//                         </label>
//                         <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' />
//                     </div>
//                     <div>
//                         <label className='label'>
//                             <span className='text-base label-text'>Confirm Password</span>
//                         </label>
//                         <input type='password' placeholder='Enter password again' className='w-full input input-bordered h-10' />
//                     </div>

//                     {/* {Gender } */}
//                     <GenderCheckbox />
//                     <a href="#" className='text-sm mt-2 hover: underline hover:text-blue-600 mt-2 inline-block'>
//                         Already have any account?
//                     </a>
//                     <div>
//                         <button className='btn btn-block btn-sm mt-2 border-slate-700'>
//                             Sign Up
//                         </button>
//                     </div>
//                 </form>
//             </div >
//         </div>
//     )
// }

// export default Signup
