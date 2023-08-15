import React, { useState } from "react";


function Features() {
    const [items, setItems] = useState([
        {
          id: 1,
          img: "/src/assets/images/icon-access-anywhere.svg",
          title: "Access your files, anywhere",
          desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
        },
        {
          id: 2,
          img: "/src/assets/images/icon-security.svg",
          title: "Security you can trust",
          desc: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
        },
        {
          id: 3,
          img: "/src/assets/images/icon-collaboration.svg",
          title: "Real-time collaboration",
          desc: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
        },
        {
          id: 4,
          img: "/src/assets/images/icon-any-file.svg",
          title: "Store any type of file",
          desc: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
        },
      ]);
  return (
    <section className="mt-[40px]">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]  max-w-full">
        {items.map((item) => {
            const { id, img, title, desc } = item;
            return (
              <div key={id} className="text-white element-center flex-col text-center">
                <img src={img} className="w-[80px] h-[80px] object-contain"></img>
                <h2 className="text-xl font-bold my-[10px]">{title}</h2>
                <p className=" font-normal text-sm w-[320px]">{desc}</p>
              </div>
            );
          })}
          </div>
      </div>
    </section>
  );
}

export default Features;
