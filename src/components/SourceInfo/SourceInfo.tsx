import styles from './SourceInfo.module.scss'
import { FiExternalLink } from 'react-icons/fi'

interface SourceInfoProps {
    links: string [] | undefined
}

export default function SourceInfo ({ links }: SourceInfoProps) {
    return (
        <div className={styles.sourceInfo}>
            <div className={styles.sourceInfo__divider}></div>
            <p className={styles.sourceInfo__title}>Source</p>
            {links?.map((el, index) => (
                <a key={index} className={styles.sourceInfo__link} href="#" target={'_blank'}>
                    {el}
                    <FiExternalLink />
                </a>
            ))}
        </div>
    )
}