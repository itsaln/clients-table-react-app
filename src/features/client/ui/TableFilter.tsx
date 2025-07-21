import 'react-datepicker/dist/react-datepicker.css'

import type { Dispatch, SetStateAction } from 'react'
import DatePicker from 'react-datepicker'
import type { Table } from '@tanstack/react-table'
import type { Client } from '@features/client'

type Props = {
	table: Table<Client>
	globalFilter: string
	setGlobalFilter: Dispatch<SetStateAction<string>>
	statusFilter: string
	setStatusFilter: Dispatch<SetStateAction<string>>
	fromDate: Date | null
	setFromDate: Dispatch<SetStateAction<Date | null>>
	toDate: Date | null
	setToDate: Dispatch<SetStateAction<Date | null>>
}

export const TableFilter = ({
	table,
	globalFilter,
	setGlobalFilter,
	statusFilter,
	setStatusFilter,
	fromDate,
	setFromDate,
	toDate,
	setToDate
}: Props) => {
	return (
		<div className='mb-4 flex gap-4'>
			<input
				type='text'
				placeholder='Поиск по названию...'
				value={globalFilter}
				onChange={(e) => setGlobalFilter(e.target.value)}
				className='rounded border p-2'
			/>

			<select
				value={statusFilter}
				onChange={(e) => {
					setStatusFilter(e.target.value)
					table.getColumn('status')?.setFilterValue(e.target.value)
				}}
				className='rounded border p-2'
			>
				<option value=''>Все статусы</option>
				<option value='active'>active</option>
				<option value='inactive'>inactive</option>
			</select>

			<div className='flex items-center gap-4'>
				<label className='text-sm'>Дата от:</label>
				<DatePicker
					selected={fromDate}
					onChange={(date) => setFromDate(date)}
					dateFormat='dd.MM.yyyy'
					className='rounded border p-2'
					placeholderText='Дата от'
				/>

				<label className='text-sm'>до:</label>
				<DatePicker
					selected={toDate}
					onChange={(date) => setToDate(date)}
					dateFormat='dd.MM.yyyy'
					className='rounded border p-2'
					placeholderText='Дата до'
				/>
			</div>
		</div>
	)
}
