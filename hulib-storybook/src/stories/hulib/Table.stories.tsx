import type { Meta } from '@storybook/react'
import {
  Table, TableHeader, TableBody, TableFooter,
  TableHead, TableRow, TableCell, TableCaption,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

export default {
  title: 'Hulib/Table',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

const invoices = [
  { id: 'INV-001', status: 'Paid',    method: 'Credit Card', amount: '$250.00' },
  { id: 'INV-002', status: 'Pending', method: 'PayPal',      amount: '$150.00' },
  { id: 'INV-003', status: 'Paid',    method: 'Bank',        amount: '$350.00' },
  { id: 'INV-004', status: 'Failed',  method: 'Credit Card', amount: '$50.00' },
]

export const Default = {
  render: () => (
    <Table>
<TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((inv) => (
          <TableRow key={inv.id}>
            <TableCell className="font-bold">{inv.id}</TableCell>
            <TableCell>
              <Badge variant={inv.status === 'Paid' ? 'success' : inv.status === 'Failed' ? 'destructive' : 'warning'}>
                {inv.status}
              </Badge>
            </TableCell>
            <TableCell>{inv.method}</TableCell>
            <TableCell className="text-right font-bold">{inv.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$800.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}
