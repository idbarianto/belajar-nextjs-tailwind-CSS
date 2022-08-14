

import { useState, useEffect } from "react";

let Nav = () => {

    const [isFixed, setIsFixed] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => setIsActive(!isActive);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("header");
            const fixedNav = header.offsetTop;
            if(window.pageYOffset > fixedNav) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`${isFixed ? 'fixed z-[9999] opacity-95' : 'absolute'} bg-white top-0 left-0 w-full flex items-center z-10`}>
                <div className="container">
                    <div className="flex items-center justify-between relative">
                        <div className="px-4">
                            <a href="#" className="font-bold text-lg block py-6">Barianto</a>
                        </div>
                        <div className="flex items-center px-4">
                            <button type="button" onClick={toggleClass} id="hamburger" className={`${isActive && 'hamburger-active' } absolute block right-4 lg:hidden`}>
                                <span className="burger-line transition duration-300 ease-in-out origin-top-left"></span>
                                <span className="burger-line transition duration-300 ease-in-out"></span>
                                <span className="burger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                            </button>

                            <nav className={`${!isActive && 'hidden'} absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}>
                                <ul className="block lg:flex">
                                    <li className="group">
                                        <a href="#" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Beranda</a>
                                    </li>
                                    <li className="group">
                                        <a href="#" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Tentang Saya</a>
                                    </li>
                                    <li className="group">
                                        <a href="#" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">My Portofolio</a>
                                    </li>
                                    <li className="group">
                                        <a href="#" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Client</a>
                                    </li>
                                    <li className="group">
                                        <a href="#" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Blog</a>
                                    </li>
                                    <li className="group">
                                        <a href="#" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}


export default Nav;