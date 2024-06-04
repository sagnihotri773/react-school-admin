import React from 'react'
import { Table, TableBody, TableCell, TableRow } from '../table'
import TableHeaderComponent from './TableHeader'
import TableListingSkeleton from './tableListingSkeleton'

export const hTitls = [
    { title: 'Title', value: 'Title' },
    { title: 'Amount Paid', value: 'Amount Paid' },
    { title: 'Date', value: 'Date' },
    { title: 'Received By', value: 'Received By' },
    { title: 'Action', value: 'Action' },
]

const data = []

export default function PaymentOfYear() {
    return (
        <>
            <Table>
                <TableHeaderComponent hTitls={hTitls} />
                <TableBody>
                    {data?.length > 0 ? data?.map((record) => (
                        <TableRow className="hover:bg-gray-100">
                            <TableCell className="font-medium">{record.name}</TableCell>
                            <TableCell>{record.email}</TableCell>
                            <TableCell>{record.class}</TableCell>
                        </TableRow>
                    )) :
                        <TableListingSkeleton count={5 == 0 ? 0 : 5} />
                    }
                </TableBody>
            </Table>
        </>
    )
}
