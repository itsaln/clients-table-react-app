import type { Table } from '@tanstack/react-table'
import cn from 'clsx'
import type { Client } from '@features/client'

type Props = {
	table: Table<Client>
}

export const TablePagination = ({ table }: Props) => {
	return (
		<div className='mt-4 flex items-center gap-4'>
			<button
				onClick={() => table.previousPage()}
				disabled={!table.getCanPreviousPage()}
				className={cn('rounded border px-3 py-1', {
					'opacity-50': !table.getCanPreviousPage()
				})}
			>
				Назад
			</button>

			<button
				onClick={() => table.nextPage()}
				disabled={!table.getCanNextPage()}
				className={cn('rounded border px-3 py-1', {
					'opacity-50': !table.getCanNextPage()
				})}
			>
				Вперед
			</button>

			<div className='ml-auto'>
				Страница {table.getState().pagination.pageIndex + 1} из {table.getPageCount()}
			</div>
		</div>
	)
}
