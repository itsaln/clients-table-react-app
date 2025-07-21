import { ClientTable } from '@features/client'

import styles from './Clients.module.scss'

export const Clients = () => {
	return (
		<section className={styles.clients}>
			<div className='container'>
				<ClientTable />
			</div>
		</section>
	)
}
