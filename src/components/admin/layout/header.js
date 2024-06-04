import React, { useState } from 'react'
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../../ui/dropdown-menu"
import { GraduationCapIcon, MenuIcon, XIcon, ChevronRightIcon } from '../../../utils/utils'
import { Button } from "../../ui/button"
import { MenuItems } from '../../../utils/menus'
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserImg from '../../../media/download.png'
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "../../ui/collapsible";
// import { Nested } from './sidebar';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState(1);

    const navigate = useNavigate();
    const location = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const routeName = location?.pathname?.toLowerCase()

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <header className="flex h-14 lg:h-[60px] sideBar-bg-color items-center gap-4 border-b px-6 theam_bg ">
            <Link className="lg:hidden text-black" to="#">
                <GraduationCapIcon className="h-6 w-6" />
                {/* <span className="sr-only">Home</span> */}
            </Link>
            <div className="flex-2">
                <h1 className="font-semibold text-lg text-black">{props.title}</h1>
                {/* <HeaderBreadcrumb breadcrumb={props.breadcrumb} /> */}

            </div>
            <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <div className="ml-auto flex-1 sm:flex-initial ">
                    <div className="relative text-end displayBtnhide">
                        <Button className="z-10" size="icon" variant="outline" onClick={toggleSidebar}>
                            <MenuIcon className="h-6 w-6 text-lg text-black" />
                        </Button>
                    </div>

                    {isOpen && (
                        <div className="fixed top-0 left-0 w-80 sideBar-bg-color text-white h-full z-20 overflow-auto" >
                            <div className="flex h-[60px] items-center px-6 grid grid-cols-2 gap-4">
                                <div class="text-black">
                                    <Link className="flex items-center gap-2 font-semibold text-white" to="#">
                                        <GraduationCapIcon className="h-6 w-6" />
                                        <span className="dark:text-black-800">LOGO</span>
                                    </Link>
                                </div>
                                <div class="text-end text-white">
                                    <Button className="text-black p-2 rounded-full" variant="ghost" onClick={toggleSidebar}>
                                        <XIcon className="h-4 w-4 text-white " />
                                    </Button>
                                </div>
                            </div>

                            <div className="flex-1">
                                <nav className="grid items-start text-sm font-medium text-black  mb-3">
                                    {MenuItems.map((x, index) => (
                                        <Collapsible className="grid gap-1">
                                            <CollapsibleTrigger className={`flex  text-white items-center gap-2 rounded-md py-2 [&[data-state=open]>svg]:rotate-90 ${!x.sub && 'pr-3'}`} style={{ outline: 'none' }}>
                                                <Link
                                                    className={`flex items-center gap-2 rounded-md px-3 transition-colors ${!x.sub ? 'w-100' : 'w-75'} ${routeName === x.link ? "" : ""}`}
                                                    to={x.link} onClick={(e) => setActive(x.id)}>
                                                    {x.icon}
                                                    {x.label}
                                                    {x.count}
                                                </Link>
                                                {x.sub && <ChevronRightIcon className="ml-auto mr-2 h-4 w-4 transition-all" > </ChevronRightIcon>}

                                            </CollapsibleTrigger>
                                            {x.submenu?.map((sub) => (
                                                Nested(x, sub)
                                            ))}
                                        </Collapsible>

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
                                className="rounded-full cursor-pointer"
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

export const Nested = (x, sub) => {
    if (sub.subShow) {
      return <CollapsibleContent className="grid gap-2 pl-4 py-1">
        <Collapsible className="grid gap-1">
          <CollapsibleTrigger className={`flex items-center gap-2 rounded-md hover:text-[#0056b3] hover:bg-transparent [&[data-state=open]>svg]:rotate-90 ${!x.sub && 'pr-3'}`} style={{ outline: 'none' }}>
            <li className='text-white'> {sub.label} </li>
            {sub.subShow && <ChevronRightIcon className="ml-auto mr-2 h-4 w-4 transition-all text-white" > </ChevronRightIcon>}
          </CollapsibleTrigger>
  
          <CollapsibleContent className="grid gap-1 pl-1">
            {sub?.submenu?.map((x) => (
              <Link
                className="items-center gap-2 rounded-md pl-2 py-1  transition-colors text-white"
                to={x.link}
              >
                <li> {x.label}</li>
              </Link>
            ))}
          </CollapsibleContent>
  
        </Collapsible>
      </CollapsibleContent>
    } return <CollapsibleContent className="grid gap-1 pl-4">
      <Link
        className="items-center gap-2 rounded-md py-1 hover:bg-transparent transition-colors text-white"
        to={sub.link}>
        <Collapsible className="grid gap-1">
          <CollapsibleTrigger className={`flex items-center gap-2 rounded-md [&[data-state=open]>svg]:rotate-90 ${!x.sub && 'pr-3'}`} style={{ outline: 'none' }}>
            <li> {sub.label} </li>
            {sub.subShow && <ChevronRightIcon className="ml-auto mr-2 h-4 w-4 transition-all" > </ChevronRightIcon>}
          </CollapsibleTrigger>
        </Collapsible>
      </Link>
    </CollapsibleContent>
  }