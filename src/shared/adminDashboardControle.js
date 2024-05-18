import React from 'react';
// import { PlusIcon, ListIcon, UsersIcon, PackageIcon, TicketIcon, BarChartIcon, CogIcon, TrashIcon, CirclePlusIcon, DownloadIcon, UploadIcon, RefreshCwIcon, LockIcon, SignalIcon, SettingsIcon, ShoppingCartIcon } from '../utils/utils'
import { Button } from '../components/ui/button';
import { quickaction } from './adminDashboardBtn';
import './adminDashboardControle.css'
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

export default function AdminDashboardControle() {
  const navigate = useNavigate();

  const routeRedirect = (value) => {
    navigate(value);
};
  return (
    <div className='rounded-lg w-full border border-gray-200 p-2 '>
      <div className="flex row gap-2 ml-0 ">
        {quickaction?.map((btn, i) => (
         <Tooltip title={btn.title} placement="top">
          <Button key={i} className={`${btn.color}  text-white`} size="icon" variant="outline" style={{ background: btn.colorCode }} onClick={(e) => routeRedirect(btn.link)}>
            {btn.icon}
          </Button>
         </Tooltip>
        ))}
      </div>
    </div>
  )
}