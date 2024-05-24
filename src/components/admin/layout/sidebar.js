import React, { useState } from 'react';
import { Badge } from "../../ui/badge"
import { Link, useLocation } from "react-router-dom";
import { GraduationCapIcon, HomeIcon, LineChartIcon, PackageIcon, ShoppingCartIcon, UsersIcon, ChevronRightIcon, isMobile } from '../../../utils/utils'
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "../../ui/collapsible";
import { MenuItems } from '../../../utils/menus';
import './sidebar.css'

export const data = [
  { id: 1, displayValue: "Dashboard", path: '/dashboard', icon: <HomeIcon className="h-4 w-4" /> },
  { id: 2, displayValue: "Teachers", path: '/teacher/listing', icon: <UsersIcon className="h-4 w-4" /> },
  { id: 3, displayValue: "Students", path: '/students/listing', icon: <UsersIcon className="h-4 w-4" /> },
  { id: 4, displayValue: "Orders", path: '/', icon: <ShoppingCartIcon className="h-4 w-4" />, count: <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">12</Badge> },
  { id: 5, displayValue: "Products", path: '/products/listing', icon: <PackageIcon className="h-4 w-4" /> },
  { id: 6, displayValue: "Users", path: '/users', icon: <UsersIcon className="h-4 w-4" /> },
]
const Sidebar = () => {
  const [active, setActive] = useState(1);
  const location = useLocation();
  const routeName = location?.pathname?.toLowerCase()





  return (
    //`border-r bg-gray-100/40 lg:block dark:bg-gray-800/40 hidden`
    <div className={`sideBar-bg-color text-white flex flex-col gap-4 ${isMobile && 'customHide'}`}>
      <div className="flex flex-col gap-2">
        <div className="flex h-[60px] items-center px-6">
          <Link className="flex items-center gap-2 font-semibold" to="/">
            <GraduationCapIcon className="h-6 w-6" />
            <span className=""> ABC School </span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start text-sm font-medium ">
            {MenuItems.map((x, index) => (
              <Collapsible className="grid gap-1">
                <CollapsibleTrigger className={`flex items-center gap-2 rounded-md py-2 [&[data-state=open]>svg]:rotate-90 ${!x.sub && 'pr-3'}`} style={{ outline: 'none' }}>
                  <Link
                    className={`flex items-center gap-2 rounded-md pl-2 hover:bg-gray-800 transition-colors w-100 ${routeName === x.link ? "" : ""}`}
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
    </div >
  )
}

export default Sidebar;

export const Nested = (x, sub) => {
  return <CollapsibleContent className="grid gap-1 pl-4">
    <Link
      className="items-center gap-2 rounded-md pl-2 py-1 hover:bg-transparent transition-colors"
      to={sub.link}
    >
      <Collapsible className="grid gap-1">
        <CollapsibleTrigger className={`flex items-center gap-2 rounded-md [&[data-state=open]>svg]:rotate-90 ${!x.sub && 'pr-3'}`} style={{ outline: 'none' }}>
          <li> {sub.label} </li>
          {sub.subShow && <ChevronRightIcon className="ml-auto mr-2 h-4 w-4 transition-all" > </ChevronRightIcon>}
        </CollapsibleTrigger>

        <CollapsibleContent className="grid gap-1 pl-1">
          {sub?.submenu?.map((x) => (
            <Link
              className="items-center gap-2 rounded-md pl-3 py-1  transition-colors"
              to={x.link}
            >
              <li> {x.label} </li>
            </Link>
          ))}
        </CollapsibleContent>

      </Collapsible>
    </Link>
  </CollapsibleContent>
}