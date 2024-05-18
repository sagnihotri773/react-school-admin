import React from 'react'
import { Button } from '../../ui/button';
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../../ui/dropdown-menu"
import { MoreHorizontalIcon, EyeIcon, DeleteIcon, TrashIcon } from '../../../utils/utils';
import { useNavigate } from 'react-router-dom';


export default function TableActionButton(props) {
    const { viewPageUrl = '', editPageUrl = '', id = '', deleteRecord, viewBtn = false, editBtn = false, deleteBtn = false } = props;
    const navigate = useNavigate();

    const routeRedirect = (value) => {
        if (value != '') {
            navigate(value);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                    size="icon"
                    variant="ghost"
                    title="Action buttons"
                >
                    <MoreHorizontalIcon className="w-4 h-4" />
                    <span className="sr-only">More</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {viewBtn && <DropdownMenuItem onClick={(e) => routeRedirect(viewPageUrl)}><EyeIcon className="mr-2 h-4 w-4" />View</DropdownMenuItem>}
                {editBtn && <DropdownMenuItem onClick={(e) => routeRedirect(editPageUrl)}><DeleteIcon className="mr-2 h-4 w-4" />Edit</DropdownMenuItem>}
                {deleteBtn && <DropdownMenuItem className="text-error" onClick={(e) => deleteRecord(id)}> <TrashIcon className="mr-2 h-4 w-4" />Delete</DropdownMenuItem>}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
