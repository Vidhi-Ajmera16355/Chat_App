import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728172800&semt=ais_hybrid" alt="CSS chat bubble" />

                </div>
            </div>

            <div className={`chat-bubble text-white bg-blue-500 pb-2`}>
                Hi! what'suppp

            </div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
                12:42
            </div>
        </div>
    )
}

export default Message





// SIMPLE TEMPLATE..


// import React from 'react'

// const Message = () => {
//     return (
//         <div className='chat chat-end'>
//             <div className='chat-image avatar'>
//                 <div className='w-10 rounded-full'>
//                     <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728172800&semt=ais_hybrid" alt="CSS chat bubble" />

//                 </div>
//             </div>

//             <div className={`chat-bubble text-white bg-blue-500`}>
//                 Hi! what'suppp

//             </div>
//             <div className='chat-footer opacity-50 text-xs flex-gap-1 items-center'>
//                 12:42
//             </div>
//         </div>
//     )
// }

// export default Message
