import React from 'react';
import { Skeleton } from '@mui/material';
import { TableRow, TableCell } from "../../ui/table"

export default function TableSkeleton(props) {

    const generateNumbersArray = (end) => {
        const numbers = [];
        for (let i = 1; i <= end; i++) {
            numbers.push(i);
        }
        return numbers;
    }

    const numbers = generateNumbersArray(props.value);
    return (
        numbers?.map((x, i) => (
            <TableRow key={i}>
                <TableCell className="font-medium"> <Skeleton variant="text" sx={{ fontSize: '1rem' }} /></TableCell>
                <TableCell className="font-medium"> <Skeleton variant="text" sx={{ fontSize: '1rem' }} /></TableCell>
                <TableCell className="font-medium"> <Skeleton variant="text" sx={{ fontSize: '1rem' }} /></TableCell>
                <TableCell className="font-medium"> <Skeleton variant="text" sx={{ fontSize: '1rem' }} /></TableCell>
            </TableRow>

        ))
    )
}
