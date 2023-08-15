import React, { useState } from 'react'

function Feedback() {
    const [posts, setPosts] = useState([
        {
            id:1,
            desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine",
            user: "Satish Patel",
            descUser : "Founder & CEO, Huddle",
            img:"/src/assets/images/profile-1.jpg"
        },
        {
            id:2,
            desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine",
            user: "Bruce McKenzie",
            img:"/src/assets/images/profile-2.jpg",
            descUser : "Founder & CEO, Huddle"
        },
        {
            id:3,
            desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine",
            user: " Iva Boyd",
            img:"/src/assets/images/profile-3.jpg",
            descUser : "Founder & CEO, Huddle"
        },
    ])
  return (
   <section className='pb-[300px]'>
    <div className='container relative '>
       <div className='absolute left-[10px] top-[-35px]'>
        <img src="/src/assets/images/bg-quotes.png" alt="" />
       </div>
       <div className='element-center gap-[30px] flex-col  lg:flex-row'>
        {posts.map(item => {
            const {id, desc,user,descUser,img} = item;
            return <div key={id} className='bg-[#21293C] text-white p-[30px]  z-10 rounded-[8px] shadow-[8px_8px_1px_8px_#1B232E]' >
               <p className='mb-[20px]'>{desc}</p>
               <div className='flex items-center'>
                <img className='w-[30px] h-[30px] rounded-[50%] object-contain' src={img} alt="userFace" />
               <div className='pl-[20px]'>
                    <h5 className='text-xl font-bold'>{user}</h5>
                    <p className=' text-normal'>{descUser}</p>
               </div>
               </div>
            </div>
        })}
        </div>
    </div>
   </section>
  )
}

export default Feedback