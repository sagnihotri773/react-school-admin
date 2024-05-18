import React from 'react'
import { Skeleton } from '@mui/material'
import { TableRow, TableCell } from "../../ui/table"

export default function TableListingSkeleton({ count = 0 }) {
    console.log("count", count);
    const mapFuntion = Array.from({ length: count }, (_, index) => ({
        label: index + 1
    }));
    return (
        count !== 0 ?
            <TableRow>
                {mapFuntion?.map((x, i) => (
                    <TableCell> <Skeleton animation="wave" />  </TableCell>
                ))}
            </TableRow>
            :
            <div className='flex text-center'>
                Loading
            </div>
    )
}
