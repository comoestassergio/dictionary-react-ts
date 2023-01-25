import styles from './Loader.module.scss'

import { ImSpinner8 } from 'react-icons/im'

export default function Loader () {
    return (
        <div className={styles.loader}>
            <ImSpinner8 className={styles.loader__icon} />
        </div>
    )
}