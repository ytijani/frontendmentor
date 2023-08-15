import React, { useEffect, useRef, useState } from "react";

function Header() {
    const headeRef = useRef()
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100)
            {
                headeRef.current.style.background = "#0c1524";
                headeRef.current.style.padding = "20px 0px"
            }
            else
            {
                headeRef.current.style.background = "transparent"
                headeRef.current.style.padding = "30px"
            }
        });
    }, [])
    const links = ["Features", "Team", "Sign In"]
  return (
    <header ref={headeRef} className="pt-[30px] fixed w-full top-0 left-0 z-50 transition-all duration-200">
      <div className="container  flex justify-between items-center flex-col sm:flex-row">
        <a href="/">
          <img src="/src/assets/images/logo.svg" alt="logo" />
        </a>
        <nav>
            <ul className="flex items-center gap-[50px]">
            {links.map((item) => 
                <li key={item}><a className="text-white" href={`/${item.toLocaleLowerCase()}`}>{item}</a></li>
            )}
            </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
