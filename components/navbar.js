import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from "@/styles/navbar.module.css"
import { useRouter } from 'next/router';


const Navbar = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query
    const [showMenu, setShowMenu] = useState(false);
    const router = useRouter();

    const toggleSearchBar = () => {
        setShowSearchBar(!showSearchBar);
    };
    
    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setShowSearchBar(false);
    };

    const handleLinkClick = () => {
        setShowMenu(false); // Close menu when a link is clicked
    };

    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
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
                <div className={style.search} onClick={toggleSearchBar}>
                    <Image src="/search.svg" width={40} height={40} />
                </div>
            </div>
            <hr className={style.rule} />
            {showSearchBar && (
                <div className={style.searchBar}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className={style.searchBtn} onClick={handleSearch}>Search</button>
                </div>
            )}
        </>
    );
};

export default Navbar;