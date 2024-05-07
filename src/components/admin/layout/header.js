import React, { useState } from 'react'
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../../ui/dropdown-menu"
import { Package2Icon, MenuIcon, XIcon } from '../../../utils/utils'
import { Button } from "../../ui/button"
import MenuItems from '../../../utils/menus'
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserImg from '../../../media/download.png'


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    console.log("location?.pathname ", location?.pathname);

    const handleLogout = () => {
        console.log("handleLogout");
        localStorage.clear();
        navigate('/');
    }

    return (
        <header
            className="flex h-14 lg:h-[60px] items-center gap-4 border-b px-6 theam_bg">
            <Link className="lg:hidden text-black" to="#">
                <Package2Icon className="h-6 w-6" />
                <span className="sr-only">Home</span>
            </Link>
            <div className="flex-1">
                <h1 className="font-semibold text-lg text-black">{props.title}</h1>
            </div>
            <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <div className="ml-auto flex-1 sm:flex-initial">
                    <div className="relative text-end displayBtnhide">
                        <Button className="z-10" size="icon" variant="outline" onClick={toggleSidebar}>
                            <MenuIcon className="h-6 w-6 text-lg text-black" />
                            <span className="sr-only">Toggle sidebar</span>
                        </Button>
                    </div>

                    {isOpen && (
                        <div className="fixed top-0 left-0 w-80 bg-gray-200 h-full z-20" style={{ background: 'rgb(247 249 249)' }} >
                            <div className="flex h-[60px] items-center px-6 grid grid-cols-2 gap-4">
                                <div class="text-black">
                                    <Link className="flex items-center gap-2 font-semibold" to="#">
                                        <Package2Icon className="h-6 w-6" />
                                        <span className="dark:text-black-800">LOGO</span>
                                    </Link>
                                </div>
                                <div class="text-end">
                                    <Button className="text-black p-2 rounded-full" variant="ghost" onClick={toggleSidebar}>
                                        <XIcon className="h-4 w-4 " />
                                    </Button>
                                    {/* <div className="text-end ">
                                <span className="text-end " >Close</span>
                            </div> */}
                                </div>


                            </div>
                            <div className="flex-1">
                                <nav className="grid items-start px-4 text-sm font-medium">
                                    {MenuItems.map((x) => (
                                        <Link
                                            className={`dark:text-black-800 flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:hover:text-gray-50  text-gray-900 
                                    ${x.link == location?.pathname ? "bg-gray-100" : ""}
                                    `}
                                            to={x.path}  >
                                            {x.icon}
                                            {x.label}
                                            {x.count}
                                        </Link>
                                    ))}

                                </nav>
                            </div>
                        </div>
                    )}
                </div>
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button className="rounded-full" size="icon" variant="ghost">
                            <img
                                alt="Avatar"
                                className="rounded-full"
                                height="32"
                                src={UserImg}
                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                                width="32" />
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="dark:bg-black-800 dark:text-white-800 text-black">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}

export default Header;