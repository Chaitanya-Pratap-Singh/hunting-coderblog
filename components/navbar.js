/** @format */

import React from "react";
import style from "@/styles/navbar.module.css";
import Link from "next/link";
import Image from 'next/image'


const Navbar = () => {
	return (
		<>
			<div className={style.nav}>
				<div className={style.navlinks}>
          <ul>
          <Link className={style.link} href='/'><li>Home</li></Link>
          <Link className={style.link} href='/about'><li>About</li></Link>
          <Link className={style.link} href='/blog'><li>Blog</li></Link>
          <Link className={style.link} href='/contact'><li>Contact</li></Link>
        </ul>
        </div>
        <div className={style.search}>
          <Image src ="/search.svg" width={40} height={40}></Image>
        </div>
			</div>
        <hr className={style.rule}/>
		</>
	);
};

export default Navbar;
