import React from 'react'
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../ui/table"
import { Checkbox } from "../../ui/checkbox";

export default function TableHeaderComponent(props) {

    const { selectAll, handleSelectAllChange, hTitls = [] } = props;

    return (
        <TableHeader>
            <TableRow>
                <TableHead className="text-black w-8 leading-none">
                    <Checkbox
                        id="students"
                        checked={selectAll}
                        onClick={handleSelectAllChange}
                    />
                </TableHead>
                {hTitls?.length > 0 ? hTitls?.map((x) => (
                    <TableHead className="text-left cursor-pointer">
                        {x.title}
                    </TableHead>
                )) : ''}
            </TableRow>
        </TableHeader>
    )
}
