import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { images } from "../constants";
import { userActions } from "../store/reducers/userReducers"

const navItemsInfo = [
    { name: "Home", type: "link", href: "/"},
    { name: "Articles", type: "link", href: '/articles'},
    { name: "About us", type: "link", href:'/about'},
    { name: "Contact us", type: "link", href:'/contact'},
    { name: "Pricing", type: "link", href:'/pricing'},
    { name: "FAQ", type: "link", href:'/faq'},
];

const NavItem = ({item}) => {
    const [dropdown, setDropdown] = useState(false);

    const toggleDropdownHandler = () => {
        setDropdown((curState) => {
            return !curState;
        });
    };

    return (
        <li className="relative group">
            {item.type === "link" ? (
            <>
                <Link to={item.href} className="px-4 py-2">
                    {item.name}
                </Link>
                <span className="cursor-pointer text-dark-first absolute transition-all duration-500 font-bold right-0 top-0 opacity-0 group-hover:right-[90%] group-hover:opacity-100">
                    |
                </span>
            </>
            ) : (
                <div className="flex flex-col items-center">
                    <button className="px-4 py-2 flex gap-x-1 items-center"
                    onClick={toggleDropdownHandler}>
                        {item.name}
                        <MdKeyboardArrowDown />
                    </button>
                    <div className={`${dropdown ? "block" : 'hidden'} lg:hidden transition-all duration-500 pt-4 lg:absolute lg:top-6 lg:right-0 lg:transform lg:transalte-y-full lg:group-hover:block w-max`}>
                        <ul className="bg-light-first lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                            {item.items.map((page, index) => (
                                    <Link 
                                    key={index}
                                    href="/" 
                                    className="hover:bg-light-first hover:text-dark-first px-4 py-2 text-gray-500"> 
                                    {page}.title
                                    </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </li>
    );
};

const Header = () => {
    const dispatch = useDispatch();
    const [navIsVisible, setNavIsVisible] = useState(false);
    const userState = useSelector(state => state.user);
    const [profileDropdown, setProfileDropdown] = useState(false);
    const navigate = useNavigate();

    const navVisibilityHandler =() => {
        setNavIsVisible((curState) => {
            return !curState;
        });
    };

    const logoutHandler = () => {
        dispatch(userActions.resetUserInfo());
    };

    return <section className="sticky top-0 left-0 right-0 z-50 bg-white ">
        <header className="container mx-auto px-5 flex justify-between py-8 items-center">
            <div className="flex items-center">
                <img className="h-" src={images.bloom_logo} alt="logo"/>
            </div>
            <div className="lg:hidden z-50">
                {navIsVisible ? (
                <AiOutlineClose className="w-6 h-6" onClick={navVisibilityHandler} /> 
                ) : (
                <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
                )}
                </div>
            <div className={`${
                navIsVisible ? "right-0" : "-right-full"
                } transition-all duration-300 mt-[120px] lg:mt-0 bg-light-first lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-5 items-center`}>
                <ul className="items-center gap-y-5 flex flex-col lg:flex-row gap-x-3">
                    {navItemsInfo.map((item) => (
                        <NavItem key={item.name} item={item}/>
                    ))}
                </ul>
                {userState.userInfo ? (
                    <div className="items-center gap-y-5 flex flex-col lg:flex-row gap-x-3">
                        <div className="relative group">
                            <div className="flex flex-col items-center">
                                <button className="flex gap-x-1 items-center mt-5 lg:mt-0 border-2 border-dark-first bg-dark-first text-white px-6 py-2 rounded-full 
                                hover:bg-opacity-10 hover:border-opacity-0 hover:text-dark-first transition-all duration-300"
                                onClick={() => setProfileDropdown(!profileDropdown)}>
                                    <span>Your Account</span>
                                    <MdKeyboardArrowDown />
                                </button>
                                <div className={`${
                                    profileDropdown ? "block" : 'hidden'
                                    } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:top-6 lg:right-0 lg:transform 
                                    lg:transalte-y-full lg:group-hover:block w-max`}>
                                    <ul className="bg-light-first lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                                        <button
                                        type="button"
                                        className="hover:bg-light-first hover:text-dark-first px-4 py-2 text-gray-500"
                                        onClick={() => navigate('/profile')}> 
                                            Profile Page
                                        </button>
                                        <button
                                        onClick={logoutHandler}
                                        type="button"
                                        className="hover:bg-light-first hover:text-dark-first px-4 py-2 text-gray-500"> 
                                            Logout
                                        </button>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button
                    onClick={() => navigate('/login')}
                    className="mt-5 lg:mt-0 border-2 border-dark-first bg-dark-first text-white px-6 py-2 rounded-full 
                    hover:bg-opacity-10 hover:border-opacity-0 hover:text-dark-first transition-all duration-300">
                        Sign in
                    </button>
                )}
            </div>
        </header>
    </section>
};

export default Header;
