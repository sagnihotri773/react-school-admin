import React from 'react'
import { CardHeader } from '../card';
import { isMobile, MoreVerticalIcon, PlusIcon, UploadIcon, DownloadIcon } from '../../../utils/utils';
import { Button } from '../../ui/button';
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../../ui/dropdown-menu"
import { useNavigate } from 'react-router-dom';

export default function CardHeaderComp(props) {
    const { title, CreateBtn = '', Import = '', Export = '', totalRecord, createUrl, handleActions } = props;
    const navigate = useNavigate();


    const routeRedirect = (value) => {
        navigate(value);
    };

    const btnRender = () => {
        return !isMobile ?
            <>
                <span className='ml-auto'></span>
                {CreateBtn &&
                    <Button type='button' className="ml-2 bg-[#4c6fff] text-white hover:bg-[#3b55d6]" size="sm" onClick={(e) => routeRedirect(createUrl)}>
                        <PlusIcon className="w-4 h-4 " /> &nbsp; {CreateBtn}
                    </Button>}
                {Import &&
                    <Button type='button' className="ml-2 bg-[#2980b9] text-white hover:bg-[#1f6692]" size="sm" onClick={(e) => props.handleActions(1)}>
                        <UploadIcon className="w-4 h-4 " /> &nbsp;{Import}
                    </Button>}
                {Export &&
                    <Button type='button' className="ml-2 bg-[#1abc9c] text-white hover:bg-[#148f77]" size="sm" onClick={(e) => props.handleActions(2)}>
                        <DownloadIcon className="w-4 h-4" /> &nbsp;{Export}
                    </Button>}
            </>
            :
            <DropdownMenu className="text-black">
                <DropdownMenuTrigger asChild className='ml-auto text-black'>
                    <Button type='button'
                        className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800 dark:bg-black-800 dark:text-white-800 text-black"
                        size="icon"
                        variant="ghost">
                        <MoreVerticalIcon className="w-4 h-4" />
                        <span className="sr-only"> More </span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" >
                    {CreateBtn &&
                        <DropdownMenuItem className="text-black" onClick={(e) => routeRedirect(createUrl)}> <PlusIcon className="w-4 h-4 text-black" /> &nbsp; {CreateBtn} </DropdownMenuItem>}
                    {Import &&
                        <DropdownMenuItem onClick={(e) => props.handleTeacherActions(1)} className="text-black dark:bg-black-800"> <UploadIcon className="w-4 h-4 text-black" /> &nbsp; {Import}</DropdownMenuItem>}
                    {Export &&
                        <DropdownMenuItem onClick={(e) => props.handleTeacherActions(2)} className="text-black " > <DownloadIcon className="w-4 h-4 text-black" /> &nbsp; {Export}</DropdownMenuItem>}
                </DropdownMenuContent>
            </DropdownMenu>
    }
    return (
        <CardHeader>
            <div className="flex items-center">
                <h1 className="font-semibold  md:text-2xl text-black"> {title} </h1>
                {btnRender()}
            </div>
            <strong className='mt-0 text-[#209f20]'> Showing {`(${totalRecord})`} out of 10 </strong>
        </CardHeader>
    )
}
