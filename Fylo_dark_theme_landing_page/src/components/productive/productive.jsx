import React from "react";

function Productive() {
  return (
    <section className="mt-[70px] ml-[30px] pb-[100px]">
      <div className="container element-center gap-[60px] flex-col md:flex-row">
        <div>
          <img
            src="/src/assets/images/illustration-stay-productive.png"
            alt="stay productive"
          />
        </div>
        <div className="text-white text-center md:text-start">
          <h1 className="text-4xl font-bold">Stay productive, <br/> wherever you are</h1>
          <div className="mt-[17px]">
          <p className="mb-[8px]"> 
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.</p>
            <p> Securely share files
            and folders with friends, family and colleagues for live
            collaboration. No email attachments required.
          </p>
          </div>
        <a href="#" className=" text-primary hover:text-[#42b0d1] transition-all duration-200 flex gap-[12px] mt-[25px] border-b-2 border-primary pb-[3px] w-fit">See how Fylo works
        <img  className=" animate-moveRight w-[30px] h-[30px] object-contain" src="/src/assets/images/icon-arrow.svg" alt="" />
        </a>
        </div>
      </div>
    </section>
  );
}

export default Productive;
