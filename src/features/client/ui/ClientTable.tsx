import { useMemo, useState } from 'react'
import {
	type ColumnDef,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type SortingState,
	useReactTable
} from '@tanstack/react-table'
import { isBefore } from 'date-fns'
import type { Client } from '@features/client'
import { useClients } from '../model/use-clients'
import { TableFilter } from './TableFilter'
import { TablePagination } from './TablePagination'

export const ClientTable = () => {
	const [globalFilter, setGlobalFilter] = useState('')
	const [statusFilter, setStatusFilter] = useState('')
	const [fromDate, setFromDate] = useState<Date | null>(null)
	const [toDate, setToDate] = useState<Date | null>(null)
	const [sorting, setSorting] = useState<SortingState>([])

	const { clients, isLoading } = useClients()

	const filteredData = useMemo(() => {
		return clients.filter((client) => {
			if (fromDate && isBefore(client.registeredAt, fromDate)) return false

			return !(toDate && isBefore(client.registeredAt, toDate))
		})
	}, [clients, fromDate, toDate])

	console.log('isLoading', isLoading)

	const columns: ColumnDef<Client>[] = [
		{
			accessorKey: 'name',
			header: 'Название'
		},
		{
			accessorKey: 'inn',
			header: 'ИНН'
		},
		{
			accessorKey: 'status',
			header: 'Статус'
		},
		{
			accessorKey: 'registeredAt',
			header: 'Дата регистрации',
			cell: (info) => new Date(info.getValue<string>()).toLocaleDateString()
		}
	]

	const table = useReactTable({
		data: filteredData,
		columns,
		state: {
			globalFilter,
			sorting
		},
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting
	})

	return (
		<div className='p-4'>
			<TableFilter
				table={table}
				globalFilter={globalFilter}
				setGlobalFilter={setGlobalFilter}
				statusFilter={statusFilter}
				setStatusFilter={setStatusFilter}
				fromDate={fromDate}
				setFromDate={setFromDate}
				toDate={toDate}
				setToDate={setToDate}
			/>

			<table className='w-full border'>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id} className='border-b'>
							{headerGroup.headers.map((header) => (
								<th key={header.id} className='p-2 text-left'>
									{flexRender(header.column.columnDef.header, header.getContext())}
								</th>
							))}
						</tr>
					))}
				</thead>

				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id} className='border-b'>
							{row.getVisibleCells().map((cell) => (
								<td key={cell.id} className='p-2'>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>

			<TablePagination table={table} />
		</div>
	)
}
