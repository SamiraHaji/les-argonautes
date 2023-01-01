/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className=" flex justify-center items-center text-xl md:text-5xl text-center font-bold bg-[#f4f4f4] py-10">
      <Link id="link" href="/">
        <img
          src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
          alt="Wild Code School logo"
          width={96}
          height={96}
        />
      </Link>
      <h1>Les Argonautes</h1>
    </header>
  );
}

export default Header;
