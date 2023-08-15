import React, { Fragment } from "react";

function Home() {
  return (
    <section className="bg-[#1C2230]">
      <div className="container element-center  flex-col pt-[200px]">
        <div className="w-[750px] max-w-full">
          <img className="w-full h-fit" src="/src/assets/images/illustration-intro.png" alt="" />
        </div>
        <div className="text-white text-center">
          <h1 className=" font-semibold text-[30px] md:text-[40px] mb-[20px] mt-[30px]"> All your files in one secure location,<br/> accessible anywhere.</h1>
          <p className="font-normal md:w-[600px] mx-auto text-lg">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="px-[60px] pt-[10px] pb-[10px] mt-[30px] btn rounded-[30px] font-medium"> Get Started</button>
        </div>
      </div>
      <div className="w-full h-[200px]">
        <img  className="w-full h-full" src="/src/assets/images/bg-curvy-desktop.svg" alt="" />
      </div>
    </section>
  );
}

export default Home;
