import React from "react";

function GetStarded() {
  return (
    <section>
      <div className="container relative">
        <div className="bg-[#1C2230] w-[900px] max-w-full mx-auto text-white text-center rounded-[10px] absolute left-0 right-0 top-[-150px]">
          <h1 className="text-4xl font-bold py-[30px]">Get early access today</h1>
          <p className="w-[65%] mx-auto pb-[20px]">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <form  className="md:w-[700px]  w-[300px] element-center   mx-auto flex-col md:flex-row pb-[60px] gap-[30px]">
            <input type="text" className="rounded-[20px] w-full md:flex-1 h-[40px] outline-none border-none text-black pl-[20px]" placeholder="name@exmaple.com"/>
            <button className="btn py-[7px] px-[30px] rounded-[30px] w-[300px] md:w-[200px]  ">Get Started For Free</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default GetStarded;
