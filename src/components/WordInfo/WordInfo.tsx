import styles from './WordInfo.module.scss'
import { BiPlay } from 'react-icons/bi'

interface WordInfoProps {
    word: string | undefined
    phonetic: string | undefined
}

export default function WordInfo ({ word, phonetic }: WordInfoProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wordInfo}>
                <h1 className={styles.wordInfo__word}>{word}</h1>
                <p className={styles.wordInfo__phonetic}>{phonetic}</p>
            </div>
            <button className={styles.playBtn} type='button'>
                <BiPlay className={styles.playBtn__icon} />
            </button>
        </div>
    )
}