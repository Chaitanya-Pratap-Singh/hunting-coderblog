import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from "@/styles/navbar.module.css"
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleLinkClick = () => {
        setShowMenu(false); // Close menu when a link is clicked
    };

    return (
        <>
            <div className={style.nav}>
                {/* Show full navbar links on larger screens */}
                <div className={`${style.navlinks} ${showMenu ? style.showMenu : ''}`}>
                    <ul>
                        <li onClick={handleLinkClick}><Link href='/'className={style.link}>Home</Link></li>
                        <li onClick={handleLinkClick}><Link href='/about' className={style.link}>About</Link></li>
                        <li onClick={handleLinkClick}><Link href='/blog' className={style.link}>Blog</Link></li>
                        <li onClick={handleLinkClick}><Link href='/contact' className={style.link}>Contact</Link></li>
                    </ul>
                </div>
                {/* Hamburger menu icon */}
                <div className={style.hamburger} onClick={toggleMenu}>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                </div>
                <div className={style.search}>
                    <Image src="/search.svg" width={40} height={40} />
                </div>
            </div>
            <hr className={style.rule} />
        </>
    );
};

export default Navbar;
