// import react from 'react'
const Conversation = () => {
    return (
        <>
            <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728172800&semt=ais_hybrid" alt="" />
                    </div>
                </div>

                <div className='flex flex-col flex-1 '>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>
                            username
                        </p>
                        <span className='text-xl'>
                            😁
                        </span>
                    </div>
                </div>
            </div>

            <div className='divider my-0 py-0 h-1' />
        </>
    )
}

export default Conversation







// STARTER CODE...


// import React from 'react'

// const Conversation = () => {
//     return (
//         <>
//             <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//                 <div className='avatar online'>
//                     <div className='w-12 rounded-full'>
//                         <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728172800&semt=ais_hybrid" alt="" />
//                     </div>
//                 </div>

//                 <div className='flex flex-col flex-1 '>
//                     <div className='flex gap-3 justify-between'>
//                         <p className='font-bold text-gray-200'>
//                             username
//                         </p>
//                         <span className='text-xl'>
//                             😁
//                         </span>
//                     </div>
//                 </div>
//             </div>

//             <div className='divider my-0 py-0 h-1' />
//         </>
//     )
// }

// export default Conversation
